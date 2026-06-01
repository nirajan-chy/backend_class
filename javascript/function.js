// function
let a = 8;
let b = 7;
function add() {
  return a + b;
}
let result = add();
console.log(result);

function sub() {
  return a - b;
}

console.log(sub());

function mul(m = 9, n = 8) {
  return m * n;
}
console.log(mul());

function sum(m, n) {
  return x + y;
}
console.log(sum((x = 3), (y = 6)));

// arrow function
const test = () => {
  return p + q;
};
console.log(test((p = 9), (q = 9)));

// promises

// resolve and reject
// try and catch

const promise = async() => {
  try {
    const user = await user.create();
    console.log("la thik xa ")
  } catch (error) {
    console.log("error aayo")
  }
};
