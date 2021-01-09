---
title: Angular
---

<!--
- To Learn
  - Angular
  - Angular Material
  - RxJS
-->

## Learning Topics

- Components and Templates
- Forms For User Input
- Observables & RxJS
- NgModules
- DI(Dependency Injection)
- Access Servers over HTTP
- Routing and Navigation
- Security
- Animations
- Testing
- Deployment
- Project File Structure
- TypeScript
- Angular Material
- RxJS
- NgRx
- Content Projection(with Slots)

<!--
// RxJS link for JavaScript
<script src="https://unpkg.com/@reactivex/rxjs@6.0.0/dist/global/rxjs.umd.js"></script>
-->

## Examples

- JWTAuthRefreshTokenDemo
- NgrxTutorialStoreDemo
- SocketConnectionDemo
- StackBiz Demo- https://stackblitz.com/@skr571999

## Projects

- ECommerce
- TodoApp
- UserListApp
- AngularTourOfHeroes(In System)
  - Build using Angular Docs: https://angular.io/tutorial
- JWT-Auth(In System)
- Socket Example(In System)
- [Pintrest Similar](https://github.com/aviabird/pinterest)
  - Build using Angular2, ngrx store, observables and reactive forms

## Angular Introduction

- Angular is a front-end web application development framework that is used to develop Single Page web Applications.
- It is a free and Open Source framework maintained by Google
- Versions
  - Angular JS - 2010
  - Angular 2 - 2016
  - Angular 4 - 2017
  - Angular 5 - November 2017
  - Angular 6 - March 2018
  - Angular 7 - October 2018
  - Angular 8 - May 2019
- Prerequisites

<!--
- HTML, CSS, JS
- TypeScript
-->

### Features

- Speed and Performance
- Smaller Application
- Modular Application Development
- Use TypeScript
- Single Page Application(SPA)

<!-- ### Others

- Version Semantic - [https://docs.npmjs.com/about-semantic-versioning](https://docs.npmjs.com/about-semantic-versioning)
- Release Cycle - [https://angular.io/guide/releases](https://angular.io/guide/releases) -->

### Starting a new App

```js
// Angular CLI Installation
npm install -g @angular/cli
ng v

ng new APP_NAME
cd APP_NAME
ng serve -o
ng serve --host 0.0.0.0 // ==> to run local server for the network
```

- to find the ip address run `ipconfig` in cmd
- Architecture - Module and Component Based
- [Folder Structure](https://angular.io/guide/file-structure)
- Terminology
  - Modules - container for the Components and Services
  - Components - Container for template, data and logic
  - Controller(component) - `*.component.ts` file
  - Template(view) - `*.component.html` file
- Generate Commands

```sh
ng g module MODULE_NAME

ng g c COMPONENT_NAME
ng g c MODULE_NAME/COMPONENT_NAME

ng g service myservice
```

### `@NgModule` decorator

- declarations - contain Components, Pipes, Directives
- imports - contain modules
- providers - contain services
- bootstrap - contain the root components

```ts
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

### `@Component` decorator

- selector
- template
- templateUrl
- styleUrls
- styles

```ts
@Component({
  selector: "app-root",
  template: `
    <h1>Hello World</h1>
  `,
  styles: [`h1 { color: red;}`]
})
```

```ts
@Component({
  selector: "app-root",
   templateUrl: "./app.component.html",
   styleUrls: ["./app.component.css"]
})
```

- Interpolation

```ts
// app.component.ts
export class AppComponent {
  title = "Angular App";
}
```

```html
<!-- app.compoent.html -->
<h1>{{title}}</h1>
<p>{{13 + 12}}</p>
```

- Event Binding

```ts
// app.component.ts
export class AppComponent {
  count = 0;

  changeData() {
    this.count += 1;
  }
}
```

```html
<!-- app.component.html -->
<h1>{{count}}</h1>
<button (click)="changeData()">Change Content</button>
```

### Using Bootstrap

- Methods of Using Bootstrap
  - Using CDN
  - By Downloading
  - By Installing
- By Downloading - download Bootstrap CSS library from its official website and copy the `bootstrap.min.css` file and paste in into your Angular app (under src) it in styles array of Angular-cli.json of app like :

```json
"styles": [
  "src/styles.css",
  "bootstrap.min.css"
],
```

- By Installing Bootstrap module using npm command.

```cmd
npm i bootstrap
```

- To verify if the ng-bootstrap module is installed on your machine, go to package.json file of your app and check Bootstrap module.
- Now add the following code in the style of the `angular.json`

  ```json
  "styles": [
    "src/styles.css",
    "../node_modules/bootstrap/dist/css/bootstrap.min.css",
  ],
  ```

  <!-- "/node_modules/bootstrap/dist/css/bootstrap.min.css" -->

### Using jQuery

```js
// npm install jquery
// Add the jquery path to the angular.json scripts property
{
  // ...
  "scripts": ["./node_modules/jquery/dist/jquery.min.js"]
  // ...
}
// RE RUN the app : ng serve
```

<!-- NOTE: While using Bootstrap and jquery first add the jquery .js file and bootstrap .js file -->

```html
<!-- app.component.html -->
<div>This is To Animated</div>
<button>Animate</button>
```

```ts
// app.component.ts
declare var $: any;

// app.component.ts
ngOnInit() {
  $(document).ready(() => {
    $('button').click(() => {
      $("div").animate({ left: '100px' }, "slow")
      $("div").animate({ fontSize: '5em' }, "slow")
    })
  })
}
```

## Components and Templates

- How to make a New Component and Link to Parent Component?
  - `ng g c hello`

```html
<app-hello></app-hello>
```

- How to pass data from one component to another?

```html
<!-- app.component.html -->
<app-hello data="Google"></app-hello>
```

```ts
//  hello.component.ts
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-hello",
  templateUrl: "./hello.component.html",
  styleUrls: ["./hello.component.css"],
})
export class HelloComponent implements OnInit {
  @Input() data: string;

  ngOnInit() {
    console.log(this.data);
  }
}
```

- Interpolation is used to show the Component Properties in the HTML file

### Directives

- Directives are elements which change the apperance or behaviour of the DOM elemennts.
- Types of Directives
  - Component Directive
  - Structural Directive
  - Attribute Directive

#### Component Directive

- Directive with a template

<!-- ```html
<button (click)="btn1()">Click</button>
```

```ts
btn1(){
  alert('Hello WOrld')
}
``` -->

#### Structural Directives

- Change the DOM layout by adding and removing the Elements
- These are the structural directives `*ngIf`, `*ngFor`, `*ngSwitch`
- `*ngIf`

```html
<!-- Example 1 -->
<p *ngIf="check">Hello This is *ngIf</p>
```

```ts
// inside the component class
check = true;
```

```html
<!-- Example 2 -->
<p *ngIf="radCheck; then rad1Then; else rad1Else"></p>
<ng-template #rad1Then> This is then part </ng-template>
<ng-template #rad1Else> This is else Part </ng-template>
```

- `*ngFor`

```html
<ol>
  <li *ngFor="let i of brands">Hello {{i}}</li>
</ol>
<!-- OR -->
<ol>
  <li *ngFor="let i of brands; let j = index">Hello {{i}} - {{j}}</li>
</ol>
```

<!-- ```html
<ol>
  <li *ngFor="let i of brands; let j = index; let f= first; let l = last">
    Hello {{i}} - {{j}} - First {{f}} - Last {{l}}
  </li>
</ol>
<ol>
  <li
    *ngFor="let i of brands; let j = index; let f= first; let l = last;let e = even; let o = odd"
  >
    Hello {{i}} - {{j}} - First {{f}} - Last {{l}} - Even {{e}} - Odd {{o}}
  </li>
</ol>
``` -->

```ts
brands = ["Apple", "Microsoft", "Google"];
```

<!-- - `trackBy` with `*ngFor`

  - if we use the trackBy in ng for then when there is a change in our data only the data that is changed will only be changed not the complete data, this will increase the performance only the data that is updated is changed not the other and so the DOM will change only where data is changed.
  - Example

```html
<table>
  <tr *ngFor="let i of student;let j=index;trackBy:trackbystudentid ">
    <td>{{i.id}}</td>
    <td>{{i.name}}</td>
    <td>{{i.branch}}</td>
  </tr>
</table>

<p>
  <button (click)="getMoreData()">Get More Data</button>
</p>
```

```ts
// inside the component Class
student: any[]=[
    {
      id: 1,
      name: 'Abc',
      branch: 'CSE'
    },
    {
      id: 2,
      name: 'def',
      branch: 'ME'
    }
  ]

  getMoreData(){
    this.student=[
    {
      id: 1,
      name: 'Abc',
      branch: 'CSE'
    },
    {
      id: 2,
      name: 'def',
      branch: 'ME'
    },{
      id: 3,
      name: 'Ghi',
      branch: 'EC'
    }
  ]}

  trackbystudentid(index:number, student:any){
    return student.id
  }
``` -->

- `*ngSwitch`

```html
<div [ngSwitch]="choice">
  <h3 *ngSwitchCase="1">Monday</h3>
  <h3 *ngSwitchCase="2">Tuesday</h3>
  <h3 *ngSwitchCase="3">Wednesday</h3>
  <h3 *ngSwitchCase="4">Thurday</h3>
  <h3 *ngSwitchCase="5">Friday</h3>
  <h3 *ngSwitchCase="6">Saturday</h3>
  <h3 *ngSwitchCase="7">Sunday</h3>
</div>
```

```ts
choice = 7;
```

##### Attribute Directives

- Attribute directives modify the apperance of the DOM element or component.
- Types of Attribute Directives
  - ngStyle
  - ngClass
- NgStyle

```html
<div>
  <ul>
    <li *ngFor="let todo of todos">
      <p>Title : {{todo.title}}</p>
      <p>
        isdone :
        <span [ngStyle]="{'color': todo.isDone?'green': 'red'}">
          {{todo.isDone}}
        </span>
      </p>
    </li>
  </ul>
</div>
```

```ts
todos: any[]=[
{
  title: 'Learn HTML',
  isDone: true
},{
  title: "Learn CSS",
  isDone: false
},{
  title: "learn JS",
  isDone: true
}]
```

- NgClass

```html
  <!-- ngClass as string -->
  <p [ngClass]="'font1 blue'">This is Angular</p>
  <!-- ngClass as Array -->
  <p [ngClass]="['font1', 'blue']">This is React</p>
  <!-- ngClass as object -->
  <p [ngClass]="{'blue': true}">This is Express</p>
  <!-- ngClass with the value of the variable from ts  -->
  <p *ngFor="let tech of techs">
    <span [ngClass]="tech.status?'bggreen':'bgred'"></span>
    {{tech.title}}
  </p>
  <!-- Using the method -->
  <div>
    <p *ngFor="let tech of techs">
      <span [ngClass]="getTechColor(tech.status)"></span>
      {{tech.title}}
    </p>
  </div>
</div>
```

```css
.font1 {
  font-size: 1em;
}

.red {
  color: red;
}

.blue {
  color: blue;
}

.ngclassDemo span {
  border-radius: 50%;
  width: 1em;
  height: 1em;
  display: inline-block;
}

.bgred {
  background-color: red;
}

.bggreen {
  background-color: green;
}
```

```ts
techs:any[]=[
  {
    title: 'Angular',
    status: true
  },
  {
    title: 'React',
    status: false
  },
  {
    title: 'NodeJS',
    status: true
  }
]
getTechColor(status){
  let myclass;
  if(status){
    myclass={
      'bggreen': true
    }
  }else{
    myclass={
      'bgred': true
    }
  }
  return myclass
}
```

#### Data Binding

- Types
  - One Way
  - Two Way

##### One Way Data Binding

- Component to View
  - Interpolation Binding
  - Property Binding
  - Style Binding
  - Class Binding
  - Attribute Binding
- View to Component

  - Event Binding

- Interpolation

```ts
export class AppComponent {
  title = "Angular App";
}
```

```html
<h1>Hello {{title}}</h1>
<p>{{'Hello' + 'Hello'}}</p>
<p>{{13 + 12}}</p>
```

- Property Binding

```html
<p [innerHTML]="name"></p>
<img [src]="imgUrl" [height]="100" />
```

```ts
name = "Angular";
imgUrl = "https://angular.io/assets/images/logos/angular/angular.svg";
```

- Attribute Binding

```html
<div>
  <h2>Property Binding</h2>
  <div>
    <img [attr.src]="imgUrl" [attr.height]="100" />
  </div>
</div>
```

```ts
imgUrl = "https://angular.io/assets/images/logos/angular/angular.svg";
```

- Event Binding

```html
<button (click)="eventBindingDemo()">Click Me</button>
```

```ts
eventBindingDemo(){
  console.log('eventBindingDemo')
}
```

##### Two Way Data Binding

- In two way data binding data is transfered from view to component and from component to view.
- First Use Case
  - As the combination of event and property binding.

```html
<div>
  Name:
  <input type="text" [value]="data" (input)="data=$event.target.value" />
</div>
<p>Your Name : {{data}}</p>
```

```ts
data = "Piyush";
```

- Second Use Case
  - Using the ngModel

```ts
// - Import FormsModule in app.module.ts and add to the imports section
import { FormsModule } from "@angular/forms";
```

```html
<div>
  Enter Your Name
  <input [(ngModel)]="data1" />
</div>
<p>Your Name : {{data1}}</p>
```

```ts
data1 = "Rajneesh";
```

#### Pipes

- Pipes are used to transform the data into desired output.
- pipe perator(|) is used for the data transformation.
- Types of Pipes
  - Built in pipes (String, date, Currency, percentage, decimal)
  - Parameterised Pipes
  - Custom Pipes
- Syntax

```html
{{ interpolated_value | pipe_name}}
<!-- parameterised pip -->
{{ data | pinpName: parameter1 : parameter2:parametr3 }}
```

##### Built in Pipes

- Pipes [DOCS:](https://angular.io/api?type=pipe)

```html
<p>{{ "Piyush" | uppercase }}</p>
<p>{{ "Piyush" | lowercase }}</p>
<p>{{ "Piyush" | titlecase }}</p>
<p>{{ "Piyush Sharma" | slice:0:8 }}</p>
<p>{{ dob }}</p>
<p>{{ dob | date }}</p>
<p>{{ dob | date:"dd/MM/yyyy" }}</p>
<p>{{ dob | date | uppercase}}</p>
<p>{{ 20000 | currency }}</p>
<p>{{ .12345 | percent }}</p>
<p>{{ .12345 | percent:'2.4' }}</p>
<p>{{ .12345 | percent:'2.4-6' }}</p>
<p>{{ .12345 | number }}</p>
<p>{{ .123456789 | number:'2.4-6' }}</p>
<p>{{ 20000 | currency }}</p>
<p>{{ 20000 | currency: "INR" }}</p>
```

```ts
// app.component.ts
dob = new Date(2000, 1, 1);
```

<!-- #### Custom Pipes

- **Step 1:** Adding a pipe using **CLI**

```cmd
ng g p PIPE_NAME
ng g p mypipe
```

- **Step 2:** Add the following code to `mypip.pipe.ts`

```ts
transform(value: any, marks: any): any {
  if (marks > 85){
    return 'Pass ' + value
  }else{
    return 'Not Good ' + value;
  }
}
```

- **Step 3:** Now, we can use our custom pipe in template as follows

```html
<div>
  <h2>Custom Pipe</h2>
  <div>
    <table>
      <tr>
        <td>Name</td>
        <td>Percentage</td>
      </tr>
      <tr *ngFor="let std of stdData">
        <td>{{std.name | mypipe:std.percentage}}</td>
        <td>{{std.percentage}}</td>
      </tr>
    </table>
  </div>
</div>
```

```ts
// app.component.ts
stdData: any[]=[
  {
    name: 'Piyush',
    percentage: '85'
  },
  {
    name: 'Mradul',
    percentage: '75'
  },
  {
    name: 'Rajneesh',
    percentage: '95'
  },
]
``` -->

<!-- #### LifeCycle Hook

##### Constructor

- Since a component is a Typescript class, every component must have a constructor method. The
  constructor of the component class executes, first before the execution of any other lifecycle hook events. If we need to inject any dependencies into the component, then the constructor is the best to inject those dependencies. After executing the constructor, Angular executes its lifecycle hook methods in a specific order
- We can say that once a new component is an instantiation, Angular goes through a couple of different phases in this creation process and it will actually give us a chance to hook into these phases by implementing some methods as per your requirement
- Lifecycle Sequence
  - ngOnChange - OnInit - DoCheck - AfterContentInit - AfterContent - AfterContentChecked - AfterViewInit - AfterViewChecked - OnDestroy

##### Lifecycle of a Component

- Creating a component
- Rendering a component
- Creating and Rendering its child components
- Checking data-bound properties
- Destroying and removing it from DOM
- `ngOnChange()`
  - Called before ngOnInit() and whenever one or more data-bound input properties change.
- `ngOnInit()`
  - Initialize the directive/component after Angular first displays the data-bound properties and sets the directive/component's input properties. Called once, after the first ngOnChanges().

> More About Life Cycle Hook : [https://angular.io/guide/lifecycle-hooks#lifecycle-sequence](https://angular.io/guide/lifecycle-hooks#lifecycle-sequence) -->

## Forms For User Input

- Forms are used to collect the data from the user
- Types of Forms
  - Template-driven forms
  - Model-driven forms (Reactive Forms)

### Template Driven Form

- In template driven forms we do two way data binding using [(NgModel)]
- Usage

```ts
// import FormsModule in app.module.ts
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  ...
})
```

- First Way

```html
<!-- app.component.html -->
<form #regForm="ngForm" (submit)="register(regForm)">
  <div>Name :<input type="text" name="name" ngModel /></div>
  <div>Email :<input type="email" name="email" ngModel /></div>
  <div><button type="submit">Register</button></div>
