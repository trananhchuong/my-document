//Example 1: create logger

// function createLogger(namespace) {
//   function logger(message) {
//     console.log(`[${namespace}]: ${message}`);
//   }
//   return logger;
// }

// //Register.js

// const infoLogger = createLogger("INFO");

// infoLogger("Bắt đầu gửi mail");
// infoLogger("Gửi mail thành công");

// //ForgotPassword.js

// const infoLoggerError = createLogger("ERROR");

// infoLoggerError("email không tồn tại trong hệ thống");
// infoLoggerError("Vui lòng thử lại");

//Example 2: create function save data to localStorage

// function createStorage(key) {
//   const store = JSON.parse(localStorage.getItem(key)) ?? {};
//   const save = () => {
//     localStorage.setItem(key, JSON.stringify(store));
//   };

//   const storage = {
//     get(key) {
//       return store[key];
//     },
//     set(key, value) {
//       store[key] = value;
//       save();
//     },
//     remove(key) {
//       delete store[key];
//       save();
//     },
//   };

//   return storage;
// }

// const profileSetting = createStorage('profile_setting');

// console.log(profileSetting.get('fullName'));
// profileSetting.set('fullName', 'Chuong Tran');
// profileSetting.set('age', 24);
// profileSetting.set('address', 'An Giang');

function createCounter() {
  let counter = 0;
  function createCounter() {
    return ++counter;
  }
  return createCounter;
}

const counter1 = createCounter();
console.log("🚀 ~ file: index.js ~ line 66 ~ counter1", counter1());
console.log("🚀 ~ file: index.js ~ line 66 ~ counter1", counter1());
console.log("🚀 ~ file: index.js ~ line 66 ~ counter1", counter1());
console.log("🚀 ~ file: index.js ~ line 66 ~ counter1", counter1());

