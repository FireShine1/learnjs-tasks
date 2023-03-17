function User(name) {
  this.name = name;
}

let user = new User('John');
let user2 = new user.constructor('Pete');

console.log( user2.name ); // сработает (Pete)

User.prototype = {};

let user3 = new user.constructor('Smith');

console.log( user3.name ); // undefined