# Unit 10

## BOM

- Browser Object Model(BOM)(window) is an interface that allow javascript to interact with the browser
- And the DOM(Document Object Model)(window.document) is a property of the window using which we can interact with the HTML Document
- The Browser converts a web page into the tree of node of HTML Elements

  - It Defines an HTML Element as Object which have properties and Methods
  - we can add Events to the HTML Elements
  - So, a HTML Element can have
    - Property
    - Method
    - Event

- Working Process
  - Selection --> Adding Event Listener --> Add Event Action
- Ways of Selecting an Element

  - .querySelector()
  - .querySelectorAll()
  - .getElementById()
  - .getElementByClassName()

- What we can do using JavaScript in HTML Document

  - Modifying the Element content
  - Adding the new Element
  - Removing the Element
  - Modify the Style
  - Modifying the Classlist of an Element
  - Modifying the Attributes of an Element
  - Getting the Form Value
  - Form Validation
  - Browser Storage
    - localstorage
    - sessionstorage
  - AJAX
  - Dropdown
  - Sidebar

<!--
- Window Objects and Properties
- setTimeout()
- clearTimeout()
- setInterval()
- clearInterval()
- print()
- innerHeight, innerWidth, outerHeight, outerWidth
- location.href
  - used to get the current page address and redirect to new page

- Common JavaScript APIs
  - API to manipulate document
  - API to fetch data from the server
  - API for drawing and manipulating graphics
  - Audio and video APIs
  - Device APIs
  - Client side storage APIS
- Third Party APIs
  - Twitter API
  - Google Map API

- Charts
  - https://canvasjs.com
  - https://www.chartjs.org
-->

### Modifying Element Constent

```js
<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
    <h1>Hello</h1>
    <button>Click Me</button>
    <script>
        let a = document.querySelector('h1')
        let btn1 = document.querySelector('button')

        btn1.addEventListener('click', ()=>{
            a.innerHTML = "Hello World"
        })
    </script>
</body>
</html>
```

### Adding the new Element

```js
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <div>
      <h1>Hello</h1>
    </div>
    <button>Click Me</button>
    <script>
      let div1 = document.querySelector("div");
      let btn1 = document.querySelector("button");

      btn1.addEventListener("click", () => {
        let p1 = document.createElement("p");
        p1.innerHTML = "This is Added using JavaScript";

        div1.append(p1);
      });
    </script>
  </body>
</html>
```
