# ReactJS

It is a JavaSript Library for Building UI.

## Prerequisites

- HTML, CSS, JS fundamentals
- ES6{ name, email, course }
- JS - this keyword, filter, map, reduce
- ES6 - let, const, arrow functions, template literals, default paramters, rest and spread operators, destructing assignment.

## Content

- Fundamentals
- HTTP
- Routing
- Redux
- Utilities

## Requirements

- VScode
- create-react-app
- Browser

## Hello World

```cmd
npx create-react-app hello-world

cd hello-workd

npm start
```

## Folder Structure

## Components based Architecture

- Components are reusable and can be nested
- types of components
  - Stateless Functional Component(JS functions)
  - Statefull Class Component

```js
const elemt = <h1>Hello WOrld</h1>;

function Hello(props) {
  return <h1>Hello World of React</h1>;
}

class Hello2 extends Component {
  render() {
    return <h1>Hello World of Class Based Components</h1>;
  }
}

const Hello = () => <h1>Hello World in Arrow Functions</h1>;
```

## Functions vs Class Component

- Functional
  - Simple Function
  - Absencs of this Keyword
  - Not have State
  - Mainly responsible for the UI
  - Stateless
  - Can Use hooks for State feature
- Class
  - Maintain their own private data - state
  - complex UI - logic
  - Provide lifecycle hooks
  - Statefull

## JSX

- JavaScript XML - Extension to the JS language Syntax
- JSX tags havea tag name, Attributes, children
- JSX makes your react code simpler
- JSX is transpiles to pure JS

```js
// JSX Based
const Hello = () => (
  <div>
    <h1>Hello World of JSX Syntax.</h1>
  </div>
);

// Without Using JSX
const Hello = () => {
  return React.createElement(
    "div",
    { className: "bg-primary text-center" },
    React.createElement("h1", null, "Hello Without JSX")
  );
};
```

- JSX Differences
  - class ==> className
  - for ==> htmlFor
  - camelCase property naming convention
    - onclick ==> onClick
    - tabindex ==> tabIndex

## Props and Children

- props are only readable

```js
import React, { Component } from "react";

// function based comp with pops
const Course = (props) => (
  <div>
    <h1>Hello {props.name} </h1>
    {props.children}
  </div>
);

// Class based comp with props
class Company extends Component {
  render() {
    return (
      <div>
        <h1>Company : {this.props.name}</h1>
        {this.props.children}
      </div>
    );
  }
}

const Hello = (props) => (
  <div>
    <Course name="Angular" />
    <Course name="React">
      <p>This is a React Course</p>
    </Course>

    <Company name="Apple">
      <p>This is a Premimum Product Company</p>
    </Company>
  </div>
);

export default Hello;
```

## Props vs State

- Props
  - Props get passed to the component
  - Function paramters
  - props are immutable
  - Way to Access
    - props - functional Component
    - this.props - class Component
- State
  - State us managed within the component
  - state can be changed
  - useState Hook - functional components
  - this.state - class Component

## State

```js
import React, { Component } from "react";

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Course" + this.props.name,
    };
  }
  render() {
    return (
      <div className="text-center">
        <h1>{this.state.msg}</h1>
        <button
          className="btn btn-primary"
          onClick={() => this.setState({ msg: "Thanks for Enrollment" })}
        >
          Enroll
        </button>
      </div>
    );
  }
}

const Hello = (props) => (
  <div>
    <Course name="Angular" />
  </div>
);

export default Hello;
```

## Set State

- Use setState to modify the state value
- If code has to be executed after state update place the code in the callback function passed as the second argument to setState
- if we want to update the state based on the previous state then pass function as a argument

```js
import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  doIncrement() {
    // // First
    // this.setState({
    //   count: this.state.count + 1,
    // });

    // // Second
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("After Incremnt");
    //   }
    // );

    // Third
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  doIncrement5() {
    this.doIncrement();
    this.doIncrement();
    this.doIncrement();
    this.doIncrement();
    this.doIncrement();
  }
  render() {
    return (
      <div className="text-center">
        <h1>Count : {this.state.count}</h1>
        <button className="btn btn-primary" onClick={() => this.doIncrement5()}>
          Increment
        </button>
      </div>
    );
  }
}

const Hello = () => (
  <div>
    <Counter />
  </div>
);

export default Hello;
```

## Destructing Props in Function based Component

```js
import React from "react";

const Course = (props) => {
  const { name } = props;
  return <h1>Course {name}</h1>;
};

const Course1 = ({ name }) => {
  return <h1>Course {name}</h1>;
};

const Hello = () => (
  <div>
    <Course name="Angular" />
    <Course1 name="React" />
  </div>
);

export default Hello;
```

## Destructing Props in Function Class Component

```js
import React, { Component } from "react";

class Course extends Component {
  render() {
    const { name } = this.props;

    return <h1>Course {name}</h1>;
  }
}

const Hello = () => (
  <div>
    <Course name="Angular" />
  </div>
);

export default Hello;
```