</form>
```

```ts
// app.component.ts
register(regForm:any){
  let name = regForm.controls.name.value
  let email = regForm.controls.email.value
  console.log(name)
  console.log(email)
  // console.log(regForm)
}
```

- Second Way:

```html
<!-- app.component.html -->
<form (submit)="register2()">
  <div>Name :<input type="text" name="name" [(ngModel)]="uname" /></div>
  <div>Eamil :<input type="email" name="email" [(ngModel)]="email" /></div>
  <div><button type="submit">Register</button></div>
</form>
```

```ts
// app.component.ts
uname;
email;
register2(){
  let name = this.uname
  let email = this.email
  console.log(name, email)
}
```

### Template Driven forms Validation

- Example 1 - Disabled Submit Button
  - **Step 1** - Add the `required` attribute to all the input elements
  - **Step 2** - Add the following code to the submit button

```html
<button ... [disabled]="!regForm.valid">Register</button>
```

- Example 2 - adding css style on the touched event

  - CSS classes for form

    ![Form Validation Classes](files/form_validation_classes.png)

```css
/* app.component.css */
input.ng-invalid.ng-touched {
  border-color: red;
}
```

- Example 3 - Showing Message

```html
<!-- app.component.html -->
<input ... #email1="ngModel" />
<span class="help-bpx" *ngIf="email1.touched && !email1.valid"
  >Enter a valid Email
