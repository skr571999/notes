# SASS Introduction

## Basics

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

- Variables

```scss
$primary-color: #00ffff;
body{
	color: $primary-color;
}
```

- Nesting

```scss
body{
	color: grey;
	h1{
		color: lightgreen;
	}
}
```

- Partials and imports

```scss
// _break.scss
h1{
	color: red;
}

// main.scss
@import 'break'

body{
	margin: 0;
}
```

- Mixins

```scss
@mixin transform($property){
	--web-kit-transform: $property;
	--ms-transform: $property;
	transform: $property;
}

.box{
	@include transform(rotate(30deg));
}
```

- Extend and Inheritance

```scss
%message{
	border: 1px solid red;
	padding: 10px;
}

.message-success{
	@extend %message;
	color: green;
}
```
