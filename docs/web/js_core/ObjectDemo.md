# Object Demos

```js
// object literal
{
  let std = {
    name: "Piyush",
    rollno: 1001,
    desc: function() {
      //console.log(`Piyush ${name} Rollno: ${this.rollno} `);
      console.log(`${this.name} Rollno: ${this.rollno} `);
    }
  };
  std.desc();
}

// Factory Function
{
  function student(name, rollno) {
    return {
      name: name,
      rollno: rollno,
      desc: function() {
        console.log(`${name} Rollno: ${this.rollno} `);
      }
    };
  }

  let std1 = student("Mradul", 1002);
  let std2 = student("Rajneesh", 1002);

  std1.desc();
  std2.desc();
  std1.desc();
}

// Constructor Function
{
  function Student(name, rollno) {
    console.log(this);
    this.name = name;
    this.rollno = rollno;
    this.desc = function() {
      console.log(`${this.name} Rollno: ${this.rollno} `);
    };
  }

  let std1 = new Student("Manoj", 1003); // here this refer to the Student and the function returns the this ie the address of the object
  std1.desc();

  let std2 = Student("Chetan", 1004); // here this refer to the Window
  std1.desc();

  console.log(name); // Chetan  because we make the object without the use of the new
  // objects constructors, String(), Boolean(), Number()

  // {} is similar to new Object()

  // all objects have the property constructor
  let a = 12;
  console.log(a.constructor); // ƒ Number() { [native code] }
}
// we also have the Function() constructor that make the object of the function
{
  function hello() {
    console.log("Hello");
  }

  console.log(hello.constructor); // ƒ Function() { [native code] }

  function Student(name, rollno) {
    this.name = name;
    this.rollno = rollno;
    this.desc = function() {
      console.log(`${this.name} Rollno: ${this.rollno} `);
    };
  }

  // TODO: how to pass two arguments
  let c1 = new Function(
    "name",
    `this.name = name;
           this.desc = function(){
             console.log(${this.name});
          }`
  );

  let c2 = new c1("Mradul");
  console.log(c2);
}

// how the function call the object
{
  function Student(name, rollno) {
    this.name = name;
    this.rollno = rollno;
    this.desc = function() {
      console.log(`${this.name} Rollno: ${this.rollno} `);
    };
  }

  let bb = Student.call({}, "BBB", 222); // this is similar to Student("BBB", 222)
  let cc = Student.apply({}, ["CCC", 333]); // this is similar to new Student("CCC", 333)
  console.log(bb); // undefined why?
  console.log(cc); // undefined why?
}

{
  let a = new Function("n", "this.n =n");
  console.log(a.constructor); // ƒ Function() { [native code] } why this not object
}

// primitive values and the Reference types
{
  let a, b;
  a = 12;
  b = a;
  console.log(a);
  console.log(b);

  a = 14; // only the value of the a is changed not of the b because it is a value not the object
  console.log(a);
  console.log(b);

  /*a = new Number(12)
        b = a

        console.log(a)
        console.log(b)

        a = new Number(14) // here we are assigning new object to the a not to the b
        console.log(a)
        console.log(b)*/

  a = { value: 10 };
  b = a;

  a.value = 13; // here for both the a and b the value will be changed

  console.log(a);
  console.log(b);
}

// adding new properties to the object and deleting the properties of the object
{
  function Student(name, rollno) {
    this.name = name;
    this.rollno = rollno;
    this.desc = function() {
      console.log(`${this.name} Rollno: ${this.rollno} `);
    };
  }
  let std = new Student("Rajneesh", 1001);
  console.log(std);

  std.course = "CSE";
  console.log(std);
  // when to use the bracket notation for accessing the properties
  const propName = "std courses";
  std[propName] = { 1: "HTML", 2: "CSS" };

  console.log(std);

  delete std[propName];

  console.log(std);

  // getting the keys of the object
  let keys = Object.keys(std);
  console.log(keys);
}

// abstraction
{
  function Student(name, rollno) {
    this.name = name;
    this.rollno = rollno;

    let courses = ["HTML", "CSS"];
    this.getCourses = function() {
      return courses;
    };

    Object.defineProperty(this, "courses", {
      get: function() {
        return courses;
      },
      set: function(newcourses) {
        courses = newcourses;
      }
    });
  }

  let std = new Student("Mradul", 1001);

  console.log(std.getCourses());
  console.log(std.courses);

  std.courses = ["Python", "Django"];
  console.log(std.courses);
}
```
