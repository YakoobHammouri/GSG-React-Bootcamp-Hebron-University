# React js Bootcamp Hebron 

## Day2

## What is the React  


React is a JavaScript library for building user interfaces. It was developed by Facebook and is widely used for creating dynamic and interactive web applications. React follows a component-based architecture, where the user interface is divided into reusable components that manage their own state and can be composed together to create complex UIs , React works by using a Virtual DOM to efficiently update the UI

  ## What are the features of React
     1. JSX
     2. Components
     3. Virtual DOM
     4. High performance
     


## What is JSX
**JSX (JavaScript XML)** is an extension to JavaScript syntax used by React. It allows you to write HTML-like code within your JavaScript code to describe the structure and appearance of UI components. JSX helps in creating dynamic and reusable components in a more intuitive and readable way, With JSX, you can write HTML-like tags directly in your JavaScript code.


![JSX](https://github.com/YakoobHammouri/GSG-React-Bootcamp-Hebron-University/assets/7718220/6487efe6-c987-426a-a29b-9ed3db1eacc4)



**Example with JSX:**
```jsx
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, JSX!</h1>
      <p>This is an example of JSX syntax.</p>
    </div>
  );
}

export default App;

```

**Same example without JSX:**
```jsx
import React from 'react';

function Greeting() {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Hello, JSX!'),
    React.createElement('p', null, 'This is an example of JSX syntax.')
  );
}

export default Greeting;

```

## How React works:

* Components: In React, a UI is broken down into small, reusable components. Each component is responsible for rendering a small part of the UI, and can have its own state, props, and lifecycle methods.
* Virtual DOM: React uses a Virtual DOM to keep track of changes to the UI. The Virtual DOM is a lightweight representation of the real DOM, and it allows React to update the UI efficiently.
* JSX: React uses a syntax called JSX to describe what the UI should look like. JSX looks like HTML, but it's actually a JavaScript syntax extension that allows developers to write HTML-like code within JavaScript.
* Rendering: When a component's state or props change, React re-renders the component and updates the Virtual DOM. React then compares the old and new versions of the Virtual DOM to figure out what has changed.
* Diffing: React uses a process called "diffing" to determine which parts of the UI need to be updated. Diffing involves comparing the old and new versions of the Virtual DOM and figuring out which elements have changed.
* Reconciliation: Once React has figured out which parts of the UI need to be updated, it reconciles the changes with the real DOM. This involves updating the real DOM to match the new Virtual DOM.
* Event handling: React uses a unidirectional data flow, which means that data flows down from parent components to child components. When a user interacts with a component, React uses event handlers to update the component's state, which in turn triggers a re-rendering of the UI.

![183660810_160523102670424_6727267614249317342_n](https://github.com/YakoobHammouri/GSG-React-Bootcamp-Hebron-University/assets/7718220/4e7b3376-6039-4dca-9fd2-36755c55d584)

##  Roles in Write React 
     1. The Component Must Start with Uppercase
     2. The Component Return Just One Root <div> ... </div>
     
     
## Differentiate between Real DOM and Virtual DOM.

| Real Dom    | Virtual Dom     |
| ------------| -------------   |
|It updates slow.     |  It updates faster.          | 
|Can directly update HTML. | Can’t directly update HTML.        |
|Creates a new DOM if element updates.|   Updates the JSX if element updates.    |
|DOM manipulation is very expensive| DOM manipulation is very easy.     |
|Too much of memory wastage| No memory wastage.     |

## Create first React app using Create React App

1. **Install Node.js**
Make sure you have Node.js installed on your machine. You can download and install the latest version from the official Node.js website (https://nodejs.org).

2. **Open a Terminal**
Open a terminal or command prompt on your computer.

3.  **Create a New React App**
In the terminal, navigate to the directory where you want to create your React app.
Run the following command to create a new React app using create-react-app

    ```jsx
    npx create-react-app first-app
    ```
4. **Navigate to the Project Directory**
After the project is created, navigate into the project directory by running the following command:

    ```jsx
    cd my-app
    ```
    
5. **Start the Development Server**
In the terminal, run the following command to start the development server and run your React app
    ```jsx
    npm start
    ```