</span>
```

### Reactive Form

- In Reactive forms we create a modal of the form fields in the ts file and then bind that to the HTML form.

```ts
// import the ReactiveFormsModule modules in app.module.ts
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [ BrowserModule, FormsModule,
  ...
})
```

```ts
// Make the Modal of the Form fields
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";

export class AppComponent {
  signupform: fb.group({
      name: '',
      email: ''
  });

  constructor(private fb: FormBuilder) {}

  postData() {
    console.log(this.signupform.value);
    // get();
    // reset();
    // setValue(); // all the form field value must be supplied
    // patchValue();
    // valueChanges();
  }
}
```

```html
<!-- HTML code for the form -->
<form [formGroup]="signupform" (submit)="postData()">
  <p>Name :<input type="text" formControlName="name" /></p>
  <p>Email :<input type="email" formControlName="email" /></p>
  <p><input type="submit" value="Post Data" /></p>
</form>
```

### Reactive Form Validation

```ts
// adding form validation
constructor(private fb: FormBuilder) {
    this.signupform = fb.group({
      uname: ['',[Validators.required, Validators.maxLength(10)]],
      uemail: ['',[Validators.required, Validators.email]]
    })
  }
```

```html
<!-- HTML Code -->
<form [formGroup]="signupform" (submit)="postData()">
  <p>Name : <input type="text" formControlName="name" /></p>
  <p>
    Email :
    <input type="email" formControlName="email" />
    <br />
    <span
      *ngIf="signupform.controls['email'].touched && !signupform.controls['email'].valid"
      >Email is required</span
    >
  </p>
  <p>
    <input type="submit" value="Post Data" [disabled]="!signupform.valid" />
  </p>
