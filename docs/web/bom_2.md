# Unit 11

## BOM

### Removing the Element

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <button>Click Me</button>
    <script>
      let h1 = document.querySelector("h1");
      let btn1 = document.querySelector("button");

      btn1.addEventListener("click", () => {
        h1.remove();
      });
    </script>
  </body>
</html>
```

### Modify the Style

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <button>Click Me</button>
    <script>
      let h1 = document.querySelector("h1");
      let btn1 = document.querySelector("button");

      btn1.addEventListener("click", () => {
        h1.style.color = "red";
      });
    </script>
  </body>
</html>
```

### Modifying the Classlist of an Element

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
    <style>
      .bgBlue {
        background-color: blue;
      }
    </style>
  </head>
  <body>
    <h1>Hello World</h1>
    <button>Click Me</button>
    <script>
      let h1 = document.querySelector("h1");
      let btn1 = document.querySelector("button");

      btn1.addEventListener("click", () => {
        h1.classList.toggle("bgBlue");
      });
    </script>
  </body>
</html>
```

### Modifying the Attributes of an Element

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
    <style>
      #bgBlue {
        background-color: blue;
      }
    </style>
  </head>
  <body>
    <h1>Hello World</h1>
    <button>Click Me</button>
    <script>
      let h1 = document.querySelector("h1");
      let btn1 = document.querySelector("button");

      btn1.addEventListener("click", () => {
        h1.setAttribute("id", "bgBlue");
      });
    </script>
  </body>
</html>
```

### Getting the Form Value

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <form name="registerForm">
      <p>Name : <input type="text" name="name" /></p>
      <p>Email : <input type="email" name="email" /></p>
      <p>Password : <input type="password" name="password" /></p>
      <p><input type="submit" value="Submit" /></p>
    </form>
    <script>
      document.forms[0].addEventListener("submit", e => {
        e.preventDefault();

        console.log(document.forms[0]["name"].value);
        console.log(document.forms[0]["email"].value);
        console.log(document.forms[0]["password"].value);
      });
    </script>

    <h2>Method - 2</h1>
     <form class="myForm">
        <p><input type="text" name="username" placeholder="Username"></p>
        <p><input type="text" name="name" placeholder="Name"></p>
        <p><input type="submit" value="Submit"></p>
    </form>

    <script>
        let myForm = document.querySelector('.myForm')

        myForm.addEventListener('submit', (e)=>{
            e.preventDefault()

            console.log(e.target.username.value)
            console.log(e.target.name.value)

            e.target.username.value = ''
            e.target.name.value = ''
        })
    </script>
  </body>
</html>
```

### Form Validation

- Example 1

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello World</title>
  </head>
  <body>
    <form action="" name="form1" onsubmit="return validate1()">
      <p>Name<input type="text" name="name" /></p>
      <p><input type="submit" value="Submit" /></p>
    </form>
    <script>
      function validate1() {
        let name = document.forms["form1"]["name"].value;
        if (name === "") {
          alert("Can not be Empty");
          return false;
        }
      }
    </script>
  </body>
</html>
```

- Form validation using builtin required Attribute and adding CSS style on valid and invalid

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
    <style>
      input:valid {
        border: 1px solid green;
      }
      input:invalid {
        border: 1px solid red;
      }
    </style>
  </head>
  <body>
    <form name="registerForm">
      <p>Name : <input type="text" name="name" required /></p>
      <p>Email : <input type="email" name="email" required /></p>
      <p>Password : <input type="password" name="password" required /></p>
      <p><button type="submit">Submit</button></p>
    </form>
  </body>
