"use client"

import * as React from "react"
import {
  Bot,
  Settings2,
  Wallet,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"

export function AppSidebar({nameUser, emailUser, ...props }: React.ComponentProps<typeof Sidebar>) {
  const data = {
    user: {
        nameUser: nameUser as string,
        emailUser: emailUser as string
    },
    navMain: [
      {
        title: "Comercial",
        url: "/dashboard/clients/all",
        icon: Bot,
        items: [
          {
            title: "Clientes",
            url: "/dashboard/clients/all",
            isActive: true,
          },
          {
            title: "Leads",
            url: "/dashboard/clients/leads",
          },
        ],
      },
      {
        title: "Financeiro",
        url: "/dashboard/finance/current-mont",
        icon: Wallet,
        items: [
          {
            title: "Painel Financeiro",
            url: "/dashboard/finance",
          },
        ],
      },
      {
        title: "Minhas Atividades",
        url: "/dashboard/finance/current-mont",
        icon: Wallet,
        items: [
          {
            title: "Relatorio",
            url: "/dashboard/relatory",
          },
          {
            title: "Tarefas",
            url: "/dashboard/tasks",
          },
          // {
          //   title: "Minhas Metricas",
          //   url: "/dashboard/finance",
          // },
        ],
      },
      {
        title: "Meu Time",
        url: "/dashboard/clientes/todos",
        icon: Bot,
        items: [
          {
            title: "Colaboradores",
            url: "/dashboard/myteam/all",
            isActive: true,
          },
          {
            title: "Tarefas",
            url: "/dashboard/tasks",
          },
          {
            title: "Registrar",
            url: "/dashboard/myteam/register",
          },
        ],
      },
    ],
  }
  return (
    <Sidebar variant="floating" collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

