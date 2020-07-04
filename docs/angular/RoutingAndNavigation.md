# Routing and Navigation

- Routing is mechanism used by angular for navigating between page and displaying appropriated component/page on browser.

## Routing Example

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
    component: StudentAddComponent
  },
  {
    path: "detail",
    component: StudentDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
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

## Redirecting Route

```ts
{
  path:'', redirectTo: 'path_to_redirect'
},
```

<!-- , pathMatch: 'full' -->

## Wildcard Route

- when no routing path is matched then the specified component in the wildcart route will be loaded

```ts
// ng g c pagenotfound
// app-roting.module.ts
{
  path: '**', component: PagenotfoundComponent
}
```

## Child Route

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

## Router Link Active

- the CLASS_LIST contain the classes that will be active only when this link is active

```html
<a routerLinkActive="CLASS_LIST" [routerLink]="['./detail']">
  Detail
</a>
```

## Parameterised Route

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

## Route Guard

- Route Guard are used to control wether the user can navigate the route or not.

```js
// Creating a Guard
ng g g GUARD_NAME
```

### Example 1 - canActivate

```ts
// app-routing.module.ts
import { UserauthGuard } from "./userauth.guard";

const routes: Routes = [
  // ...
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [UserauthGuard]
  }
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

## Example 2 - canDeactivate

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
