---
title: ReactJS
---

- Mosh Course on Class Based Component
- https://www.youtube.com/watch?v=Ke90Tje7VS0

## Intro

```js
// - Adding Style to JSX element, Attributes

<span style={{ fontSize: 50 }}></span>;

// - Conditional Rendering
{
  this.state.tags.length === 0 && "Please new tag";
}

// - Rendering a List
class Counter extends Component {
  state = {
    tags: ["Tag1", "Tag2", "Tag3"],
  };
  render() {
    return (
      <ul>
        {this.state.tags.map((val, index) => <li key={index}>{val}</li>)}
      </ul>
    );
}
```

## Event Handling

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
      <button
        onClick={this.handleIncrement}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
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
      <button
        onClick={() => this.handleIncrement({ course: "React" })}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
    );
  }
```

## Update the State

```js
handleIncrement() {
  this.setState({ count: this.state.count + 1 });
}
```

## Passing Argument to the Function

```js
handleIncrement(data) {
  console.log("Data", data);
  this.setState({ count: this.state.count + 1 });
}

render() {
  return (
    <button
      onClick={() => this.handleIncrement({ course: "React" })}
      className="btn btn-secondary btn-sm"
    >
      Increment
    </button>
  );
}
```

## Passing Data from one component to Another

```js
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

class Counter extends Component {
  state = {
    value: this.props.value,
  };
  constructor(props) {
    super(props);
  }
}
```

## Passing Children

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

## Debugging React Apps

- React Developer Tools(Extension)
- Using \$r - for selecting a component
- Using \$0 - for selecting a Element

## Props vs State

- State is local to the Component
- Props is the data that we give to a component
  - props are read only

## Raise and Handling Event

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

## Updating the State of parent component from child component

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

## Removing the Local state (for single source of truth)

- here child component will be controlled by the parent component
- here we need to remove all the local state reference from the child component and also the handlers function
- and need to make the handler function in the parent component and pass then as a prop

## Multiple Components in Sync

- Lifting the State Up
  - we here need to move all the handlers and state to the parent component and then pass then to child component as props

## Functional components

```js
import React from "react";

// Stateless functional components
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="https://google.com">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};
```

## Lifecycle hooks

- Mount
  - Constructor - for setting state value from props
  - Render
  - `componentDidMount` - for AJAX call
- Update
  - render
  - `componentDidUpdate` - this can be used for AJAX call only if there is a change in old value
- Un-mount
  - `componentWillUnmount` - can be used for cleaning the timers and listeners

## Building the App

- `yarn build`

## Serving the Build App

- `yarn global add serve`
- `serve -s build`

## Deploying the App to Netlify

- `npm i -g netlify-cli`
- `netlify deploy`
- `netlify deploy --prod`
