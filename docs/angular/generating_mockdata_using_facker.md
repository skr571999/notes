# Generating Mock Data using Facker

- Using this file we ccan generate the data

```ts
// npm i facker
import * as faker from "faker/locale/en_US";

const oneHost = () => {
  return {
    id: faker.random.uuid(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    email: faker.internet.email(),
    courses: faker.lorem.words().split(" "),
    address: {
      city: faker.address.city(),
      country: faker.address.country(),
      state: faker.address.state(),
    },
  };
};

const manyHosts = (count = faker.random.numer(100)) => {
  const res = [];
  for (let i = 0; i < count; i++) {
    res.push(oneHost());
  }
  return res;
};

export { manyHosts };
```
