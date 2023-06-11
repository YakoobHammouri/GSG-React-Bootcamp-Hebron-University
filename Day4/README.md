# React js Bootcamp Hebron 

# Day 4

## React Lifecycle

Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. The three phases are: **Mounting**, **Updating**, and **Unmounting**.

![react-lifecycle-methods-1400x583](https://github.com/YakoobHammouri/GSG-React-Bootcamp-Hebron-University/assets/7718220/2606cdad-9161-4a25-9e7f-6c5063e0e7a5)


### Mounting
In React, the Mounting lifecycle is a initial-render means when putting elements into the Real DOM. It involves initializing the component, rendering its JSX representation, and executing any necessary setup tasks.


### Updating
In React, the Updating lifecycle refers to the series of events that occur when a component's state or props change. It involves re-rendering the component with updated data and executing any necessary logic or side effects.

### Unmounting
In React, the Unmounting lifecycle refers to the phase when a component is being removed from the DOM. It involves cleaning up any resources that the component may have established during its lifecycle

### useEffect
In function components, the lifecycle is managed through the use of **useEffect**  hook. The **useEffect** hook allows you to perform side effects, such as fetching data, subscribing to events, or cleaning up resources, based on different lifecycle events. By using the **useEffect()** hook, you can perform actions during different stages of the component lifecycle, such as when the component is first mounted, when it updates, or when it unmounts.


The **useEffect** hook takes two arguments: a function (callback) and an optional dependency array. The function specified as the first argument is the effect function, which will be executed after the component renders. The effect function can contain the logic for performing side effects. The second argument, the dependency array, is an optional parameter that determines when the effect should be re-executed. If the dependency array is omitted or an empty array is provided, the effect function will run only once after the initial render. If the dependencies in the array change, the effect function will be re-executed. **`useEffect(<function>, <dependency>)`**



### useEffect cases

*  run on every render of the component , to useEffect in every render we remove the dependencies List 
```
  useEffect(() => {
    // code to run after every render
    // return a function to clean up after unmounting
  });

```

* by add empty dependencies List  `[]` the effect will only run once, when the component mounts, and will not run again for subsequent renders.

```
  useEffect(() => {
    // code to run just on mount for one time
  }, []);

```

* the effect will run when any of the dependencies in the list change.

```
  useEffect(() => {
    // code to run when any of the dependencies in the list change
  }, [state1 , state2 , state3,....]);

```
![ytf8jeds1jl71](https://github.com/YakoobHammouri/GSG-React-Bootcamp-Hebron-University/assets/7718220/0f744772-124d-4588-997a-d2bbf4564d15)
![9io9n357zpl71](https://github.com/YakoobHammouri/GSG-React-Bootcamp-Hebron-University/assets/7718220/d082068b-ae77-45f4-8ce0-fb81996da4d7)


