# React - 3

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

## React Fragement

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

## Pure Compoents

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

## Attaching Ref from paraent Component to Chaild Component

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
