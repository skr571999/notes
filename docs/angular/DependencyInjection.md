# Dependency Injection

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

## Services

```ts
// Create a service file
ng g service SERVICE_NAME
```

### Using Service

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
