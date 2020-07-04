# MongoDB using NodeJS

## Basic Connection

```js
const MongoClient = require("mongodb").MongoClient;
const dbURL1 = "mongodb://localhost:27017";
const dbURL2 = "mongodb://localhost:27017/test";

// MongoClient.connect(dbURL1, { useNewUrlParser: true }, (err, client) => {
//   if (err) throw err;

//   console.log("Succesfully connected to Client");
//   client.close();
// });

// NOTES:
// - If the db is dpecified in the url then no need to use the client.db('DB_NAME)
// then we can directly access db using the passed parameter in the callback
```

## Creating Collection

```js
let db = client.db(dbNAME);

db.createCollection("students", () => {
  console.log("Collection created!");
});
// it will not show in DB because it is empty
```

<!--
 client.db().collections().then(result=>{
      console.log(result.length)
      // console.log(result[0].namespace)
      client.close()
    })
 -->

## Droping the Collection

```js
let db = client.db(dbNAME);

// Method - 1
//   db.collection("students").drop(() => {
//     console.log("Collection Droped");
//   });

// Method - 2
db.dropCollection("students", () => {
  console.log("Collection Dropped");
});
```

## Inserting into the Database

```js
let collection = client.db(dbNAME).collection("students");

// Method - 1
collection.insertOne({ name: "Sachin Kumar", branch: "CSE" }, (err, res) => {
  if (err) throw err;
  console.log(res.ops);
});

// Method - 2
let documents = [
  { name: "Mradul Kumar", branch: "ME" },
  { name: "Rajneesh Kumar", branch: "EC" }
];

collection.insertMany(documents, (err, res) => {
  if (err) throw err;
  console.log(res.ops);
});
```

## Reading the data from the Database

```js
let collection = client.db(dbNAME).collection("students");

collection.find({}).toArray((err, res) => {
  if (err) throw err;
  console.log(res);
});

collection.findOne({}, (err, res) => {
  if (err) throw err;
  console.log(res);
});

let query = { name: "Rajput" };

collection.find(query).toArray((err, res) => {
  if (err) throw err;
  console.log(res);
  console.log(res.length);
});
```

## Example

```js
const MongoClient = require("mongodb").MongoClient;
const dbURL = "mongodb://localhost:27017/sunday";

// MongoClient.connect(dbURL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }, (err, client)=>{

// console.log(client.isConnected())
// })

MongoClient.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(client => {
    // console.dir(client, { depth: 0 });

    // let collection = client.db().collection("student");

    // INSERT
    // collection.insertOne({ name: "Jishant", course: "Python" }).then(res => {
    //   console.dir(res, {depth: 0});
    // });

    // READ
    // collection.find().toArray().then(res=>{
    //   console.log(res)
    // })

    // UPDATE
    // collection
    //   .updateOne(
    //     { name: "Jishant" },
    //     {
    //       $set: {
    //         name: "Jishant Tyagi"
    //       }
    //     }
    //   )
    //   .then(res => {
    //     console.dir(res, { depth: 0 });
    //   })
    //   .catch(err => {
    //     console.log("Erro Occured in Update", err.name);
    //   });

    // DELETE
    // collection
    //   .deleteOne({ name: "Jishant" })
    //   .then(res => {
    //     console.dir(res, { depth: 0 });
    //   })
    //   .catch(err => {
    //     console.log("Error Occured During Deletion ", err.name);
    //   });

    // collection
    //   .countDocuments((err, res) => {
    //     console.log(res);
    //   })
    //   .then(res => {
    //     console.log(res);
    //   });

    // console.log(client.db().databaseName)
    // console.log(collection.collectionName)

    // client.db().collections().then(res=>{
    //   for(let i of res){
    //     console.log(i.collectionName)
    //   }
    // })

    client.close();
  })
  .catch(err => {
    console.log("Error Occured During Connection", err.name);
  });
```
