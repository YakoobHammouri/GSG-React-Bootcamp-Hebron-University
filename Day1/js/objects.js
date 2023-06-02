/*
we have an object called person that represents a person's information.
It has properties such as name, age, job, hobbies, and address.
The address property itself is an object with its own properties.
We can access the properties of the address object using dot notation or bracket notation.
We can also add new properties to the person object using dot notation or bracket notation.
We can also delete properties from the person object using the delete keyword.

*/

const person = {
  name: "Ahmad",
  age: 25,
  job: "Web Developer",
  hobbies: ["reading", "gaming", "coding"],
};

// Access the Data in Object
console.log("name 1", person.name);
console.log("name 2", person["name"]);

// add data
person.mark = 50;
person["mark"] = 50;

// add object data to object
person.address = {
  street: "123 Main Street",
  city: "Hebron",
  country: "PS",
};

// Accessing nested object properties
console.log("address : ", person.address.city);
console.log("address : ", person["address"]["city"]);

// delete
delete person.age;

console.log("person : ", person);
