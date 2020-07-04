# Unit 2

## CSS

- Selectors
  - Tag, Class, Id, Multiple
- properties and values
  - color, background-color, width, height, margin, padding, font-family, font-size, font-weight, border, text-align
  - color Values
- width in percentage: responsive design
- Comments
- Advance Selector
  - `ul li`
  - `ul > li`
  - `h1, h2`
  - `input[type=text]`
  - Pseudo Selectors
    - Styling at a particular state of a Element
    - `:hover`
    - `::before`
    - `::selection`
- Properties Categories
  - Styling Text
    - Font formatting
    - Links, List Styling
  - Styling Box
    - Background
    - Border
    - Margin, Padding
    - Height, Width
- Responsive Design
  - View Port
  - Media Queries
  - Flexbox
  - Grid
- CSS Variables
- Transform
- Transition
- Animation

### FlexBox Properties

- Container Properties
  - flex-direction
  - flex-wrap
  - flex-flow - shorthand for flex-direction and flex-wrap
  - justify-content
  - align-items
  - align-content
- Child Element Properties
  - order
  - flex-grow
  - flex-shrink
  - flex-basis - specify the initial width
  - flex - shorthand property for flex-grow, flex-shrink, and flex-basis
  - align-self

### Media Queries

- Media Types
  - all
  - print
  - screen
  - speech

```css
@media screen and (max-width: 600px) {
  body {
    background-color: red;
  }
}
```

- Specifing media for style sheet

```html
<link
  rel="stylesheet"
  media="screen and (min-width: 900px)"
  href="widescreen.css"
/>
```

### CSS Variables

- Are Case Sensitive
- Must be declared in Selector Scope OR for global scope use `:root`
- variable name must start with `--`
- declaration

```css
:root {
  --mycolor: red;
}
```

- Usage

```css
body {
  background-color: var(--mycolor);
}
```

<!--
- Freecode camp (YouTube) - CSS3 30 Days
  - https://www.youtube.com/playlist?list=PLWKjhJtqVAbl1AfjiGyYxwpdAPi5v-1OU
-->

<!--
- Layout
  - float, flex, position, grid, table
- Color Values
  - rgb()
  - rgba(red, green, blue, alpha)
  - HEX value
  - hsl(hue, saturation, lightness)
  - hsl(hue, saturation, lightness, alpha)
- CSS clip-path maker => https://bennettfeely.com/clippy/
-->
