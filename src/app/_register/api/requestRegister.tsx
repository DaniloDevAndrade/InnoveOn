'use server'
import { UsersSchemaRegister } from "@/app/schemas/UsersAuthSchema"
import { prisma } from "@/database/database"
import { Prisma } from "@/generated/prisma"
import { hashSync } from 'bcrypt-ts'

type body = {
    name: string
    email: string
    password: string
    phone: string
    cpf: string
    cep: string
    street: string
    numberAddress: string
    city: string
    uf: string
    neighborhood: string
}

type returnRequest = {
    created?: boolean
    errorEmail?: boolean
    errorCPF?: boolean
    error?: {
        message: string
    }
}

export async function requestRegister(body: body): Promise<returnRequest>{
    try {
        const usersBody = UsersSchemaRegister.parse(body)
        usersBody.password = hashSync(body.password, 10)

        const whereEmail: Prisma.UsersWhereInput = {}
        if(body.email) whereEmail.email = {contains: body.email, mode: 'insensitive'}

        const whereCPF: Prisma.UsersWhereInput = {}
        if(body.cpf) whereCPF.cpf = {contains: body.cpf, mode: 'insensitive'}

        const findUsersEmail = await prisma.users.findFirst({where: whereEmail})
        if(findUsersEmail) return {errorEmail: true, error:{message: "Email já cadastrado!"}}

        const findUsersCPF = await prisma.users.findFirst({where: whereCPF})
        if(findUsersCPF) return {errorCPF: true, error:{message: "CPF já cadastrado!"}}

        const createUser = await prisma.users.create({
             data: usersBody
        })

        return {created: true}
    } catch (err) {
        return {created: false, error:{message: err as string}}
    }
}