</html>
```

- Form Validation Using Regular Expression

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Regex</title>
    <style>
      .input:valid {
        border: 2px solid green;
      }
      .input:invalid {
        border: 2px solid red;
      }
    </style>
  </head>
  <body>
    <form class="form1">
      <p>
        Name :<input
          class="input"
          type="text"
          required
          name="name"
          pattern="[a-zA-Z1-9]{2,10}"
        />
      </p>
      <p>
        Mobile No. :
        <input
          class="input"
          type="text"
          required
          pattern="[1-9]{1}[0-9]{9}"
          name="number"
        />
      </p>
      <p>
        Email 1 :
        <input
          type="text"
          name="email1"
          required
          class="input"
          pattern="[a-z0-9]{1,}[@]{1}"
        />
      </p>
      <p>
        Email :
        <input class="input" type="email" required name="email" />
      </p>
      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
    <script>
      let name = document.forms[0].name;
      let number = document.forms[0].number;
      let email1 = document.forms[0].email1;
      let email = document.forms[0].email;

      let form1 = document.forms[0];
      form1.addEventListener("input", e => {
        e.preventDefault();
        console.log(
          form1.checkValidity(),
          name.checkValidity(),
          number.checkValidity(),
          email1.checkValidity(),
          email.checkValidity()
        );
      });
    </script>
  </body>
</html>
```

### Browser Storage

### AJAX

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <button>Get Data</button>
    <script>
      let btn1 = document.querySelector("button");

      btn1.addEventListener("click", () => {
        let URL = "https://api.github.com";
        fetch(URL)
          .then(res => res.json())
          .then(result => {
            console.log(result);
          });
      });
    </script>
  </body>
</html>
```

<!--
# AJAX

- API Endpoints
  - https://jsonplaceholder.typicode.com
  - https://reqres.in
  - https://www.openbrewerydb.org/dataset
  - https://httpbin.org/#/Anything/get_anything__anything_ ==> what we send it return the same

## Example

- Using Fetch with Local Server

```js
fetch("./data.json")
  .then(res => {
    return res.json();
  })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log("Error");
  });
```

- Using XMLHttpRequest

```js
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = () => {
  if (xhttp.readyState === 4)
    console.log("Data ", JSON.parse(xhttp.responseText));
};

xhttp.open("GET", "data.json");
xhttp.send();
```

- Using Async and Await

```js
(async () => {
  let res = await fetch("data.json");
  let result = await res.json();
  console.log(result);

  console.log("ddd");
})();
```

- Using Json Web Server

 https://www.npmjs.com/package/json-server

// npm install -g json-server

// Create db.json

// Start the Json Server
// json-server --watch db.json

// let url = "https://randomuser.me/api/?results=6";

// fetch(url)
//     .then(res => res.json())
//     .then(result => {
//         console.log(result);
//     })
//     .catch(err => {
//         console.log("Error ", err.name);
//     });

// Example - 2

// let url = "http://localhost:3000/api/users/";

// url = "data.json";

// function fetchData() {
//     return fetch(url).then(res => res.json());
//     // .then(result => {
//     //     console.log(result);
//     // });
// }

// fetchData().then(result=>{
//     console.log(result)
// })

// function fetchData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let data = fetch(url).then(res=>res.json())
//             console.log(data)

//             resolve('data')
//         },3000)
//     })
// }

// fetchData().then(result=>{
//     console.log(result)
// })

// fetch(url).then(res=>{
//     console.log(res.json().then(result=> result).then(r=> console.log(r)))
// })

// function ss(){
//     return new Promise((resolve, reject)=>{
//         resolve([1,2,3,4])
//     })
// }

// ss().then(res=> {
//     console.log(res)
//     return res
// }).then(r=>{
//     console.log(r)
// })

// Example 3 -  Using the JSON web Server
// let url = "http://localhost:3000/users";

// fetch(url, {
//     method: "POST",
//     mode: "cors",
//     credentials: "same-origin",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ id: 12, name: "Anmol", course: "SASS" })
// })
//     .then(res => res.json())
//     .then(result => {
//         console.log(result);
//     });

// POST DATA EXAMPLE

// let url = "http://localhost:3000/api/users";

// fetch(url, {
//     method: "POST",
//     mode: "cors",
//     credentials: "same-origin",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         id: 2,
//         name: "Piyush Sharma",
//         course: "Android"
//     })
// })
//     .then(res => res.json())
//     .then(result => {
//         console.log(result);
//     });

(function() {
    var httpRequest = document
        .getElementById("simple")
        .addEventListener("click", makeRequest);

    function makeRequest() {
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        oReq.open("GET", "        ");
        oReq.send();
    }

    function reqListener() {
        const text = document.querySelector(".text");
        text.innerHTML = String(this.responseText);
        console.log(typeof this.responseText);
    }
})();

(function() {
    var httpRequest;
    document
        .getElementById("ajaxButton")
        .addEventListener("click", makeRequest);

    function makeRequest() {
        httpRequest = new XMLHttpRequest();

        if (!httpRequest) {
            alert("Giving up :( Cannot create an XMLHTTP instance");
            return false;
        }
        httpRequest.onreadystatechange = alertContents;
        httpRequest.open("GET", "test.html");
        httpRequest.send();
    }

    function alertContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                alert(httpRequest.responseText);
            } else {
                alert("There was a problem with the request.");
            }
        }
    }
})();

(function() {
    var httpRequest;
    document
        .getElementById("xmlRequest")
        .addEventListener("click", makeRequest);

    function makeRequest() {
        httpRequest = new XMLHttpRequest();

        if (!httpRequest) {
            alert("Giving up :( Cannot create an XMLHTTP instance");
            return false;
        }
        httpRequest.onreadystatechange = alertContents;
        httpRequest.open("GET", "test.xml");
        httpRequest.send();
    }

    function alertContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var xmldoc = httpRequest.responseXML;
                var root_node = xmldoc.getElementsByTagName("root").item(0);
                alert(root_node.firstChild.data);
            } else {
                alert("There was a problem with the request.");
            }
        }
    }
})();
-->

```xml
<!-- test.xml -->
<?xml version="1.0" ?>
<root>
    I'm a test.
