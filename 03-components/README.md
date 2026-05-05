# React-Vite

# JSX :

- JSX(JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML like code in JavaScript.
- Which React then transform into React.createElement() calls to create UI elements.

```js
const element = <h1> Hello Pramod! </h1>

//Behind the scenes, React converts this into:

React.createElement("h1", null, "Hello Pramod!");
```
- So JSX is not HTML, It's the syntactic sugar for JavaScript function calls.

## Why JSX Matters in 2026

- Improves readability
- Makes UI declarative
- Allows embedding JavaScript inside UI using { }
- Makes component-based architecture super clean

## JSX Rules

- Must return single parent element
- Use className instead of class
- Use {} to write JavaScript inside JSX
- Must close all tags (<img />)


```js
const name = "Pramod";

const element = <h1>Hello {name}</h1>;
```

## Component 

- A component in react is a reusable, independent piece of UI that returns JSX and takes props as inputs to render dynamic content.

## Functional Components (Modern Standard)

```js
function Welcome() {
  return <h1>Hello World</h1>;
}

// OR arrow function:

const Welcome = () => {
  return <h1>Hello World</h1>;
};

```

## Component with Props

```js

const Welcome = (props) => {
  return <h1>Hello {props.name}</h1>;
};

// Usage:

<Welcome name="Pramod" />

// Output:

Hello Pramod

```

## Why Components Are Powerful

- Reusable
- Maintainable
- Scalable
- Isolated logic
- Easy testing
- Clean architecture