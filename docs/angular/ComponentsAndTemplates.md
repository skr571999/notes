# Components and Templates

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

## Directives

- Directives are elements which change the apperance or behaviour of the DOM elemennts.
- Types of Directives
  - Component Directive
  - Structural Directive
  - Attribute Directive

### Component Directive

- Directive with a template

<!-- ```html
<button (click)="btn1()">Click</button>
```

```ts
btn1(){
  alert('Hello WOrld')
}
``` -->

### Structural Directives

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
<ng-template #rad1Then>
  This is then part
</ng-template>
<ng-template #rad1Else>
  This is else Part
</ng-template>
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

#### Attribute Directives

- Attribute directives modify the apperance of the DOM element or component.
- Types of Attribute Directives
  - ngStyle
  - ngClass
- NgStyle

```html
<div>
  <ul>
    <li *ngFor="let todo of todos">
      <p>
        Title : {{todo.title}}
      </p>
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

### Data Binding

- Types
  - One Way
  - Two Way

#### One Way Data Binding

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

#### Two Way Data Binding

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

### Pipes

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

#### Built in Pipes

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

<!-- ### Custom Pipes

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

<!-- ### LifeCycle Hook

#### Constructor

- Since a component is a Typescript class, every component must have a constructor method. The
  constructor of the component class executes, first before the execution of any other lifecycle hook events. If we need to inject any dependencies into the component, then the constructor is the best to inject those dependencies. After executing the constructor, Angular executes its lifecycle hook methods in a specific order
- We can say that once a new component is an instantiation, Angular goes through a couple of different phases in this creation process and it will actually give us a chance to hook into these phases by implementing some methods as per your requirement
- Lifecycle Sequence
  - ngOnChange - OnInit - DoCheck - AfterContentInit - AfterContent - AfterContentChecked - AfterViewInit - AfterViewChecked - OnDestroy

#### Lifecycle of a Component

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
