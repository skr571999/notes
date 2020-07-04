# Data validation

- Using Joi
  - Installtion : `npm i @hapi/joi`
  - Documentation : `https://hapi.dev/family/joi/?v=16.1.8`

```js
// server.js
const Joi = require("@hapi/joi");

let data = {
  name: "Sn",
  email: "abc@gmail.com"
};

const schema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(12)
    .required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] }
    })
    .required()
});

let { value, error } = schema.validate(data);

console.log(value);
console.log(error);
```
