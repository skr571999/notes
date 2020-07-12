---
title: ExpressJS Getting Data from Client
---

- Using GET Method
- Using POST Method
- Parameterised URL
- Same interface for both GET and POST request

```js
// submitting form data using get Method
app.get("/", (req, res) => {
  console.log(req.query);
  res.render("index");
});

// same interface for both GET and POST request
app.use("/same", (req, res) => {
  if (req.method === "GET") {
    res.send("Same GET Request");
  } else if (req.method === "POST") {
    res.send("Same POST request");
  }
});

// Parameterised URL
app.get("/std/:id", (req, res) => {
  console.log(req.params);

  res.render("index");
});

// rendering the signup form
app.get("/signup", (req, res) => {
  res.render("signup");
});

// app.use(express.json()); // used if we are getting of contentType - json
app.use(express.urlencoded({ extended: true }));

// getting the post data
app.post("/signup", (req, res) => {
  console.log(req.method);
  console.log(req.body);
  res.send("POST signup form Submitted");
});

app.listen(3000, console.log(`Server on 3000`));
```
