---
title: Introduction
---

## Basics About ReactJS

- What is ReactJS?
  - It is a JavaSript Library for Building user Interfaces.
- why it is used?

## Installation

- Requirements
  - NodeJS
  - VSCode
  - Browser
- VSCode Extensions
  - Prettier
  - ES7 React/Redux/GraphQL/React-Native snippets)

### Setting up using Create React App

- Installing Create React App globally
  - `npm i -g create-react-app`
- Creating the React App
  - `create-react-app APP_NAME`
  - `npm create-react-app APP_NAME --use-npm`
- Creating app without installing **create-react-app**
  - `npx create-react-app APP_NAME`
- Running the React App
  - `npm start`
- Building the App
  - `npm run build`

## How to add Bootstrap

- I Step: `npm i bootstrap`
- II Step:

```js
// index.js
import "bootstrap/dist/css/bootstrap.css";
```

## Simple Examples

### Hello World Example

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";

const elemt = <h1>Hello World</h1>;

console.log(elemt);

ReactDOM.render(elemt, document.getElementById("root"));
```

### First Component

```js
// counter.jsx
import React, { Component } from "react";

class Counter extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Hello World 1</h1>
        <button>+</button>
      </div>
    );
  }
}

export default Counter;
```

```js
// index.js
import Counter from "./components/counter";

// ...

ReactDOM.render(<Counter />, document.getElementById("root"));
```

## React Fragment

```js
render() {
    return (
      <React.Fragment>
        <h1>Hello World 1</h1>
        <button>+</button>
      </React.Fragment>
    );
  }
```
