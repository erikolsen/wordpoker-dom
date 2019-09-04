export const API_ROOT = 'http://localhost:5000'
export const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
}

export const SCORES = {
  "a": 1, "c": 3, "b": 3, "e": 1, "d": 2, "g": 2,
  "f": 4, "i": 1, "h": 4, "k": 5, "j": 8, "m": 3,
  "l": 1, "o": 1, "n": 1, "q": 10, "p": 3, "s": 1,
  "r": 1, "u": 1, "t": 1, "w": 4, "v": 4, "y": 4,
  "x": 8, "z": 10
}

export const dealt = [
  {letter: 'A', held: false},
  {letter: 'B', held: false},
  {letter: 'C', held: false},
  {letter: 'D', held: false},
  {letter: 'E', held: false},
  {letter: 'F', held: false},
  {letter: 'G', held: false}
]

export const remaining = [
  {letter: 'H', held: false},
  {letter: 'I', held: false},
  {letter: 'J', held: false},
  {letter: 'K', held: false},
  {letter: 'L', held: false},
  {letter: 'M', held: false},
  {letter: 'N', held: false}
]

export const DECK = [{"letter": "A", "value": "1", "held": false}, {"letter": "A", "value": "1", "held": false}, {"letter": "A", "value": "1", "held": false}, {"letter": "A", "value": "1", "held": false}, {"letter": "A", "value": "1", "held": false}, {"letter": "A", "value": "1", "held": false}, {"letter": "A", "value": "1", "held": false}, {"letter": "A", "value": "1", "held": false}, {"letter": "A", "value": "1", "held": false}, {"letter": "B", "value": "4", "held": false}, {"letter": "B", "value": "4", "held": false}, {"letter": "C", "value": "4", "held": false}, {"letter": "C", "value": "4", "held": false}, {"letter": "D", "value": "2", "held": false}, {"letter": "D", "value": "2", "held": false}, {"letter": "D", "value": "2", "held": false}, {"letter": "D", "value": "2", "held": false}, {"letter": "D", "value": "2", "held": false}, {"letter": "E", "value": "1", "held": false}, {"letter": "E", "value": "1", "held": false}, {"letter": "E", "value": "1", "held": false}, {"letter": "E", "value": "1", "held": false}, {"letter": "E", "value": "1", "held": false}, {"letter": "E", "value": "1", "held": false}, {"letter": "E", "value": "1", "held": false}, {"letter": "E", "value": "1", "held": false}, {"letter": "E", "value": "1", "held": false}, {"letter": "E", "value": "1", "held": false}, {"letter": "E", "value": "1", "held": false}, {"letter": "E", "value": "1", "held": false}, {"letter": "E", "value": "1", "held": false}, {"letter": "F", "value": "4", "held": false}, {"letter": "F", "value": "4", "held": false}, {"letter": "G", "value": "3", "held": false}, {"letter": "G", "value": "3", "held": false}, {"letter": "G", "value": "3", "held": false}, {"letter": "H", "value": "3", "held": false}, {"letter": "H", "value": "3", "held": false}, {"letter": "H", "value": "3", "held": false}, {"letter": "H", "value": "3", "held": false}, {"letter": "I", "value": "1", "held": false}, {"letter": "I", "value": "1", "held": false}, {"letter": "I", "value": "1", "held": false}, {"letter": "I", "value": "1", "held": false}, {"letter": "I", "value": "1", "held": false}, {"letter": "I", "value": "1", "held": false}, {"letter": "I", "value": "1", "held": false}, {"letter": "I", "value": "1", "held": false}, {"letter": "J", "value": "10", "held": false}, {"letter": "K", "value": "5", "held": false}, {"letter": "L", "value": "2", "held": false}, {"letter": "L", "value": "2", "held": false}, {"letter": "L", "value": "2", "held": false}, {"letter": "L", "value": "2", "held": false}, {"letter": "M", "value": "4", "held": false}, {"letter": "M", "value": "4", "held": false}, {"letter": "N", "value": "2", "held": false}, {"letter": "N", "value": "2", "held": false}, {"letter": "N", "value": "2", "held": false}, {"letter": "N", "value": "2", "held": false}, {"letter": "N", "value": "2", "held": false}, {"letter": "O", "value": "1", "held": false}, {"letter": "O", "value": "1", "held": false}, {"letter": "O", "value": "1", "held": false}, {"letter": "O", "value": "1", "held": false}, {"letter": "O", "value": "1", "held": false}, {"letter": "O", "value": "1", "held": false}, {"letter": "O", "value": "1", "held": false}, {"letter": "O", "value": "1", "held": false}, {"letter": "P", "value": "4", "held": false}, {"letter": "P", "value": "4", "held": false}, {"letter": "Q", "value": "10", "held": false}, {"letter": "R", "value": "1", "held": false}, {"letter": "R", "value": "1", "held": false}, {"letter": "R", "value": "1", "held": false}, {"letter": "R", "value": "1", "held": false}, {"letter": "R", "value": "1", "held": false}, {"letter": "R", "value": "1", "held": false}, {"letter": "S", "value": "1", "held": false}, {"letter": "S", "value": "1", "held": false}, {"letter": "S", "value": "1", "held": false}, {"letter": "S", "value": "1", "held": false}, {"letter": "S", "value": "1", "held": false}, {"letter": "T", "value": "1", "held": false}, {"letter": "T", "value": "1", "held": false}, {"letter": "T", "value": "1", "held": false}, {"letter": "T", "value": "1", "held": false}, {"letter": "T", "value": "1", "held": false}, {"letter": "T", "value": "1", "held": false}, {"letter": "T", "value": "1", "held": false}, {"letter": "U", "value": "2", "held": false}, {"letter": "U", "value": "2", "held": false}, {"letter": "U", "value": "2", "held": false}, {"letter": "U", "value": "2", "held": false}, {"letter": "V", "value": "5", "held": false}, {"letter": "V", "value": "5", "held": false}, {"letter": "W", "value": "4", "held": false}, {"letter": "W", "value": "4", "held": false}, {"letter": "X", "value": "8", "held": false}, {"letter": "Y", "value": "3", "held": false}, {"letter": "Y", "value": "3", "held": false}, {"letter": "Z", "value": "10", "held": false}]


export const TEST_DECK = [{"letter": "A", "value": "1", "held": false}, {"letter": "B", "value": "4", "held": false}, {"letter": "C", "value": "4", "held": false}, {"letter": "D", "value": "2", "held": false}, {"letter": "E", "value": "1", "held": false}, {"letter": "F", "value": "4", "held": false}, {"letter": "G", "value": "3", "held": false}, {"letter": "H", "value": "3", "held": false}, {"letter": "I", "value": "1", "held": false}, {"letter": "J", "value": "10", "held": false}, {"letter": "K", "value": "5", "held": false}, {"letter": "L", "value": "2", "held": false}, {"letter": "M", "value": "4", "held": false}]
