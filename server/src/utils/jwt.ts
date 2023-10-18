import jsonwebtoken from "jsonwebtoken";

interface User {
  userId: string;
  email: string;
  password: string;
}

//Este token de acceso tiene una duracion de 5 minutos
export const generateToken = (user: User): string => {
  return jsonwebtoken.sign(user, process.env.JWT_SECRET || "secret", {
    expiresIn: "5m",
  });
}

export const verifyToken = (token: string) => {
  return jsonwebtoken.verify(token, process.env.JWT_SECRET || "secret")
}
