---
title: Code Evolution Course
---

## Components based Architecture

- Components are reusable and can be nested
- types of components
  - Stateless Functional Component(JS functions)
  - State-full Class Component

```js
const elem = <h1>Hello WOrld</h1>;

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
  - Absence of this Keyword
  - Not have State
  - Mainly responsible for the UI
  - Stateless
  - Can Use hooks for State feature
- Class
  - Maintain their own private data - state
  - complex UI - logic
  - Provide lifecycle hooks
  - Stateful

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
      parentName: "Course",
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

const Course1 = (props) => {
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
      isLogin: false,
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
      courses: ["Angular", "React", "Nodejs", "MongoDB"],
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
        { name: "ExpressJS", enrolled: true, timeperiod: 4 },
      ],
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
  color: "blue",
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

## Form Handling

```js
class FormComponent extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      comment: "",
      course: "",
    };

    this.data = [];
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleCourseChange = (event) => {
    this.setState({
      course: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, course, comment } = this.state;
    if (username.trim() && course.trim() && comment.trim()) {
      this.data.push(this.state);
      this.setState({
        username: "",
        course: "",
        comment: "",
      });
    } else {
      alert("Not valid");
    }
  };

  render() {
    const { username, course, comment } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username : </label>
            <input
              type="text"
              value={username}
              onChange={this.handleUsernameChange}
            />
          </div>
          <div>
            <label htmlFor="comment">Comment : </label>
            <textarea
              name="comment"
              id="comment"
              cols="20"
              rows="5"
              value={comment}
              onChange={this.handleCommentChange}
            ></textarea>
          </div>
          <div>
            <label htmlFor="course">Course : </label>
            <select
              name="course"
              id="course"
              value={course}
              onChange={this.handleCourseChange}
            >
              <option value="">Select Course</option>
              <option value="Angular">Angular</option>
              <option value="React">React</option>
              <option value="Vue">Vue</option>
            </select>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Comment</th>
                <th>Courses</th>
              </tr>
            </thead>
            <tbody>
              {this.data.map((val, index) => {
                return (
                  <tr key={index}>
                    <td>{val.username}</td>
                    <td>{val.comment}</td>
                    <td>{val.course}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
```

## Life cycle Methods

### Four Phases of a Component

- Mounting

  - When an instance of a component is being created and inserted into the DOM
  - METHODS: constructor, static getDerivedStateFromProps, render and componentDidMount

```js
class ComponentA extends Component {
  constructor() {
    super();
    this.state = {
      name: "Admin",
    };

    console.log("A - constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("A - getDerivedStateFromProps");
    console.log("P : ", props);
    console.log("S : ", state);
    return { name: "Admin 2" };
  }

  componentDidMount() {
    console.log("A - componentDidMount");
  }

  render() {
    console.log("A - render");
    return <h1>Compoent A - {this.state.name}</h1>;
  }
}
```

- Updating

  - When a component is being re-rendered as a result of changes to either its pops or state
  - METHODS: static getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate and coponentDidUpdate
  - VIDEO - 24

- Unmounting

  - When a component is being removed from the DOM
  - METHOD: componentWillUnmount

- Error Handling
  - When there is an error during the rendering, in a lifecycle method or in the constructor of any child component
  - MEHTOD: getDerivedStateFromError and componentDidCatch

## Pure Components

- VIDEO : 26

## Memo Components

- VIDEO - 27

## Refs

- First Way

```js
class ComponentA extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}
```

- Second Way

```js
class ComponentA extends Component {
  constructor() {
    super();
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    if (this.cbRef) {
      this.cbRef.focus();
    }
    console.log(this.cbRef);
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.setCbRef} />
      </div>
    );
  }
}
```

## Attaching Ref from parent Component to Child Component

- Video - 29

## Forward Referencing from parent component to Child Component

- Video - 30

## Portals

- Used to show the Popup, Modals

```js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class ComponentA extends Component {
  render() {
    return <h1>Hello World</h1>;
  }
}

const Component2 = () => {
  return ReactDOM.createPortal(
    <h2>Hello World 2</h2>,
    document.getElementById("portal-root")
  );
};

const Hello = () => (
  <div className="text-center">
    <ComponentA />
    <Component2 />
  </div>
);

export default Hello;
```

- Event Bubbling
  - VIDEO - 31

## Error Boundary

```js
import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    console.clear();
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2 style={{ color: "red" }}>
          Some thing is Wrong With this Component
        </h2>
      );
    }
    return this.props.children;
  }
}

const Course = ({ name }) => {
  if (name === "NodeJS") throw new Error("Not a Valid Course");
  return <h2>Course : {name}</h2>;
};

const Hello = () => (
  <div className="text-center">
    <ErrorBoundary>
      <Course name="Angular" />
    </ErrorBoundary>
    <ErrorBoundary>
      <Course name="React" />
    </ErrorBoundary>
    <ErrorBoundary>
      <Course name="NodeJS" />
    </ErrorBoundary>
  </div>
);

export default Hello;
```

- componentDidCatch
  - VIDEO - 32

## Higher Order Component

- VIDEO: 33,34,35
- Passing Props to child component
- Passing Second Argument to Higher Order Components

## Render Pops

- Sharing the code b/w React components using a prop whose value is a function
- VIDEO - 36, 37

## React Context

- It provide a way to pass data through the component level without having to pass props down manually to every level.
- VIDEO - 38, 39, 40
