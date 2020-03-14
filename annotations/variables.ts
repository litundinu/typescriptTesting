let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMutch: null = null;
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

//Array   (array that contains values types=strings inside)
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//Classes
class Car {}
let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

//Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//When to use anotations
// 1. Functions that return 'any' type
let json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); //{x: 10, y: 20}

//When we delare a variable in one line and initialize it later
let words = ["red", "gree,", "blue"];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

//Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
