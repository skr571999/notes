---
title: ExpressJS Template Engine PUG
---

```js
// npm i pug
// server.js
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", { data: "Manoj Kumar" });
});

// - views/
//   - index.pug
// - server.js
```

```pug
//- views/index.pug
h1 Data : #{data}
```

- PUG Advanced

- if
- for
- Template Inheritance

---
