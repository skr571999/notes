# Angular App Architecture

## First

- for single app, single module, for small application

```cmd
- app
    - component1
    - component2
    - component3
    - component4
```

## Second

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

## Third

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

## Forth

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

## Fifth

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
