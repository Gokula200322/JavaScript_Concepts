// let a = {a:10};
// let a = new Object({ a: 10 });
// function User() {
//   this.a = 100;
// }

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// let a = new User("John", 30);
// a.country  ="India";
// delete a.age;
// let b = new User();
// console.log(a, b);

// let a = { name: "sachin", age: 22, country: "India" };
// console.log(Object.keys(a));

// console.log(Object.getOwnPropertyDescriptors(a));
// a.password = "1234";

// Object.defineProperty(a, "password", {
//   value: "1234",
//   writable: true,
//   enumerable: true,
//   configurable: true,
// });

// a.password = "xyz";
// console.log(Object.keys(a));

// console.log(a.password);
// console.log(Object.keys(a));
// delete a.password;
// console.log(Object.keys(a));
// console.log(a.x);

// let a = { name: "sachin", age: 22, country: "India" };

// console.log(a);

// // Object.freeze(a);

// Object.seal(a);
// a.password = "1234";
// a.name = "Rohit";
// delete a.age;

// console.log(a);

// let animal = {
//   eats: true,
//   parent:"Animal",
// };

// let cat = Object.create(animal);
// let dog = Object.create(animal);
// cat.meows = true;
// let cat2 = Object.create(cat);

// console.log(Object.getPrototypeOf(cat2));

// cat.meows = true;
// console.log(cat);
// console.log(dog);

// let animal = {
//   eats: true,
//   type: "Living Being",
// };

// let cat = Object.create(animal);

// cat.type = "Mammal";

// console.log(Object.getPrototypeOf(cat));
// console.log(cat.type);

// let user = {};
// user.name = "John";
// user.password = "1234";

// console.log(user.name);