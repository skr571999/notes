# Unit 12

## jQuery

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
$("a").click(function(event) {
  alert("As you can see, the link no longer took you to jquery.com");
  event.preventDefault();
});

// - Launching code on Document Ready
$(document).ready(function() {
  // Your code here.
});

//  Attributes
// As a setter
$("a").attr("href", "about.html");
$("a").attr({
  title: "About Page",
  href: "about.html"
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
<button>
  Click to Add 1
</button>

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
      url: "http://localhost:3000/api/users/"
    }).done(res => {
      console.log(res);
    });
  });

  $(".sendData").click(() => {
    $.post({
      url: "http://localhost:3000/api/users/",
      data: {
        name: "Mradul",
        courses: "Python"
      }
    }).done(res => {
      console.log(res);
    });
  });
</script>
```

## Cash

- Similar to jQuery

<!-- https://kenwheeler.github.io/cash/ -->
