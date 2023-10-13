import joi from "@hapi/joi";

const userSchema = joi.object({
  username: joi.string().alphanum().min(3).max(30).required(),
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")), // 3-30 caracteres, solo numeros y letras
  email: joi.string().email(),
  age: joi.number().integer().min(0),
});

export default userSchema;
