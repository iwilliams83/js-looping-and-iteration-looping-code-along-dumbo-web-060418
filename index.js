// Code your solutions in this file
const employees = ['Ada', 'Brendan', 'Ali'];
function printBadges(arr){
  for (let i = 0; i < arr.length; i++) {
    console.log(`Welcome ${arr[i]}! You are employee #${i+1}.`);
  }
  return arr;
}

function maybeTrue () {
  return Math.random() >= 0.5;
}

function tailsNeverFails(){
  let tailsCount = 0;
    while (maybeTrue()){
       tailsCount += 2;
       maybeTrue();
    }
  return `You got ${tailsCount} tails in a row!`;
}
