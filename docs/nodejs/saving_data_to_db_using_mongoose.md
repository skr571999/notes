---
title: Saving Data to DB using Mongoose
---

- What is ORM
  - ORM is a technique for converting data between incompatible type systems using object-oriented programming languages.
- Mongoose is the Tool that is used to store data to MongoDB using the concept of OOP
  <!-- - Also called ODM(Object Document Mapper) -->
- Populating
  - Populating Inner Documents

## Example

```js
const mongoose = require("mongoose");
const dbURL = "mongodb://localhost/sunday";

mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    // console.dir(res, { depth: 0 });
    console.log("DB connected");

    // let conn = mongoose.connection.db.databaseName;
    // console.dir(conn, { depth: 0 });

    // res.connection.close();
  })
  .catch((err) => {
    console.log("Error in DB Connection : ", err.name);
  });

let Employe = mongoose.model(
  "Employe",
  new mongoose.Schema({
    name: {
      type: String,
    },
  })
);

let conn = mongoose.connection;

// ///// INSERT
// let e1 = new Employe({ name: "Vikas Bhardwaj" });

// e1.save()
//   .then(res => {
//     console.dir(res);
//     conn.close()
//   })
//   .catch(err => {
//     console.log("Error in insertion : ", err.name);
//   });

// //////////// READ
// Employe.find().then(res=>{
//   console.log(res)
//   conn.close()
// })

// /////////// Update
// Employe.updateOne(
//   { name: "Vikas Bhardwaj" },
//   {
//     $set: {
//       name: "Vikas"
//     }
//   }
// ).then(res => {
//   console.log(res);
//   conn.close()
// });

// ////// DELETE
// Employe.deleteOne({ name: "Vikas Bhardwaj" }, (err, res) => {
//   console.log("Deleted");
//   console.log(res);
//   conn.close()
// });

// We can use conn.close() OR mongoose.disconnect()
```

<!--
- _id ==> ObjectId(4 bytes timestamp, 3 bytes machineid, 2 bytes process id, 3 bytes incrementer)
-->