</form>
```

## Dependency Injection

- Dependency injection is a technique in which one object supplies the dependencies of another object. A dependency is an object that can be used (a service)
- Dependency - is an service(object) that can be used in any another object
- Injections - It is a process of passing the dependency to a dependent object.
- Two levels to register Dependencies
  <!-- - Registering the dependency at app level creates the injected dependency singleton.
  - You can also register the dependency at component level. There a new instance of the dependency will create.
  - -->

```ts
// App Level
@NgModule({
  // ...
  providers: [NumListService]),
})

// Component Level
@Component({
  // ...
  providers: [NumListService],
})
```

### Services

```ts
// Create a service file
ng g service SERVICE_NAME
```

#### Using Service

```ts
// ng g s myservice
//  myservice.service.ts
getData(){
  return [{ id: 1, name: 'Mradul', course: "HTML"},
  { id: 2, name: 'Rajneesh', course: "CSS"}]
}
```

```ts
// app.component.ts
import { MyserviceService } from './myservice.service'

@Component({
  ...
  providers: [MyserviceService]
})

export class AppComponent {
  name = 'Angular';
  data = [];
  constructor(private mydata: MyserviceService) {  }
  ngOnInit() {
    this.data = this.mydata.getData()
    console.log(this.data)
    }
}
```

```html
<!-- app.component.html -->
<div *ngFor="let i of data">
  <p>{{i.id}} : {{i.name}} - {{i.course}}</p>
</div>
```

## Accessing Server over HTTP

- HttpClientModule - is used for performing HTTP requests
- HttpClient is used to handle the request and responses
  - Methods
    - GET, POST, PUT, DELETE

<!-- - HTTP vs HttpClient
  - HttpClient is an upgraded version of the http from @angular/http
  - Difference
    - Immutable request and response objects
    - Interceptors we added
    - Progress events for both request and response
    - Synchronous response body access
    - automatic conversion from JSON to an Object -->

<!-- ## Using HttpClient **get()** with anular in memory api

```cmd
npm i anguar-in-memory-web-api
``` -->

- Importing HttpClientModule

```ts
// app.module.ts
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  imports: [
    //   ...
    HttpClientModule
  ]
})
```

### **get()** - to get the Data

```ts
// std-post-data.service.ts
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class StdPostDataService {
  constructor(private http: HttpClient) {}
  baseUrl = "http://localhost:3000/api/std";

  // for getting all data
  getStdData() {
    return this.http.get(this.baseUrl);
  }
  // for getting some data based on the parameter
  sendStdSearch(params) {
    return this.http.get(this.baseUrl + "/" + params);
  }
}
```

```ts
// app.component.ts
import { Component } from "@angular/core";
import { StdPostDataService } from "./std-post-data.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  stdData;

  constructor(private stdService: StdPostDataService) {}

  ngOnInit() {
    this.stdGetData();
  }

  stdGetData() {
    this.stdService.getStdData().subscribe((result) => {
      this.stdData = result;
      console.log(result);
    });
  }
}
```

```html
<!-- app.component.html -->
<p *ngFor="let std of stdData;let j = index;">
  {{j+1}} :: {{std.name}} // {{std.email}}
</p>
```

### **post()**

```html
<!-- app.component.html -->
<form [formGroup]="stdForm" (submit)="stdFormSubmit(stdForm)">
  <p>Name : <input type="text" formControlName="name" /></p>
  <p>Email :<input type="email" formControlName="email" /></p>
  <p><input type="submit" value="Submit" [disabled]="!stdForm.valid" /></p>
</form>
```

```ts
// app.componet.ts
import { Component, OnInit } from "@angular/core";

