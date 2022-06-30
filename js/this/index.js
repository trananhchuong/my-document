// const iphone8 = {
//   // property
//   name: "iphone 8",
//   color: "red",
//   weight: 300,

//   // method
//   takePhoto() {
//     console.log(this);
//   },

//   objChild: {
//     name: "obj child",
//     methodChild() {
//       console.log(this);
//     },
//     objChild2: {
//       name: "obj child 2",
//       methodChild2() {
//         console.log(this);
//       },
//     },
//   },
// };

// iphone8.objChild.objChild2.methodChild2();

// function Car(name, color) {
//   this.name = name;
//   this.color = color;
// }

// const mercedes = new Car("mercedes s450", "pink");

// const button = document.getElementById("button1");

// button.onclick = function() {
//   console.dir(this)
// }

// 'use strict'
// function callMe() {
//   console.log(this);
// }
// const myElem = document.querySelector("#my-id");
// myElem.addEventListener("click", callMe); // this ở đây là Elem DOM
// window.callMe(); // this ở đây là Window


let person = {
 firstName: 'Chuong',
 lastName: 'Tran',
 getFullName: function() {
  console.log(`My name is ${this.firstName} ${this.lastName}`);
 }
}

let logName = function(lang){
 console.log(`My name is ${this.firstName} ${this.lastName}`);
 if(lang) {
  console.log(`I speak ${lang}`);
 }
}

// logName();//"My name is undefined undefined"
// let logFullName = logName.bind(person);
// logFullName();//"My name is Chuong Tran"

// logName.call(person, 'english');
logName.apply(person, ['english']);




