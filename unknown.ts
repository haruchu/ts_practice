let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'haru';
console.log(typeof userInput);
if (typeof userInput === 'string') {
  userName = userInput;
}