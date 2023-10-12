import bcrypt from "bcrypt";
import db from "../db/db.server";

interface User {
  username: string;
  email: string;
  password: string;
}


// Obtener el usuario por id
async function getUserById(id: string) {
  return db.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });
}
// Obetener el usuario por email
async function getUserByEmail(email: string) {
  return db.user.findUnique({
    where: {
      email: email,
    },
  });
}

// Crear un usuario
async function createUser(user: User): Promise<any> {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  return db.user.create({
    data: {
      username: user.username,
      email: user.email,
      password: hashedPassword,
      userId: 'some_id',
    },
  });
}

export default {
  getUserById,
  getUserByEmail,
  createUser
}
