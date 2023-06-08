# React js Bootcamp Hebron  

# Day 3


## What is JSX
In React, **JSX (JavaScript XML)** is an extension to JavaScript syntax that allows you to write HTML-like code within your JavaScript files. JSX is used to describe the structure and appearance of React components.
1. **JSX** is a syntax extension that combines JavaScript and XML-like syntax.
2. It provides a familiar way to write component in React.

### How to Use JSX:

* **simple jxs**
```jsx
import React from 'react';

const App = () => {
    const name = "Ahmad"
  return (
    <div>
      <h1>Hello, JSX!</h1>
      <p>{`My Name is ${name}`}</p>
    </div>
  );
};

export default App;
```
**Note :** `we using {}  in paragraph "p"  to make a dynamic data in jxs`

* **working with arrays in jxs**

    ```jsx
    import React from 'react';

    const ArrayExample = () => {
      const fruits = ['Apple', 'Banana', 'Orange'];

      return (
        <div>
          <h1>Fruits List</h1>
          <ul>
            {fruits.map((fruit, index) => (
              <li key={index}>{fruit}</li>
            ))}
          </ul>
        </div>
      );
    };

    export default ArrayExample;
    ```

**Note :** `we using {} in ul to map array to make a dynamica data in jxs`


## What is the Props  
In React, **props (short for properties)**  are a mechanism for passing data from a parent component to its child components. **Props** are used to provide any data to child components and allow them to render dynamically based on that data.
1. **Props** are immutable data, meaning they cannot be modified within the child component.
2. **Props** is passed in a one-way direction, from parent components to child components
3. **Props** can contain any valid JavaScript value, including strings, numbers, arrays, objects, or even functions.

### How to Use Props:
#### **Passing Data between components** 
* **Parent Component**
  we have person object contains name , age key , we need to pass as props to child Component  
    ```jsx
    import React from "react";
    import ChildComponent from "./ChildComponent";

    const ParentComponent = () => {
      const person = {
        name: "John Doe",
        age: 25,
      };

      return (
        <div>
          <h1>Parent Component</h1>
          <ChildComponent name={name} age={age} />
        </div>
      );
    };

    export default ParentComponent;
    ```

* **ChildComponent**
  we need to print the name , age from props  
    ```jsx
    import React from 'react';

    const ChildComponent = (props) => {


      return (
        <div>
          <h2>Child Component</h2>
          <p>Name: {props.name}</p>
          <p>Age: {props.age}</p>
        </div>
      );
    };

    export default ChildComponent;
    ```

#### **Passing a function as a props** 
* **Parent Component**
    ```jsx
    import React from 'react';
    import ChildComponent from './ChildComponent';

    const ParentComponent = () => {

      const handleClick = () => {
        alert('Hi run Button clicked! from Child');
      };

      return (
        <div>
          <h1>Parent Component</h1>
          <ChildComponent fun={handleClick} />
        </div>
      );
    };

    export default ParentComponent;
    ```

* **ChildComponent**
    ```jsx
    import React from 'react';

    const ChildComponent = (props) => {
      return (
        <div>
          <h2>Child Component</h2>
          <button onClick={props.fun}>Click me</button>
        </div>
      );
    };

    export default ChildComponent;
    ```
    
    
## What is the State  

**useState** is a way to make the functional components can handle state management effectively , The **useState** hook simplifies the process by offering a clear and concise syntax. By using **useState**, you can write more readable and compact code while still enjoying the advantages of functional components, such as simplicity and reusability. Additionally, **useState** allows you to organize and encapsulate state and its related logic within individual components, resulting in improved code organization and modularity. Overall, the **useState** hook revolutionizes state management in functional components, enabling developers to create dynamic and maintainable React applications.







* **useState** is a built-in hook provided by React that enables functional components to manage state.
* It allows you to declare state variables within a function component and provides a way to update those variables.
* The hook returns an array with two elements: **`the current state value`** and  **`function to update that value`**.
* Functional components in React were previously stateless, but with the introduction of hooks, you can now manage state within functional components.

### Declaration and using

```jsx
import React, { useState } from 'react';

const Counter = () => {

//const [stateValue, setState] = useState(initialValue);
    
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
```
* **Updating State:**
    * To update the **count**, you call the **setCount** function and pass the new value.
    * React will re-render the component and reflect the updated state value.
