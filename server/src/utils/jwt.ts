import jsonwebtoken from "jsonwebtoken";

interface User {
  userId: string;
  email: string;
  password: string;
}

interface Token {
  userId: string;
  jwt: string;
}
//Este token de acceso tiene una duracion de 5 minutos
function generateToken(user: User): string {
  return jsonwebtoken.sign(user, process.env.JWT_SECRET || "secret", {
    expiresIn: "5m",
  });
}
/* Este token de refresco tiene una duracion de 8 horas, 
si el usuario no ha iniciado sesion en 8 horas,
se le pedira que inicie sesion nuevamente. */
function generateRefreshToken(token: Token, jwt: string): string {
  return jsonwebtoken.sign(
    {
      userId: token.userId,
      jwt,
    },
    process.env.JWT_REFRESH_SECRET!,
    {
      expiresIn: "8h",
    }
  );
}
//Generamos los tokens de acceso y refresco
function generateTokens(
  user: User,
  jwt: string
): { accessToken: string; refreshToken: string } {
  const accessToken = generateToken(user);
  const refreshToken = generateRefreshToken({ userId: user.userId, jwt }, jwt);
  return {
    accessToken,
    refreshToken,
  };
}

export { generateToken, generateRefreshToken, generateTokens };
