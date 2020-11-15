---
title: ReactJS
---

<!--
- To Study
  - React
  - Redux
  - Material UI
  - React Browser Tools
-->

## Basics About ReactJS

- What is ReactJS?
  - It is a JavaScript Library for Building user Interfaces.
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

## Learning Topics(docs)

- React
- Hooks
- Create React App
  - [How to create react app using templates](https://create-react-app.dev/docs/getting-started/#selecting-a-template)
- [Project File Structure](https://reactjs.org/docs/faq-structure.html)

## Examples

- Stackbiz Examples - https://stackblitz.com/@skr571999
- Codesandbox Example - https://codesandbox.io/s/simple-materialui-website-nl20w

## Projects

- TodoApp
- Counter App - Mosh Tutorial
- MERN Exercise Trancker - Freecodecamp MERN YouTube Tutorial
- React Shop App
  - YouTube - https://www.youtube.com/watch?v=zaWtIkJgah4
  - GitHub - https://github.com/jaewonhimnae/react-shop-app

## Resources

- YouTube
  - React - Redux - https://youtube/CVpUuw9XSjY

## Mosh Course

### Adding Style to JSX element, Attributes

```js
render() {
    return (
      <div>
        <span style={{ fontSize: 50 }} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }
```

### Conditional Rendering

```js
{
  this.state.tags.length === 0 && "Please new tag";
}
```

### Rendering a List

```js
class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["Tag1", "Tag2", "Tag3"],
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.tags.map((val, index) => {
            return <li key={index}>{val}</li>;
          })}
        </ul>
      </div>
    );
}
```

### Event Handling

- Method One

```js
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    console.log("Increment", this);
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
```

- Method 2

```js
handleIncrement = () => {
    console.log("Increment Clicked", this);
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ course: "React" })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
```

### Update the State

```js
 handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }
```

### Passing Argument to the Function

```js
 handleIncrement(data) {
    console.log("Data", data);
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ course: "React" })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
```

### Passing Data from one component to Another

```js
// counters.jsx
class Counters extends Component {
  state = {
    Counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return (
      <div>
        {this.state.Counters.map((counter) => (
          <Counter key={counter.id} value={counter.value} />
        ))}
      </div>
    );
  }
}
```

```js
// counters.jsx
state = {
    value: this.props.value,
  };
  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
  }
```

### Passing Children

```js
// counters.jsx
<Counter key={counter.id} value={counter.value}>
  <h4>Counter {counter.id}</h4>
</Counter>
```

```js
// counter.jsx
<div>
  {this.props.children}
  <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
  <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">
    Increment
  </button>
</div>
```

### Debugging React Apps

- React Developer Tools(Exension)
- Using \$r - for selecting a component
- Using \$0 - for selectiog a Element

### Props vs State

- State is local to the Component
- Prpos is the data that we give to a component
  - props are read only

### Raise and Handling Event

```js
// counters.jsx
  handleDelete = () => {
    console.log("Delete clicked");
  };

  render() {
    return (
      <div>
        {this.state.Counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
          />
        ))}
      </div>
    );
  }
```

```js
// counter.jsx
<button className="btn btn-danger btn-sm m-2" onClick={this.props.onDelete}>
  Delete
</button>
```

### Updating the State of parent component from child component

```js
// counters.jsx
handleDelete = (counterId) => {
    let counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            id={counter.id}
          />
        ))}
      </div>
    );
  }
```

```js
// counter.jsx
<button
  className="btn btn-danger btn-sm m-2"
  onClick={() => this.props.onDelete(this.props.id)}
>
  Delete
</button>
```

### Removing the Local state (for single source of truth)

- here child component will be controlled by the parent conponent
- here we need to remove all the local state refrence from the child component and also the handlers function
- and need to make the handler function in the parent component and pass then as a prop

### Multiple Components in Sync

- Lifting the State Up
  - we here need to move all the handlers and state to the parent component and then pass then to child component as props

### Functional components

```js
import React from "react";

// Stateless functional components
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="https://google.com">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};
```

### Lifecycle hooks

- Mount
  - Constructor - for setting state value from props
  - Render
  - componentDidMount - for AJAX call
- Update
  - render
  - componentDidUpdate - this can be used for AJAX call only if there is a change in old value
- Unmount
  - componentWillUnmount - can be used for cleaning the timers and listeners

### Building the App

- `yarn build`

### Serving the Build App

- `yarn global add serve`
- `serve -s build`

### Deploying the App to Netlify

- `npm i -g netlify-cli`
- `netlify deploy`
- `netlify deploy --prod`

### JSX

- JSX expressions, Attributes with JSX

## Code Evolution Course

### ReactJS

It is a JavaSript Library for Building UI.

### Prerequisites

- HTML, CSS, JS fundamentals
- ES6{ name, email, course }
- JS - this keyword, filter, map, reduce
- ES6 - let, const, arrow functions, template literals, default paramters, rest and spread operators, destructing assignment.

### Content

- Fundamentals
- HTTP
- Routing
- Redux
- Utilities

### Requirements

- VScode
- create-react-app
- Browser

### Hello World

```cmd
npx create-react-app hello-world

cd hello-workd

npm start
```

### Folder Structure

### Components based Architecture

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

### Functions vs Class Component

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

### JSX

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

### Props and Children

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

### Props vs State

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

### State

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

### Set State

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

### Destructing Props in Function based Component

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

### Destructing Props in Function Class Component

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

### Event handling in class and function based Components

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

### Event Binding

- Video -14

### Passing Method to the child as props and passing arguments

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

### Conditional Rendering

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

### List Rendering

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

### Styling the React Component

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

### Form Handling

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

### Life cycle Methods

#### Four Phases of a Component

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

### React Fragment

```js
class ComponentA extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello World</h1>
        <p>This is a Paragraph.</p>
      </React.Fragment>
    );
  }
}

class ComponentA extends Component {
  render() {
    return (
      <>
        <h1>Hello World</h1>
        <p>This is a Paragraph.</p>
      </>
    );
  }
}
```

### Pure Components

- VIDEO : 26

### Memo Components

- VIDEO - 27

### Refs

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

### Attaching Ref from parent Component to Child Component

- Video - 29

### Forward Referencing from parent component to Child Component

- Video - 30

### Portals

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

### Error Boundary

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

### Higher Order Component

- VIDEO: 33,34,35
- Passing Props to child component
- Passing Second Argument to Higher Order Components

### Render Pops

- Sharing the code b/w React components using a prop whose value is a function
- VIDEO - 36, 37

### React Context

- It provide a way to pass data through the component level without having to pass props down manually to every level.
- VIDEO - 38, 39, 40
