# Angular Material

## Overview

- Installation `npm i @angular/material`

- Reference

  - [https://material.angular.io/guide/getting-started](https://material.angular.io/guide/getting-started)

- Material Components
  - Form Controls
  - Navigation
  - Layout
  - Buttons and Indicators
  - Popups and Modals
  - Data Tables

## Hello World

- I - Add angular material to the Project `ng add @angular/material`
- II - Add the required module to the _app.module.ts_ Like: **MatButtonModule**
- III - Now we can use the Directive provided, _mat-button_

## Typography Classes

```css
.mat-display-{1-4}
.mat-headline
.mat-title
.mat-subheading-{1-2}
.mat-body-{1-2}
.mat-caption
.mat-typography
```

## Creating a seprate module for Material Elements Imports

- I - Create a new module `ng g m material`. This will create a new module _material.module.ts_
- II - Add the following code to _material.module.ts_

```ts
// material/material.module.ts
import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material";

const MaterialComponents = [MatButtonModule];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
```

- III - Add the following code to _app.module.ts_

```ts
import { MaterialModule } from "./material/material.module";

@NgModule({
  imports: [
    // ...
    MaterialModule
    // ...
  ]
})
```

## Buttons and Indicators

- color ==> primary, accent, warm

### Button

- Module _MatButtonModule_
- Directives
  - mat-button
  - mat-{raised,flat,stroked}-button
  - mat-fab
  - mat-mini-fab
  - mat-icon-button
  - disableRipple

## Material Themeing

- Pre Built in themes

```scss
@import "@angular/material/prebuilt-themes/deeppurple-amber.css";
@import "@angular/material/prebuilt-themes/indigo-pink.css";
@import "@angular/material/prebuilt-themes/pink-bluegrey.css";
@import "@angular/material/prebuilt-themes/purple-green.css";
```

- Adding a Custom Theme

```scss
@import "~@angular/material/theming";
@include mat-core();

// defining the color(primary, accent, warm) based on Mateial desing Color Palette Colors and their Shades
$app-primary: mat-palette($mat-indigo, 300, A500, 900);
$app-accent: mat-palette($mat-pink, A700, A400, A400);
$app-warn: mat-palette($mat-red); // Optional

// For light theme
$app-theme: mat-light-theme($app-primary, $app-accent, $app-warn);
// For Dark theme
$app-theme: mat-dark-theme($app-primary, $app-accent, $app-warn);

@include angular-material-theme($app-theme);
```

- Defining Second Theme for some particular Components

```scss
@import "~@angular/material/theming";
@include mat-core();

.theme-2 {
  $alternate-primary: mat-palette($mat-blue, 500, 500, 50);
  $alternate-accent: mat-palette($mat-yellow, 400);

  $alternate-theme: mat-dark-theme($alternate-primary, $alternate-accent);

  @include angular-material-theme($alternate-theme);
}
```
