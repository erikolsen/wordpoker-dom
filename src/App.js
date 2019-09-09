import React from 'react';
import _ from 'lodash'
import {API_ROOT, DECK, HEADERS, TEST_DECK} from './constants'

const Card = ({letter, value, held, clickHandler})=> {
  let heldText = held ? <p className='text-sm text-red-500 held text-center'>HELD</p> : ''
  return (
    <div>
      <div onClick={clickHandler} className='card border border-black w-12 h-12'>
        <p className='text-center text-3xl'>
          {letter}
          <sup>{value}</sup>
        </p>
      </div>
      { heldText }
    </div>
  )
}

const WordList = ({wordlist, average, present})=> {
  const visibility = present ? 'visible' : 'invisible'
  return (
    <div className={`m-4 ${visibility}`}>
      <div className='flex justify-between'>
        <h1 className='underline text-2xl'>Word List</h1>
        <button onClick={() => window.location.reload()} className='border border-black p-2 text-xl'>Next Hand</button>
      </div>
      <h2 className='text-xl'>Average: <span>{average}</span></h2>
        {wordlist.map((el, i)=> <p key={i} className='text-xl wordlist'>{el}</p>)}
    </div>
  )
}

const DrawButton = ({draw})=> {
  return (
    <button onClick={() => draw()} className='border border-black p-2 m-4 text-xl' id='draw'>Draw</button>
  )
}

const Selection = ({cards, submit, undo, present})=> {
  let word = cards.map(el=> el.letter).join('')
  let total = cards.reduce((total, el) => total += parseInt(el.value), 0)
  const visibility = present ? 'visible' : 'hidden'

  return (
    <div className={`${visibility}`}>
      <div className='m-4 text-2xl'>
        <p>Selection: <span id='selection'>{word}</span><span onClick={()=> undo()} id='undo' className='text-sm text-red-400'> UNDO</span></p>
        <p>Total: <span id='total'>{total}</span></p>
      </div>
      <div className='flex justify-between'>
        <button onClick={() => submit()} className='border border-black p-2 m-4 text-xl' id='submit'>Submit</button>
      </div>
    </div>
  )
}

class Rack extends React.Component {
  constructor(props){
    super(props)
    this.deck = TEST_DECK
    //this.deck = _.shuffle(DECK)
    this.state = {
      readyToSelect: false,
      currentRack: [],
      selections: [],
      wordlist: [],
      winner: false,
      average: '',
    }
    this.hold = this.hold.bind(this)
    this.select = this.select.bind(this)
    this.submit = this.submit.bind(this)
    this.undo = this.undo.bind(this)
  }

  componentDidMount(){
    this.setState({currentRack: this.deck.splice(0,7) })
  }

  hold(index){
    //let newRack = this.state.currentRack.map((el, idx) => (idx === index ? Object.assign({}, el, { held: true }) : el))
    let newRack = this.state.currentRack.map((el, idx) => idx === index ? {...el, ...{ held: !el.held }} : el)
    this.setState({currentRack: newRack})
  }

  draw(){
    let held = this.state.currentRack.filter(el=> el.held)
    held.forEach(el=> el.held = false)
    let needed = 7 - held.length
    let newCards = this.deck.slice(0, needed)
    let newRack = held.concat(newCards)
    this.setState({currentRack: newRack, readyToSelect: true})
  }

  select(index){
    let selections = this.state.selections
    selections.push(this.state.currentRack[index])
    this.setState({selections: selections})
  }

  handleResponse(data){
    console.log(data)
    this.props.changeCoins(data.coins)
    this.setState({wordlist: data.wordlist, average: data.average, winner: data.winner})
  }

  submit(){
    let rackString = this.state.currentRack.map(el=> el.letter).join('')
    let selectionString = this.state.selections.map(el=> el.letter).join('')
    fetch(`${API_ROOT}/solve`,{
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({ rack: rackString, selection: selectionString, coins: this.props.coins})
    }).then(res => res.json())
      .then(data => this.handleResponse(data) )
  }

  undo(){
    let selections = this.state.selections
    selections.pop()
    this.setState({selections: selections})
  }

  render(){
    let clickHandler = this.state.readyToSelect ? this.select : this.hold
    return (
      <div>
        <div className='flex flex-row justify-between m-4'>
            { this.state.currentRack.map((card,index) =>
              <Card key={index}
                clickHandler={()=> clickHandler(index)}
                letter={card.letter}
                value={card.value}
                held={card.held} />) }
        </div>
        { this.state.readyToSelect ? <Selection present={this.state.wordlist.length === 0} cards={this.state.selections} submit={this.submit} undo={this.undo}/> : <DrawButton draw={()=> this.draw()} /> }
        <WordList wordlist={this.state.wordlist}
          average={this.state.average}
          present={this.state.wordlist.length > 0}
        />
      </div>
    )
  }
}

function App() {
  const [value, setValue] = React.useState(
    localStorage.getItem('wordpoker-coins') || 100
  );
  React.useEffect(() => {
    localStorage.setItem('wordpoker-coins', value);
  }, [value]);

  const changeCoins = coins => {
    console.log('Setting coins', coins)
    setValue(coins)
  }

  return (
    <div>
      <header className='flex w-full bg-black justify-between'>
        <h1 className='text-white text-2xl p-2' id='app-name'>
          Word Poker
        </h1>
        <p className='text-white text-2xl p-2'>Coins: <span id='coins'>{value}</span></p>
      </header>
      <ul className='m-4'>
        <li>Must get at least 10 points to win</li>
        <li>5 letter word pays 2X</li>
        <li>6 letter word pays 3X</li>
        <li>7 letter word pays 5X</li>
      </ul>
      <Rack changeCoins={changeCoins} coins={value}/>
    </div>
  );
}

export default App;
