const fruits = [
    "apple",
    "apple2",
    "apples3",
];
const vegetable = [
    "radish1",
    "radish2",
    "radish3",
    "radish4",
];

console.log([...fruits, vegetable]);
console.log([...fruits, ...vegetable]);


const numbers = [
    1, 2, 3, 4, 5
];

const square = numbers.map((number) => {
    return number * number;
})

const squares = numbers.map((number) =>
    number * number
)

console.log(squares);