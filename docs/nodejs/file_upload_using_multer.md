---
title: File Upload Using Multer
---

```js
// npm i multer
// make a folder before uploading the images
// server.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();

app.get("/", express.static("public"));
app.use(express.urlencoded({ extended: true }));

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

let upload = multer({ storage: storage });
// let upload = multer({ dest: 'uploads/' });

app.post("/upload", upload.single("profile"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  console.log(req.files);
  res.send("Uploaded");
});

app.listen(3000, () => console.log("Serving on 3000"));

//  Saving the upload file path to the Data base
```
