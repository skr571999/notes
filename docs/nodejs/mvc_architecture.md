---
title: MVC Architectures
---

- MVC - Model, View, Controller
- Model - This part describe the structure of the data to be stored
- View - This is the part which is presented to the User
- Contrller - This is the part which handle the request and send an response back to the Client.

## Routing

```js
// user.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Router Used");
});

module.exports = router;
```

```js
// server.js
const express = require("express");
const app = express();

app.use("/user", require("./user"));

// OR
// require("./user")(app);
app.listen(3000, console.log("Serving on 3000"));
```
