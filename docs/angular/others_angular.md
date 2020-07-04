# Others

- ng-template
- ng-container
- TODO
- app.module.ts
- Decorators

## **ng-tempalte**

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
  <p *ngIf="display else myElse">
    This is the If Block
  </p>

  <ng-template #myElse>
    <p>
      this is the else block
    </p>
  </ng-template>
</div>
```

- Using `<ng-template>` with `*ngFor`

```html
<div>
  <h2>ng-template with for</h2>
  <div>
    <h3>Normal for loop</h3>
    <p *ngFor="let i of [1,2,3,4]">
      {{i}}
    </p>
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

## **ng-container**

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

## TODO

- Angular Console
  - UI

## app.module.ts

- @NgModule({})
  - declarations - we here write Components name, Pipe name, Directives name
  - imports - in this we declare the modules name
  - providers - services
  - bootstrap - here we declare the component to be load first

---

## Decorators

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
