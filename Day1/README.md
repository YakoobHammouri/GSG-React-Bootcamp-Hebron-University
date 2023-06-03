# React js Bootcamp Hebron 

## Day 1
* **Types of data (Primitive types , object types)**
In JavaScript, there are two main categories of data types: **primitive types** and **object types**.
    1. **Primitive Types:**
        * Number: Represents numeric values, including integers and floating-point numbers. For example, 5, 3.14, -10.  
        * String: Represents sequences of characters enclosed in single quotes ('') or double quotes (""). For example, "Hello", '123'.
        * Boolean: Represents logical values, either true or false.
        * Null: Represents the intentional absence of any object value.
        * Undefined: Represents an uninitialized or unassigned variable.

    2. **Object Types:**
        * **Object:** Represents a collection of key-value pairs, where the values can be of any data type. Objects can be created using the object literal syntax **`({})`** or the Object constructor. `For example, { name: "Ahmed", age: 25 }`
        * **Array:** Represents an ordered collection of values, which can be of any data type. Arrays can be created using square brackets **`([])`**. `For example, [1, 2, 3]`
        * **Function:** Represents a reusable block of code that performs a specific task. Functions can be created using the **`function keyword`** or using **`arrow function`**
            *  **Normal Function** `function add(a, b) { return a + b; }`
            *  **arrow function** `const add = (a,b)=>{ return a + b; }`


