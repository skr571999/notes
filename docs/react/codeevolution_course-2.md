# React 2

## Event handling in class and function based Components

```js
import React, { Component } from "react";

class Course extends Component {
  clickHandler() {
    console.log("Class Button Clicked");
  }
  render() {
    return <button onClick={this.clickHandler}>Click</button>;
  }
}

const Course1 = () => {
  function clickHandler() {
    console.log("Function Button Clicked");
  }
  return <button onClick={clickHandler}>Click 2</button>;
};

const Hello = () => (
  <div>
    <Course />
    <br />
    <Course1 />
  </div>
);

export default Hello;
```

## Event Binding

- Video -14

## Passing Method to the child as props and passing arguments

```js
import React, { Component } from "react";

class Course extends Component {
  constructor() {
    super();
    this.state = {
      parentName: "Course"
    };
    this.greetHandler = this.greetHandler.bind(this);
  }
  greetHandler(child) {
    alert(`Hello ${this.state.parentName} from ${child}`);
  }

  render() {
    return <Course1 greetHandler={this.greetHandler} />;
  }
}

const Course1 = props => {
  return (
    <button onClick={() => props.greetHandler("Child Course")}>
      Greet Parent
    </button>
  );
};

const Hello = () => (
  <div>
    <Course />
  </div>
);

export default Hello;
```

## Conditional Rendering

- If/else
- Elements Variables
- Ternary Conditional OPerators
- Short Circuit Operators

```js
class Course extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: false
    };
  }

  render() {
    return (
      <div>
        {/* <h1>Welcome {this.state.isLogin ? "Sachin" : "Guest"}</h1> */}
        {/* {this.state.isLogin ? <h1>Welcome Sachin</h1> : <h1>Welcome Guest</h1>} */}
        {this.state.isLogin || <h1>Welcome Guest</h1>}
        {this.state.isLogin && <h1>Welcome Sachin</h1>}
      </div>
    );
  }
}
```

## List Rendering

```js
class Course extends Component {
  constructor() {
    super();
    this.state = {
      courses: ["Angular", "React", "Nodejs", "MongoDB"]
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.courses.map((val, index) => (
            <li key={index}>{val}</li>
          ))}
        </ul>
      </div>
    );
  }
}
```

- Example - 2

```js
const List = ({ course }) => {
  return (
    <li>
      {course.name} :: {course.timeperiod} ::
      <span>{course.enrolled ? "📗" : "📕"}</span>
    </li>
  );
};

class Course extends Component {
  constructor() {
    super();
    this.state = {
      courses: [
        { name: "Angular", enrolled: true, timeperiod: 4 },
        { name: "NodeJS", enrolled: true, timeperiod: 4 },
        { name: "ReactJS", enrolled: true, timeperiod: 4 },
        { name: "MongoDB", enrolled: true, timeperiod: 4 },
        { name: "ExpressJS", enrolled: true, timeperiod: 4 }
      ]
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.courses.map((val, index) => (
            <List key={index} course={val} />
          ))}
        </ul>
      </div>
    );
  }
}
```

- Keys and List

  - Key is a special attribute that need to be included while rendring the List
  - Using the Key it help React identify each item uniquely
  - Help in updating the UI efficiently

- When to use Index as a Key
  - when item in the list don't have unique id
  - the list is a static and will not change
  - the list will be never reordered or filtered

## Styling the React Component

- CSS Stylesheets
- Inline Styling
- CSS Modules
- CSS in JS Libraries(Styled Components)

```js
// CSS Stylesheets
import "./style.css";

const Course = ({ primary }) => {
  const className = primary ? "orange" : "";
  return <h1 className={`${className} font-xl`}>Hello World</h1>;
};
```

```css
.orange {
  color: orange;
}

.font-xl {
  font-size: 4em;
}
```

- Inline Styling

```js
const headingStyle = {
  fontSize: "4em",
  color: "blue"
};

const Course = () => {
  return <h1 style={headingStyle}>Hello World</h1>;
};
```

- CSS Module Styling

```js
// Hello.jsx
import "./style.css";
import error from "./style.module.css";

const Course = () => {
  return (
    <div>
      <h1 className={error.error}>Hello World</h1>
      <h1 className="success">Hello World</h1>
    </div>
  );
};
```

```css
/* style.css */
.success {
  color: green;
}
```

```css
/* style.module.css */
.error {
  color: red;
}
```
