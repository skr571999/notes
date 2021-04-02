---
title: ReactJS
---

<!--
- React
- Hooks
- React Router Dom
- Material UI
- React Browser Tools
- Redux
-->

## References

- https://reactjs.org/docs/hello-world.html

## Installing using Create React App

```sh
# Installing Create React App globally
npm i -g create-react-app

# Creating the React App
create-react-app APP_NAME

# to use npm package manager
create-react-app APP_NAME --use-npm

# Creating app without installing create-react-app
npx create-react-app APP_NAME

npx create-react-app . --use-npm --template typescript

npm start
npm run build
```

## Adding Bootstrap

```js
// Method - I
// npm i bootstrap

// index.js
import "bootstrap/dist/css/bootstrap.css";

// Method - II
// add CDN Link in index.html
```

## Class Based Component

```js
// Dummy.jsx
import React, { Component } from "react";

class Dummy extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Dummy Component</h1>
      </div>
    );
  }
}

export default Dummy;

// index.js
import Dummy from "./components/Dummy";
// ...
ReactDOM.render(<Dummy />, document.getElementById("root"));
```

## React Fragment

```js
// Fragments let us group a list of children without adding extra nodes to the DOM
<React.Fragment>
  <h1>Hello World 1</h1>
  <button>+</button>
</React.Fragment>

<>
  <h1>Hello World</h1>
  <p>This is a Paragraph.</p>
</>
```

## Module CSS in react

```tsx
// importing the css module
import styles from "./login.module.scss";

// for adding single class
<div className={styles["login-top-spacer"]}></div>

// for adding multiple classes
<div
  className={`${styles["form-check"]} ${styles["my-check"]}`}
></div>
```

## Some Popular React Projects

- Libraries
  - Material UI
  - React Bootstrap
  - React Select - https://github.com/JedWatson/react-select
  - React Spring
  - https://ant.design/
  - https://storybook.js.org/
  - https://react-hook-form.com/
  - CSS in JS - https://github.com/emotion-js/emotion
  - Similar to Axios - https://swr.vercel.app/
- Apps
  - Spectrum- https://github.com/withspectrum/spectrum
- Other
  - React MapGL- https://github.com/visgl/react-map-gl
  - React Router
  - Formik
  - To Add/Change the content of the header form a react component - https://github.com/nfl/react-helmet
- Starter Kits
  - Create React App
  - Gatsby.js - https://github.com/gatsbyjs/gatsby

## Redirect in Netlify for ReactJS

Place a `_redirects` file in `public` folder with following content

```
/*  /index.html  200
```

## Overriding Material UI Component Styles using Classes object prop

- https://material-ui.com/customization/components/#overriding-styles-with-classes

## Using `useRef` for Interval

- https://reactjs.org/docs/hooks-reference.html#useref

```js
// - Clearing Interval Without ref
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Setting Interval");
  }, 3000);

  return () => {
    clearInterval(interval);
  };
}, []);

// - Clearing Interval using ref
const valueRef = useRef(null);

const clearTimer = () => {
  clearInterval(valueRef.current);
};

useEffect(() => {
  valueRef.current = setInterval(() => {
    console.log("Setting Interval");
  }, 3000);

  return () => {
    clearInterval(valueRef.current);
  };
}, []);
```

## Updating Nested Array state Value

- https://javascript.plainenglish.io/react-updating-a-value-in-state-array-7bae7c7eaef9

## React useMemo usage

- https://reactjs.org/docs/react-api.html#reactmemo
- Demo : https://stackblitz.com/edit/skr-reactjs-momo-demo?file=src/index.tsx

## React absolute Import

- https://create-react-app.dev/docs/importing-a-component/#absolute-imports
