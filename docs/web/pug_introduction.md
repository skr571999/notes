# Pug Introduction

## Basics

- Installation

```cmd
npm i pug-cli -g
pug --help
intro> pug -w ./ -o ./html -P

// folder
// - intro
//    - html
//    - index.pug
```

- Usage

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

- Id and class

```pug
h1#pageTitle
p.big-text
p.text-center.text-primary
```

- Attributes `input(type='text' name='name')`

- Javascript `- var a = 13;`
