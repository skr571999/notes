---
title: Pug Sass jQuery
---

## Pug Introduction

### Installation

```cmd
npm i pug-cli -g
pug --help
intro> pug -w ./ -o ./html -P

// folder
// - intro
//    - html
//    - index.pug
```

### Usage

- directly with node/browser
- using build tool(gulp, webpack)
- express intergation
- Doctypes - `doctype html` -- {html, xml, strict}
- multiple line

```pug
p.
    this is a text
    this is also a text
p.text-center.
    this is a text
    this is also a text
```

### Id and class

```pug
h1#pageTitle
p.big-text
p.text-center.text-primary
```

- Attributes `input(type='text' name='name')`

- Javascript `- var a = 13;`

## SASS Introduction

### Basics

- Installation `npm i sass -g`, `sass --help`
- Output Styles
  - Commpressed
  - Compact
  - Expanded
  - Nested
- Usage

```cmd
// convert the scss file of styles/scss folder to styles/css
sass --watch styles/scss:styles/css
// converting sass <--> scss
sass-convert styles.sass style.scss
sass-convert styles.scss style.sass
```

### Variables

```scss
$primary-color: #00ffff;
body {
  color: $primary-color;
}
```

### Nesting

```scss
body {
  color: grey;
  h1 {
    color: lightgreen;
  }
}
```

### Partials and imports

```scss
// _break.scss
h1 {
  color: red;
}

// main.scss
@import "break" body {
  margin: 0;
}
```

### Mixins

```scss
@mixin transform($property) {
  --web-kit-transform: $property;
  --ms-transform: $property;
  transform: $property;
}

.box {
  @include transform(rotate(30deg));
}
```

### Extend and Inheritance

```scss
%message {
  border: 1px solid red;
  padding: 10px;
}

.message-success {
  @extend %message;
  color: green;
}
```

## jQuery Introduction

- jQuery is a JavaScript Library
- Features of Jquery
  - Easy to Use
  - Cross browser Community
  - Support AJAX
  - Have Plugins
  - Light Weight
- Usage
  - Using CDN - Google CDN Link
  - By Downloading - From [jQuery Website](https://jquery.com/download/)

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
```

### Working

```js
// - Element Selection
$("h1");

// - Adding the Action
$("a").click(function (event) {
  alert("As you can see, the link no longer took you to jquery.com");
  event.preventDefault();
});

// - Launching code on Document Ready
$(document).ready(function () {
  // Your code here.
});

//  Attributes
// As a setter
$("a").attr("href", "about.html");
$("a").attr({
  title: "About Page",
  href: "about.html",
});
// As a getter
$("a");
// ///// Changing the Content
$("div").html("<p>Hello World</p>");
$("div").text("<p>Hello World</p>");
```

```html
<!--  Doing Change On Some Event -->
<p>1</p>
<button>Click to Add 1</button>

<script>
  $("button").click(() => {
    $("p").text(parseInt($("p").text()) + 1);
  });
</script>

<!-- OR -->
<script>
  $("button").on("click", () => {
    $("p").text(parseInt($("p").text()) + 1);
  });
</script>
```

- Example

```js
$("button").on("click", () => {
  $("p").text(parseInt($("p").text()) + 1);
});

$("button").off("click");

$("button").one("click", () => {
  console.log("Clicked Once");
});
```

### Effects

```html
<div>
  <p>Apple</p>
  <p>Microsoft</p>
  <p>Google</p>
  <p>Dell</p>
</div>

<button>Hide Div</button>
<script>
  $("button").click(() => {
    //$('div').toggle()
    //$('div').show(1000)
    //$('div').fadeIn(2000)
    $("div").fadeToggle(2000);
  });

  $("button").dblclick(() => {
    //$('div').hide('slow')
    $("div").fadeOut("slow");
  });
</script>
```

### AJAX Call

```html
<button class="getData">Get Data</button>
<button class="sendData">Send Data</button>

<script>
  $(".getData").click(() => {
    $.get({
      url: "http://localhost:3000/api/users/",
    }).done((res) => {
      console.log(res);
    });
  });

  $(".sendData").click(() => {
    $.post({
      url: "http://localhost:3000/api/users/",
      data: {
        name: "Mradul",
        courses: "Python",
      },
    }).done((res) => {
      console.log(res);
    });
  });
</script>
```

### Cash

- Similar to jQuery

<!-- https://kenwheeler.github.io/cash/ -->
