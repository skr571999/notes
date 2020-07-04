# NgModules

## Module Loading

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
