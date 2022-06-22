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