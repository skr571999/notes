---
title: W3Schools CSS
---

## CSS

- It is the language used to style the HTML pages
- Cascading Style Sheets
- Syntax
  - Selector - used to find the HTML elements
  - Declarations
    - property
    - value
- Types of the selectors
  - Simple - element, id, class
    - universal selector(\*)
    - grouping selector
  - combination
  - pseudo-class
  - pseudo-elements
  - attribute
- How to add CSS
  - In-line
  - Internal
  - External
- Cascading order
  - 1 - In-line
  - 2 - External / Internal
  - 3 - Browser default
- Comment - `/* */`
- Color
  - Color Names
  - RGB
  - HEX
  - HSL

## Background

- Property
  - background-color
  - background-image
  - background-repeat
  - background-position
  - background-attachment
  - background-position
  - opacity
  - background --> Shorthand Property
    - `background: #ffffff url("img_tree.png") no-repeat right top;`
    - Order of the Property
      - color, image, repeat, attachment, position
- Opacity using the RGBA - color - rgba(1,2,3,4)
- Other background Property
  - background-clip
  - background-origin
  - background-size

## Border

- Property
  - border-style: (1, 2, 3, 4) value(s)
    - border-top-style
    - border-left-style
    - border-bottom-style
    - border-right-style
  - border-width: (1, 2, 3, 4) value(s)
  - border-color: (1, 2, 3, 4) value(s)
  - border --> Shorthand property
    - `border: 5px solid red;`
    - Order of the Property
      - width, style(required), color
    - border-{top, left, bottom, left} --> width, style, color
  - border-radius - (1,2,3,4) values
    - border-top-left-radius
    - border-top-right-radius
    - elliptical corners
      - `border-radius: 50px / 15px;`

## Margin

- Property
  - margin-top
  - margin-right
  - margin-bottom
  - margin-left
  - margin : (1,2,3,4) values --> Shorthand
    - `margin: 25px 50px 75px 100px;`
    - Order of the Property: top, right, bottom, left
- Collapsing of the margin
  - Top and bottom margins of elements are sometimes collapsed into a single margin that is equal to the largest of the two margins.
  - This does not happen on left and right margins! Only top and bottom margins!

## Padding

- Property
  - same as margin

## Height/ Width

- Property
  - height
  - width
  - max-height
  - min-height
  - max-width
  - min-width

## Box model

- Content --> Padding --> Border --> Margin
- Width and height of an Element == width/height + padding + borders + margins

## Outline

- Property
  - outline-style
  - outline-color
  - outline-width
  - outline-offset
  - outline --> Shorthand
    - `outline: thick ridge pink;`
    - Order of the Property
      - width, style(required), color
  - outline-offset
- It doesn't Affect the width and height of the element

## Text

- Property
  - color
  - text-align
  - text-decoration
  - text-transform
  - For spacing
    - text-indent
    - letter-spacing
    - line-height
    - word-spacing
    - white-space
  - text-shadow
    - `text-shadow: 2px 2px;`
    - `text-shadow: 2px 2px red;`
    - `text-shadow: 2px 2px 5px red;`

## Font

- Property
  - font-family
  - font-style
  - font-weight
  - font-variant
  - font-size
  - font --> ShortHand
    - `font: 20px Arial, sans-serif;`
    - `font: italic small-caps bold 12px/30px Georgia, serif;`
- Using Google Font

## Icons

## Links

- Link State
  - a:link
  - a:visited
  - a:hover
  - a:active

## List

## Table

## Other Property

- display
- hidden
- position
- overflow
- float
  - clear

## Selector

- Combinators
- pseudo-class
- pseudo-element
- attr-selector

## Examples

- Navbar
  - horizontal
  - vertical
- Dropdown
- Image Gallery
-

## Image Sprites

## Forms

## Counter

## Layouts

## Units

## Specificity
