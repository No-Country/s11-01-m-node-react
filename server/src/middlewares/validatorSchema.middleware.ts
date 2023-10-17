import zod from "zod";

const hasSpecialCharacter = (value: string) =>
  /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);

export const userSchema = zod.object({
  username: zod
    .string()
    .min(5, "El nombre debe contener al menos 5 caracteres")
    .max(40, "El nombre debe contener menos de 40 caracteres"),
  email: zod
    .string()
    .email()
    .refine(
      (value) => value.includes("@"),
      "El correo electrónico debe contener el carácter '@'."
    ),
  password: zod
    .string()
    .min(5)
    .max(20) //contraseña mas segura
    .refine((value) => hasSpecialCharacter(value), {
      message: "La contraseña debe contener al menos un carácter especial.",
      path: [], // la ruta del error, en este caso la raíz de la cadena
    }),
});

export const postSchema = zod.object({
  title: zod
    .string()
    .min(5, "El titulo debe contener al menos 5 caracteres")
    .max(40, "El titulo debe contener menos de 40 caracteres"),
});

export const recipeSchema = zod.object({
  title: zod
    .string()
    .min(5, "El titulo debe contener al menos 5 caracteres")
    .max(40, "El titulo debe contener menos de 40 caracteres"),
  description: zod.string().min(5).max(50),
  servings: zod.number().min(5).max(50),
  ingredients: zod.array(zod.string().min(2).max(100)), // Convertido a array
  steps: zod.array(zod.string().min(5).max(200)), // Convertido a array y aumentado el máximo
  image: zod.string().min(5).max(50),
  category: zod.string().min(5).max(50),
  readyMinutes: zod.number().min(5).max(50),
  portions: zod.number().min(5).max(50),
  tags: zod.string().min(5).max(50),
});
