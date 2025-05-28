'use server'

import { prisma } from "@/database/database"
import { Prisma } from "@/generated/prisma"

export default async function requestRole(emailUser: string) {

    const where: Prisma.UsersWhereInput = {}
    if(emailUser) where.email = {contains: emailUser, mode: 'insensitive'}
      
    const findUser = await prisma.users.findFirst({where})
    if(!findUser) return {success: false, error:{message: "Usuario não encontrada, faça login!"}}

    return {role: findUser.role}
}