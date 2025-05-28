'use server'

import { prisma } from "@/database/database";
import { Prisma } from "@/generated/prisma";

export async function requestAllLeads() {
  const findLeads = await prisma.leads.findMany()
  return {findLeads}
}

export async function requestDeleteLead(id: string) {
  try {
    const lead = await prisma.leads.findUnique({ where: { id } });
    if (!lead) return { success: false, message: 'Lead não encontrado!' };

    const deleted = await prisma.leads.delete({ where: { id } });
    return { success: true, deleted };

  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Erro desconhecido"
    };
  }
}

export async function requestCreateLead(lead: Prisma.LeadsCreateInput) {
  try {
    const existingLead = await prisma.leads.findUnique({
      where: { email: lead.email }
    });

    if (!existingLead) {
      const created = await prisma.leads.create({ data: lead });
      return { success: true, created };
    }

    const isDifferent = Object.entries(lead).some(([key, value]) => {
      return existingLead[key as keyof typeof lead] !== value;
    });

    if (isDifferent) {
      const updated = await prisma.leads.update({
        where: { email: lead.email },
        data: lead
      });

      return {
        success: true,
        updated,
        message: 'Lead já existia mas foi atualizado com sucesso.'
      };
    }

    return { success: false, message: 'Lead já está no banco de dados.' };

  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Erro desconhecido"
    };
  }
}

export async function requestUpdateLead(lead: Prisma.LeadsUpdateInput & { email: string }) {
  try {
    const existingLead = await prisma.leads.findUnique({
      where: { email: lead.email }
    });

    if (!existingLead) return { success: false, message: 'Lead não encontrado no banco de dados!' };

    const updated = await prisma.leads.update({
      where: { email: lead.email },
      data: lead
    });

    return { success: true, updated };

  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Erro desconhecido"
    };
  }
}
