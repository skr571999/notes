# Angular Others

## Web Storage API

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

## Auxiliary Routes

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

## Observable , Subscribe

- Observable belongs to RxJS library.
- To perform asynchronous programming in Angular application we can use either Observable or Promise.
- When we send and receive data over HTTP, we need to deal it asynchronously because fetching data over HTTP may take time.
- Observable is subscribed by using async pipe or by using subscribe method.
  <!-- - Observable is a class of RxJS library. RxJS is ReactiveX library for JavaScript that performs reactive programming. Observable represents any set of values over any amount of time. Observable plays most basic role in reactive programming with RxJS. -->

## Angular in memory API

```cmd
npm install angular-in-memory-web-api
```

### Make a in memory API

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
  <li *ngFor="let i of stdList">
    {{i.id}} | {{i.name}} | {{i.course}}
  </li>
</ul>
```

### Make the API Call using the Async Pipe

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

### Getting the Data with the id

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
    <p>
      {{i.id}} | {{i.name}} | {{i.course}}
    </p>
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

### Obsrvable Methods(RxJS)

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
    <p *ngIf="std1map | async as std">
      {{std}}
    </p>
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
    <p *ngIf="std1map | async as std">
      {{std}}
    </p>
  </div>
</div>
```

## Angular Multiple Projects

- [Multiple Projects(Apps)-Angular Docs](https://angular.io/guide/file-structure#multiple-projects)
- [Multiple Projects-Tektutorialshub](https://www.tektutorialshub.com/angular/angular-multiple-apps-in-one-project/)
