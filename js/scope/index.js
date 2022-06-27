"use strict";

function getCounter() {
  let counter = 0;

  function increase() {
    return counter++;
  }

  return increase;
}


const counter = getCounter()
console.log("counter", counter())
console.log("counter", counter())
console.log("counter", counter())
console.log("counter", counter())
console.log("counter", counter())
console.log("counter", counter())
console.log("counter", counter())