import { FormBuilder, Validators } from "@angular/forms";
import { StdPostDataService } from "./../std-post-data.service";

@Component({
  selector: "app-addstd",
  templateUrl: "./addstd.component.html",
  styleUrls: ["./addstd.component.css"],
})
export class AddstdComponent implements OnInit {
  stdForm = this.fb.group({
    name: ["", [Validators.required, Validators.max(20)]],
    email: ["", [Validators.required, Validators.email]],
  });

  constructor(
    private fb: FormBuilder,
    private stdService: StdPostDataService
  ) {}

  ngOnInit() {}
  stdFormSubmit() {
    this.stdService.postStdData(this.stdForm.value).subscribe((result) => {
      this.stdForm.reset();
    });
  }
}
```

```ts
// std-post-data.service.ts
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class StdPostDataService {
  constructor(private http: HttpClient) {}
  baseUrl = "http://localhost:3000/api/std";

  postStdData(data) {
    return this.http.post(this.baseUrl, data);
  }
}
```

<!-- headers: new HttpHeaders().set("Content-Type", "application/Json") -->

### **put()**

- put() method is for performing the update operations
- Syntax:
  - put(URL, body, options)

### **delete()**

- delete() method is for performing the delete operations
- Syntax:
  - delete(URL, options)

## Routing and Navigation

- Routing is mechanism used by angular for navigating between page and displaying appropriated component/page on browser.

### Routing Example

- create a routing module

```js
ng g module app-routing --flat --module=app
// --flat puts the file in src/app insted of its own folder
// --module=app tells the CLI to register it in the imports array of the AppModule
```

```ts
// make two components
ng g c StudentAdd
ng g c StudentDetail
```

```ts
// app-routing.module.ts
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { StudentAddComponent } from "./student-add/student-add.component";
import { StudentDetailComponent } from "./student-detail/student-detail.component";

