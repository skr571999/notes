# Accessing Server over HTTP

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

## **get()** - to get the Data

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

## **post()**

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

## **put()**

- put() method is for performing the update operations
- Syntax:
  - put(URL, body, options)

## **delete()**

- delete() method is for performing the delete operations
- Syntax:
  - delete(URL, options)