* **var , let , const**
  * Use ***var*** for variables with function scope or global scope (although it's generally recommended to avoid using var).
  * Use ***let*** for variables that need block scope and may have their values reassigned.
  * Use ***const*** for variables that need block scope and read onle values
      ```jsx
      function example() {
      const x = 10;
      if (true) {
           const y = 20;
           console.log(x); // Output: 10
           console.log(y); // Output: 20
        }
          console.log(x); // Output: 10
          console.log(y); // Error: y is not defined
      }

        console.log(x); // Error: x is not defined
        console.log(y); // Error: y is not defined
      ```

* **Work with Objects**
JavaScript objects are complex data structures that allow developers to store and access data in a key-value format.
    * **create object**
    Objects can be created using the object literal syntax **({})**
        ```jsx
        const person = {
           name: "yakoob",
           age: 30,
           job: "Developer"
        };
        ```
  * **Accessing Object Properties**
    You can access object properties using dot notation **(.)** or bracket notation **([])**.

    ```jsx
    console.log(person.name);  // Output: "yakoob"
    console.log(person["age"]);  // Output: 30
    ```
  * **Adding Object Properties**
   you can add new properties to an object by assigning a value to a new or existing key.
    ```jsx
        person["address"] ={city : "hebron" , street: "123 Main St"};

        console.log(person);
        /*
        Output:
        {
          name: "yakoob",
          age: 30,
          job: "Developer",
          address: {city : "hebron" , street: "123 Main St"}
        }
        */
    ```

  * **Deleting Object Properties**
    You can remove properties from an object using the delete keyword.
    ```jsx
    delete person.age;

    console.log(person);
    /*
    Output:
    {
      name: "yakoob",
      job: "Developer",
      address: {city : "hebron" , street: "123 Main St"}
    }
    */
    ```
    
    
* **Functions**
 In JavaScript, functions are a fundamental concept that allows you to group and organize blocks of reusable code. Functions are a way to encapsulate logic and perform specific tasks when called or invoked. They can take input values, called parameters or arguments, and optionally return a value.

    1. **Function Declarations:**
    A function declaration defines a named function using the function keyword.
        ```jsx
        function functionName(parameters) {
          // Function body
        }
   
        // Function definition
        function greet(name) {
          console.log(`Hello, ' + name + '!');
        }

        // Function invocation
        greet('Alice'); // Output: Hello, Alice!
        greet('Bob'); // Output: Hello, Bob!
        ```
   2. **Function Expression**
      which is an anonymous function assigned to the variable.
        ```jsx
            const functionName = function(parameters) {
              // Function body
            };

            const greet = function(name) {
              console.log('Hello, ' + name + '!');
            };

         ```
    3. **Nested Functions**
    JavaScript allows functions to be defined inside other functions, known as nested functions or inner functions and can returns the inner function as reference
    ```jsx
    function upper() {
      console.log("upper");

      function lower() {
        console.log("lower");
      }
      return lower;
    }

   //The newFun constant is assigned the function referenced by lower.
    var newFun = upper(); // Output: upper
    
    
    console.log(newFun);
    /*
    ƒ lower() {
        console.log("lower");
      }
    */
    newFun();
    ```
    
* **work with Arrays**
array is a special type of object that allows you to store a collection of values in a single variable where the arrays are ordered and can be accessed using an index

    ```jsx
    const numbers = [1, 2, 3, 4, 5];
    
    // using new
    const days = new Array();
    days[0] = 'Saturday';
    days[1] = 'Sunday';
    days[2] = 'Monday';
    
    // built in array
    
    numbers.push(6); // Add a new element to the end of the array
    numbers.pop();
  
    const letters = Array.from('hello');
    // expected output: Array ['h', 'e', 'l', 'l', 'o']
    
    const arr = Array.of('foo', 2, 'bar', true);
    // expected output: Array ["foo", 2, "bar", true]
    
    
     // access its elements using the index number.
     
     console.log(numbers[2]); // Output: 3
     console.log(days[0]); // Output: "Saturday"

    ```
* **Arrays Method**
  *  **map**
  The **map()** method in JavaScript is used to create a new array by applying a given function to each element of an existing array.
  
   ![array-map](https://github.com/YakoobHammouri/GSG-React-Bootcamp-Hebron-University/assets/7718220/6fc29827-6704-4a31-8a9d-771ac895f41e)


    ```jsx

        function double (number) {
           return number * 2;
        }

        function tripate (number) {
          return number * 3;
        }

        // Example array of numbers
        const numbers = [1, 2, 3, 4, 5];

        // Mapping array using traditional function syntax
        const mappedArray = numbers.map(double);

        // Outputting the mapped array
        console.log(mappedArray);


        // Mapping array using traditional function syntax
        const tripateArray = numbers.map(tripate);

        // Outputting the mapped array
        console.log(tripateArray);

    ```

    * **filter**
   the **filter()** method is a built-in array function that creates a new array containing elements from the original array that meet a specific condition. It allows you to filter out elements based on a provided function.
 
      ![filter-cover](https://github.com/YakoobHammouri/GSG-React-Bootcamp-Hebron-University/assets/7718220/1bae798b-e5a4-4189-9bb8-404d852e6ede)

      ```jsx

        function isEven  (number) {
          return number % 2 === 0;
        }

        const numbers = [1, 2, 3, 4, 5, 6];
        const evenNumbers = numbers.filter(isEven);
        console.log(evenNumbers); // Output: [2, 4, 6]

        function checkLength(fruit) {
          return fruit.length >= 5;
        }
        const fruits = ['apple', 'banana', 'orange', 'kiwi'];
        const longFruits = fruits.filter(checkLength);
        console.log(longFruits); 
      ```

* **Template Literals**
    Template literals, introduced in ECMAScript 2015 (ES6), are a feature in JavaScript that allows for more flexible and expressive string interpolation. Template literals are enclosed by backticks (`) instead of single or double quotes. Template literals provide a way to create strings that include expressions and variables in a more concise and readable manner. They allow you to create multi-line strings
    ```jsx
    const name = 'Yakoob';
    const age = 30;
    
     //without template literals
    console.log("My name is " +name + " and I'm " + age + " years old. ");
    
    // with template literals
    console.log(`My name is ${name} and I'm ${age} years old.`);

    // include expression
    const x = 5;
    const y = 10;

   console.log(`The sum of ${x} and ${y} is ${x + y}.`);
  // Output: The sum of 5 and 10 is 15.
    ```


* **Arrow functions**
In JavaScript, arrow functions were introduced in ES6 as a new way to write functions with Shorter Function Syntax and Implicit Return

     * **function declarations**
        ```jsx
        const functionName = (parameters) => {
          // Function body
        };
        ```
        ```jsx
        function double (number)
        {
          return number * 2;
        }
        
        const double = (number) => {
          return number * 2;
        };
        
        function isEven  (number) {
           return number % 2 === 0;
        };
          
        const  isEven = (number)=> number % 2 === 0;
        
        
         function checkLength(fruit) {
            return fruit.length >= 5;
          }
          
       const  checkLength = fruit => fruit.length >= 5;
        ```
* **Spread** *(...)*
   
   three dots  is used to expand elements from an iterable (such as an array or a string) into individual elements.
 
     ```jsx
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1, 4, 5];
    console.log(arr2); // Output: [1, 2, 3, 4, 5]
     ```    
     ```jsx
    const numbers = [1, 2, 3, 4];
    const [a, b, ...rest] = numbers;
    console.log(a); // output: 1
    console.log(b); // output: 2
    console.log(rest); // output: [3, 4]
     ```
     
     ```jsx
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const combined = [...arr1, ...arr2];

    console.log(combined); // output: [1, 2, 3, 4, 5, 6]
     ```
     ```jsx
    const student = { name : "yakoob", age : 32 ,mark : 80 }
    const address = {city : "hebron",}
    const all = {...student , ...address }

    console.log(all) 
    // { name: 'yakoob', age: 32, mark: 80, city: 'hebron' }
    ```
