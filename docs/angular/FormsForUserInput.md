# Forms For User Input

- Forms are used to collect the data from the user
- Types of Forms
  - Template-driven forms
  - Model-driven forms (Reactive Forms)

## Template Driven Form

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

## Template Driven forms Validation

- Example 1 - Disabled Submit Button
  - **Step 1** - Add the `required` attribute to all the input elements
  - **Step 2** - Add the following code to the submit button

```html
<button ... [disabled]="!regForm.valid">
  Register
</button>
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

## Reactive Form

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

## Reactive Form Vaildation

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
