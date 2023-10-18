import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Search {
  id: number;
  search: string;
  title: string;
  description: string;
  url: string;
  userId: string;
}

// Obtener los filtros de búsqueda de la api

export const getSearch = async (search: string) => {
  const result = await prisma.search.findMany({
    where: {
      search: {
        contains: search,
      },
    },
  });
  return result;
};