const routes: Routes = [
  {
    path: "add",
    component: StudentAddComponent,
  },
  {
    path: "detail",
    component: StudentDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

- Import AppRoutingModule module in app.module.ts and add it to the import section

```html
<!-- app.component.html -->
<div>
  <a [routerLink]="['/add']">Add Student</a> :
  <a [routerLink]="['/detail']">Detail</a>
</div>

<router-outlet></router-outlet>
```

- Router Outlet - is a dynamic component that the router uses to display views based on the router navigations

<!--
- Changing the URL on button Click
<p><button (click)="changeUrl()">Click Me</button></p>

```ts
changeUrl(){
    this.router.navigate(['/add'])
}
``` -->

### Redirecting Route

```ts
{
  path:'', redirectTo: 'path_to_redirect'
},
```

<!-- , pathMatch: 'full' -->

### Wildcard Route

- when no routing path is matched then the specified component in the wildcart route will be loaded

```ts
// ng g c pagenotfound
// app-roting.module.ts
{
  path: '**', component: PagenotfoundComponent
}
```

### Child Route

```ts
// app-routing.module.ts
{
    path: 'student',
    children: [
      {
        path: '',
        component: HomeComponentComponent
      },
      {
        path: 'add',
        component: StudentAddComponent
      }, {
        path: 'list',
        component: StudentListComponent
    }, {
        path: ':stdid',
        component: StudentDetailComponent
      }
    ]
  },
```

### Router Link Active

- the CLASS_LIST contain the classes that will be active only when this link is active

```html
<a routerLinkActive="CLASS_LIST" [routerLink]="['./detail']"> Detail </a>
```

### Parameterized Route

```ts
// app-routing.module.ts
{
  path: ':stdid', component: StudentDetailComponent
}
```

```html
<!-- student-listcomponent.html -->
<div *ngFor="let i of students">
  <p>{{i.name}} | {{i.course}}</p>
  <a [routerLink]="['../',i.id]">Detail</a>
</div>
```

```ts
// student-detail.component.ts
import { ActivatedRoute } from "@angular/router";
export class UserComponent {
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    // Ways of getting the Id from the parameter
    // this.route.snapshot.params.id;
    // this.route.snapshot.paramMap.get("id");
    // this.route.paramMap.subscribe(result => {
    //   result.get("id");
    // });
    // this.route.params.subscribe(result => {
    //   result.id;
    // });
  }
}
```

### Route Guard

- Route Guard are used to control wether the user can navigate the route or not.

```js
// Creating a Guard
ng g g GUARD_NAME
```

#### Example 1 - canActivate

```ts
// app-routing.module.ts
import { UserauthGuard } from "./userauth.guard";

const routes: Routes = [
  // ...
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [UserauthGuard],
  },
];
```

```ts
// ng g g userauth
// userauth.guard.ts
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

import { UserService } from "./user.service";

@Injectable()
export class UserauthGuard implements CanActivate {
  constructor(private userservice: UserService, private router: Router) {}
  canActivate(next, state) {
    if (this.userservice.isAuthenticated()) {
      return true;
    } else {
      alert("Not have the access to this page so redirecting to Home");
      this.router.navigate(["/"]);
      return false;
    }
  }
}
```

<!--
- Step 5: Now add the required modules to the `app.module.ts`

**NOTE :**

- GuardClass is declared in bostrap in `app.module.ts` -->

### Example 2 - canDeactivate

```ts
// ng g g deactivatedemo
import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";

import { AboutComponent } from "./about/about.component";

@Injectable()
export class DeactivatedemoGuard implements CanDeactivate<AboutComponent> {
  canDeactivate() {
    return window.confirm("Do you reallly want to close");
  }
}
```

```ts
// app-routing.module.ts
{
  path: 'about',
  component: AboutComponent,
  canDeactivate: [DeactivatedemoGuard]
}
```

## Others

- ng-template
- ng-container
- TODO
- app.module.ts
- Decorators

### **ng-template**

- `<ng-template>` is an angular element for rendering HTML. It is never displayed directly. It can be displayed using structural directive that we use all the time: nglf, ngFor and ngSwitch.

- Before rendering HTML, angular replaces `<ng-template>` with a comment. `<ng-template>` can be used with structural directive. ViewContainerRef etc. If you put some HTML inside of an `<ng-template>`tag, it not only won't be on the screen, but

- It won't be in the DOM either. Angular will replace the `<ng-template>` tag and its contents with a comment. The key is that `<ng-template>` will only be displayed if used in partnership with a structural directive. A rendered`<ng-template>` doesn't itself get turned into a DOM element, only the contents.

- `<ng-template>` is a virtual element and its contents are displayed only when needed (based on conditions).

- `<ng-template>` should be used along with structural directives like `[nglf]`,`[ngFor]`,`[NgSwitch]` or custom structural directives.
  `<ng-template>` never meant to be used like other HTML elements. It's an internal implementation of Angular's structural directives.

- When you use a structural directive in Angular we will add a prefix asterisk(\*) before the directive name. This asterisk is short hand notation for `<ng-template>` Whenever Angular encounter with the asterisk (\*) symbol, we are informing Angular saying that it is a structural
  directive and Angular will convert directive attribute to `<ng-template>` element.

- `<ng-template>` is not exactly a true web element. When we compile our code, we will not see a <ng
  template tag in HTML DOM.

- Angular will evaluate the `<ng-template>` element to convert it into a comment section in HTML DOM.

- Using `<ng-template>`

```html
<ng-template>
  <p>this is using ng-template</p>
</ng-template>
```

- Using `<ng-template>` with `*ngIf`

```html
<!-- If and ng-template -->
<div>
  <h2>ng-template 1</h2>
  <p *ngIf="display">This is using *ngIf</p>

  <ng-template [ngIf]="display">
    <p>this is using ng-template</p>
  </ng-template>
</div>
```

- Using `<ng-template>` with `*ngIf` and `Else`

```html
<div>
  <h2>ng-template 2</h2>
  <p *ngIf="display else myElse">This is the If Block</p>

  <ng-template #myElse>
    <p>this is the else block</p>
  </ng-template>
</div>
```

- Using `<ng-template>` with `*ngFor`

```html
<div>
  <h2>ng-template with for</h2>
  <div>
    <h3>Normal for loop</h3>
    <p *ngFor="let i of [1,2,3,4]">{{i}}</p>
  </div>
  <div>
    <h3>For loop using ng-template</h3>
    <ng-template ngFor let-i [ngForOf]="[1,2,3,4]" let-j="index">
      <p>{{i}}, {{j}}</p>
    </ng-template>
  </div>
</div>
```

- Using `<ng-template>` with `*ngSwitch`

```html
<div>
  <h2>Switch</h2>
  <div>
    <h3>normal switch statement</h3>
    <div [ngSwitch]="'JavaScript'">
      <p *ngSwitchCase="'Angular'">Angular Course</p>
      <p *ngSwitchCase="'TypeScript'">TypeScript Course</p>
      <p *ngSwitchCase="'JavaScript'">JavaScript Course</p>
      <p *ngSwitchDefault>HTML Course</p>
    </div>
  </div>
  <div>
    <h3>ng-template with switch statement</h3>
    <div [ngSwitch]="'TypeScript'">
      <ng-template [ngSwitchCase]="'Angular'">
        <p>Angular Course</p>
      </ng-template>
      <ng-template [ngSwitchCase]="'TypeScript'">
        <p>TypeScript Course</p>
      </ng-template>
      <ng-template [ngSwitchCase]="'HTML'">
        <p>HTML Course</p>
      </ng-template>
      <ng-template ngSwitchDefault>
        <p>HTML Course</p>
      </ng-template>
    </div>
  </div>
</div>
```

---

### **ng-container**

- ng-container is element that's available Angular 2+
- `<ng-container>` is a logical container that can be used group nodes but not rendered DOM tree node. `<ng-container>` rendered as an HTML comment.
- In order to avoid having create that extra div, we can instead use ng-container directive.
- `<ng-container>` is an Angular grouping element that similar `<ng-template>` that it doesn't represent DOM element. The difference that will always be rendered, whereas `<ng-template>` only rendered explicitly requested. `<ng-container>` are useful anywhere you need extra container some template elements, but don't want to (or can't) create container such hold them with due syntax

- Simple ng-container

```html
<div>
  <h2>ng-container</h2>
  <div>
    <h3>Simple Container</h3>
    <ng-container>
      <p>This is simple ng-container</p>
    </ng-container>
  </div>
</div>
```

- Using with ngFor and ngIf

```html
<div>
  <h3>Using with ngFor and ngIf</h3>
  <div>
    <table>
      <ng-container *ngFor="let i of [11,22,33,44,55]">
        <tr *ngIf="i < 44 ">
          <td>{{i}}</td>
        </tr>
      </ng-container>
    </table>
  </div>
</div>
```

- Using with nfIf

```html
<ng-container *ngIf="true">
  <div *ngFor="let i of [11,22,33,44]">
    <p>{{i}}</p>
  </div>
</ng-container>
```

- Replacing the content

```html
<ng-container *ngTemplateOutlet="template"></ng-container>
<p>This is a test</p>
<ng-template #template>
  <p>This is my template</p>
</ng-template>
```

### TODO

- Angular Console
  - UI

### app.module.ts

- @NgModule({})
  - declarations - we here write Components name, Pipe name, Directives name
  - imports - in this we declare the modules name
  - providers - services
  - bootstrap - here we declare the component to be load first

---

### Decorators

- Common Decorators

  - @NgModule() - to define modules
  - @Component() - to define components
  - @Injectable() - to define the service
  - @Input() and @Output - to define properties

- Decorators Type
  - Class Decorators - @Component and @NgModule
  - Property Decorators - @Input
  - Method Decorators
  - Parameter Decorator - @Inject

---

### Web Storage API

- In Angular Apps Cookies are not Used instead we use web storage

- Difference b/w cookies and web storage
  - Unlike cookies the data is not transfered to the server
  - we can store more data than cookies
- Types

  - localstorage
  - Session Storage

- LocalStorage - Store the data with no expiration data and the data will not be deleted when the browser is closed
- SessionStorage - it is same as localstorage except that it store the data only for one session. The data will be deleted when we close the browser tab.

- Example

```ts
// Saving the Data
localStorage.setItem("name", "Mradul");
sessionStorage.setItem("user", "Piyush");

// -Retriving the Data
console.log(localStorage.getItem("name"));
console.log(sessionStorage.getItem("user"));
```

### Auxiliary Routes

- Router Outlet: is a placeholder that gets filled dynamically by the Angular depending on the current router.
- Named Routing
- Multiple Router-Outlets
- Auxiliary Routes
- Syntax

```html
<router-outlet name="sidebar"></router-outlet>
```

- We can have nultiple outlets in the same template

```html
<router-outlet></router-outlet>

<router-outlet name="sidebar"></router-outlet>
```

- the unnamed outlet is the primary outlet
- except the primary outlet all the other have a name

### Observable , Subscribe

- Observable belongs to RxJS library.
- To perform asynchronous programming in Angular application we can use either Observable or Promise.
- When we send and receive data over HTTP, we need to deal it asynchronously because fetching data over HTTP may take time.
- Observable is subscribed by using async pipe or by using subscribe method.
  <!-- - Observable is a class of RxJS library. RxJS is ReactiveX library for JavaScript that performs reactive programming. Observable represents any set of values over any amount of time. Observable plays most basic role in reactive programming with RxJS. -->

### Angular in memory API

```cmd
npm install angular-in-memory-web-api
```

#### Make a in memory API

- step 1: make a file `testStdData.ts` with the following code

```ts
import { InMemoryDbService } from "angular-in-memory-web-api";

export class TestStdData implements InMemoryDbService {
  createDb() {
    let stdData = [
      {
        id: 1,
        name: "Mradul",
        course: "HTML",
      },
      {
        id: 2,
        name: "Piyush",
        course: "CSS",
      },
      {
        id: 3,
        name: "Rajneesh",
        course: "JS",
      },
    ];

    return { std: stdData };
  }
}
```

```ts
// std.service.ts
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class StdService {
  stdUrl = "/api/std";
  constructor(private http: HttpClient) {}

  getStdFromStorage() {
    return this.http.get(this.stdUrl);
  }
}
```

- Step 3: import the modules used to the `app.module.ts`

```ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { StdService } from "./std.service";

import { HttpClientModule } from "@angular/common/http";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { TestStdData } from "./testStdData";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(TestStdData),
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [StdService],
})
export class AppModule {}
```

- Step 4: now use the service to call the API from the `app.compoent.ts`

```ts
import { Component } from "@angular/core";
import { StdService } from "./std.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  name = "Std App";

  stdList;
  constructor(private stdservice: StdService) {}
  ngOnInit() {
    this.getStdList();
  }

  getStdList() {
    this.stdservice.getStdFromStorage().subscribe((std) => {
      this.stdList = std;
    });
  }
}
```

```html
<!-- app.component.html -->
<ul>
  <li *ngFor="let i of stdList">{{i.id}} | {{i.name}} | {{i.course}}</li>
</ul>
```

#### Make the API Call using the Async Pipe

<!-- Observable + Async Pipe + ngFor -->

```ts
// app.component.ts
export class AppComponent {
  //   ...
  stdList2;

  getStdList() {
    //   ....
    this.stdList2 = this.stdservice.getStdFromStorage();
  }
}
```

```html
<!-- app.componet.html -->
<ul>
  <li *ngFor="let i of stdList2 | async">
    {{i.id}} | {{i.name}} | {{i.course}}
  </li>
</ul>
```

#### Getting the Data with the id

```ts
// std.service.ts
getOneStdFromStorage(id) {
  return this.http.get(this.stdUrl + "/" + id);
}
```

```ts
// app.component.ts
export class AppComponent {
  std1;
  constructor(private stdservice: StdService) {}

  getOneStd() {
    this.std1 = this.stdservice.getOneStdFromStorage(1);
  }
}
```

- Step 3: Update the `app.component.html` with the following code this code will load a image until the data is not retrived

```html
<div>
  <h2>API Call to get std id = 1</h2>
  <div *ngIf="std1 | async as i;else loading">
    <p>{{i.id}} | {{i.name}} | {{i.course}}</p>
  </div>
  <ng-template #loading>
    <img
      src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
      alt="Loading..."
    />
  </ng-template>
</div>
```

NOTE:

- We can use subscribe OR async pipe map is to transform the data

#### Obsrvable Methods(RxJS)

- `map()`

Transform on evalue to another. It takes a given value from the observable stream and applies the provided transforming function to it.

- map() usage with async

- Step 1: Add the following code in app.component.js

```ts
import "rxjs/add/operator/map";
// ...
export class AppComponent {
  //   ...
  std1map;
  constructor(private stdservice: StdService) {}
  ngOnInit() {
    // ...
    this.getOneStdUsingMap();
  }

  // ...
  getOneStdUsingMap() {
    this.std1map = this.stdservice
      .getOneStdFromStorage(1)
      .map((result) => result.name);
  }
}
```

- Step 2: Add the following code to the app.component.html

```html
<div>
  <h2>Api call and MAP</h2>
  <div>
    <p *ngIf="std1map | async as std">{{std}}</p>
  </div>
</div>
```

- `map()` usage with the subscribe

- Step 1: Add the following code in app.component.js

```ts
import "rxjs/add/operator/map";
// ...
export class AppComponent {
  //   ...
  std1map;
  constructor(private stdservice: StdService) {}
  ngOnInit() {
    // ...
    this.getOneStdUsingMap();
  }

  // ...
  getOneStdUsingMap() {
    this.std1map = this.stdservice
      .getOneStdFromStorage(1)
      .map((result) => result.name);
  }
}
```

- Step 2: Add the following code to the app.component.html

```html
<div>
  <h2>Api call and MAP</h2>
  <div>
    <p *ngIf="std1map | async as std">{{std}}</p>
  </div>
</div>
```

### Angular Multiple Projects

- [Multiple Projects(Apps)-Angular Docs](https://angular.io/guide/file-structure#multiple-projects)
- [Multiple Projects-Tektutorialshub](https://www.tektutorialshub.com/angular/angular-multiple-apps-in-one-project/)

## NgModules

### Module Loading

- Eager loading - in it all modules and functions are loaded on application startup. The root module is always eagerly loaded
- Lazy loading - is loading modules on demand.
- Preloading - is loading modules in background just after application starts.

### Lazy Loading Example

```ts
const routes: Routes = [
  {
    path: "orders",
    loadChildren: () =>
      import("./orders/orders.module").then((m) => m.OrdersModule),
  },
];
```

## Generating Mock Data using Facker

- Using this file we ccan generate the data

```ts
// npm i facker
import * as faker from "faker/locale/en_US";

const oneHost = () => {
  return {
    id: faker.random.uuid(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    email: faker.internet.email(),
    courses: faker.lorem.words().split(" "),
    address: {
      city: faker.address.city(),
      country: faker.address.country(),
      state: faker.address.state(),
    },
  };
};

const manyHosts = (count = faker.random.numer(100)) => {
  const res = [];
  for (let i = 0; i < count; i++) {
    res.push(oneHost());
  }
  return res;
};

export { manyHosts };
```

## Angular App Architecture

### First

- for single app, single module, for small application

```cmd
- app
    - component1
    - component2
    - component3
    - component4
```

### Second

- FOr single App, Multiple module, for middle level applications

```cmd
- app
    - Module1
        - component1
        - component2
    - Module2
        - component1
        - component2
    - SharedModule
        - component1
        - component2
```

### Third

- For single app, Single modules, for middle level Applications

```cmd
- app
    - Components
        - component1
        - component2
        - component3
        - component4
    - Guards
        - auth
            - auth.guard
        - Guard1
    - Constans - contain the mock data, constant data
    - Models
    - Pages - contain the main pages of the app
        - dashboard(component1)
        - feedbacks(component2)
        - login(component3)
    - pipes
    - services
```

### Forth

- For single app, Multiple Module, for big projects

```cmd
- app
    - (user)Module1
        - component1
        - component2
    - (admin)Module2
        - component1
        - component2
    - (landing)Module3
        - component1
        - component2
    - shared Module
        - component1
        - component2
    - Models - contain the interfaces
        - admin
        - landing
    - Services
        - admin
        - user
        - landing
```

### Fifth

- for multiple apps, multiple modules, for very big projects

```cmd
- projects
    - app1(admin)
        - Module1
            - component1
            - component2
        - Module 2
            - component1
            - component2
        - Services
        - Shared
        - Pipes
        - etc. Modules
    - app2(user)
        - Similar to app1
    - app3(landing)
        - Similar to app1
```

## Angular Material

### Overview

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

### Hello World

- I - Add angular material to the Project `ng add @angular/material`
- II - Add the required module to the _app.module.ts_ Like: **MatButtonModule**
- III - Now we can use the Directive provided, _mat-button_

### Typography Classes

```css
.mat-display-{1-4}
.mat-headline
.mat-title
.mat-subheading-{1-2}
.mat-body-{1-2}
.mat-caption
.mat-typography
```

### Creating a separate module for Material Elements Imports

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

### Buttons and Indicators

- color ==> primary, accent, warm

#### Button

- Module _MatButtonModule_
- Directives
  - mat-button
  - mat-{raised,flat,stroked}-button
  - mat-fab
  - mat-mini-fab
  - mat-icon-button
  - disableRipple

### Material Theme

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

## Typescript

- It is a strongly typed, object oriented, compiled language
- It is a superset of the JavaScript
- i.e. Any valid JavaScript code is valid in TypeScript.
- Has more Features than JavaScript
- It is transpile to the JavaScript
- variables declarations
- variables Types
  - boolean, number, string, undefined , null, any, unknown

> NOTE: type checking in editor and intelligence

### Installation

```cmd
npm i -g typescript
tsc -v
```

### Running

```js
tsc hello.ts // Create a hello.js file
tsc hello --watch // watch for the changes in the hello.ts file and recomile to hello.js if the changes occur
```

### Examples

- null and undefined can be assigned to any of the type

```ts
let a: boolean = null;
```

- Array Declaration

```ts
let a: number[] = [1, 2, 3, 4];
let a: Array<number> = [1, 2, 3, 4];
let a: [number, string] = [12, "1"];
```

- Enum Declaration

```ts
enum a {
  Apple,
  Microsoft,
}
console.log(a.Apple); // 0
enum a {
  Apple = 5,
  Microsoft,
}

console.log(a.Apple); // 5
```

#### Type Declarations

```ts
// any, number, string, boolean
// Multiple type declaration
let a: number | boolean;
a = true;
a = 12;
```

#### Function Declaration

```ts
function add(n1: number, n2: number): number {
  return n1 + n2;
}
add(12, 1);

// optional parameter
function sub(n1: number, n2?: number): number {
  return n1 - n2;
}
sub(12, 12);

// default parameter
function mul(n1: number, n2: number = 1): number {
  return n1 * n2;
}
mul(12, 12);
```

#### Interfaces

```ts
interface Student {
  name: string;
  course?: string; // Optional Parameter
}

function Detail(std: Student) {
  console.log(std);
}

Detail({ name: "Ram" });
```

### Class and Access Modifers

```ts
class Employee {
  name: string;

  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, ${this.name}`);
  }
}

let e1 = new Employee("Ram");
e1.sayHello();

console.log(e1.name); // because name is public
// Inheritance

class Manager extends Employee {
  constructor(name) {
    super(name);
  }
}

// Access modifers
// - public - accessable inside and outside of the class
// - private - only inside the class
// - protected - only accessable inside the class and the child class
```

## Creating New Project and coping Old Project

```sh
node_modules files
ng new AngularCLITemplate

ng new --skip-install true NewProjectName

cd NewProjectName && npm install
```

## Loading External JS

```ts
export class AppComponent {
  title = "hello";
  loadAPI: Promise<any>;

  constructor() {
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });
  }

  public loadScript() {
    var isFound = false;
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; ++i) {
      if (
        scripts[i].getAttribute("src") != null &&
        scripts[i].getAttribute("src").includes("loader")
      ) {
        isFound = true;
      }
    }

    if (!isFound) {
      var dynamicScripts = ["https://newjstest.netlify.com/newjstest.js"];

      for (var i = 0; i < dynamicScripts.length; i++) {
        let node = document.createElement("script");
        node.src = dynamicScripts[i];
        node.type = "text/javascript";
        node.async = false;
        node.charset = "utf-8";
        document.getElementsByTagName("head")[0].appendChild(node);
      }
    }
  }
}
```