</root>
```

<!-- ### Projects

- Make a todo manager that will store data in browser storage
- Make a form that have input field for name, email and add button
  - show the added data below the form
- Make a clickable dropdown
- Make a sidebar navigation
- Make a image slideshow
- Make a javaScript digital clock with start and stop button -->

<!--
  - history - contain the browser history
    - back()
    - forward()
  - navigator - contain the information about the browser
    - appName
    - appCodeName
    - platform
    - cookieEnabled
    - product
    - userAgent
  - screen - contain the information about the user screen
    - width
    - height
    - availWidth
  - availHeight

- console
    - log, error, dir, table, warn, clear
```js
// console methods
console.clear(); // clear the console
console.info("This is info");
console.error("This is error");
console.warn("This is warning");
console.debug("This is debugging");
console.table({
  name: "Abc",
  rollno: 111,
  branch: "CSE"
});
console.table([1, 2, 3, 4]);

console.time("1"); // start the time calculation
for (let i = 0; i < 20000000; i++) {
  i + 1;
}
console.timeEnd("1");

console.log("Hello");
console.assert(12 == 13, "Both are not Equal", "hdhh");
console.dir({ a: 122 });
```

## DOM

- DOM properties and Methods
  - .forms
  - .cookie
  - .getElementById()
  - .getElementByClassName()
  - .getElementByName()
  - .querySelector()
  - .querySelectorAll()
  - .write()
  - .writeln()
  - .title
  - .addEventListener()
  - .images
  - .links
  - .head
  - .body

### Element Object

- addEventListener()
- appendChild()
- attributes
- children
- classList
- className
- click()
- firstChild()
- .innerHTML
- .setAttribute()
- .getAttribute()
-->

<!--
// JavaScript how to find intersection, union of two array
function intersection(a, b) {
  return a.filter(val => b.includes(val));
}

let a1 = [1, 2, 3];
let b1 = [2, 3, 4, 5];

console.log(intersection(a1, b1));
console.log(intersection(b1, a1));
function difference(a, b) {
  return a.filter(val => !b.includes(val));
}
console.log(difference(a1, b1));
console.log(difference(b1, a1));
-->

<!--
// Handling Multiple Key Press
// A, S, D
let map = { 65: false, 83: false, 68: false };
document.onkeydown = e => {
  if (e.keyCode in map) {
    map[e.keyCode] = true;
    if (map[65] && map[83] && map[68]) {
      console.log("Hello World");
    }
  }
};
document.onkeyup = e => {
  if (e.keyCode in map) {
    map[e.keyCode] = false;
  }
};
-->
