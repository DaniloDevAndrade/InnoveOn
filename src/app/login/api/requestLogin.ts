'use server'

import { UsersSchemaLogin } from "@/app/schemas/UsersAuthSchema"
import { prisma } from "@/database/database"
import { Prisma } from "@/generated/prisma"
import { compareSync } from "bcrypt-ts"

type BusinessLogin = {
    name: string
    email: string
}

export async function RequestLogin(credentials: Partial<Record<'email' | 'password', unknown>>): Promise<BusinessLogin | null>{
    const {email, password} = UsersSchemaLogin.parse(credentials)

    const where: Prisma.UsersWhereInput = {}
    if(email) where.email = {contains: email, mode: 'insensitive'}

    const findUsers = await prisma.users.findFirst({where})
    if(!findUsers) return null

    const ComparePassword = compareSync(password, findUsers.password)
    if(!ComparePassword) return null

    const user = {email: findUsers.email, name: findUsers.name, role: findUsers.role}
    return user
}