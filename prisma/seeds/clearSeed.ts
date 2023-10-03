import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function clearTable() {
  try {
    await prisma.exercise.deleteMany({});
    console.log("Tabela 'exercise' limpa com sucesso.");
  } catch (error) {
    console.error("Erro ao limpar a tabela 'exercise':", error);
  } finally {
    await prisma.$disconnect();
  }
}