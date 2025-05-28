"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OverviewTab } from "./overview-tab"
import { TransactionsTab } from "./transactions-tab"
import { BillsTab } from "./bills-tab"
import { GoalsTab } from "./goals-tab"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 md:gap-8">
        <div className="">
          <h1 className="mb-6 text-3xl font-bold">Painel Financeiro Empresarial</h1>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="transactions">Transações</TabsTrigger>
              <TabsTrigger value="bills">Contas a Pagar</TabsTrigger>
              <TabsTrigger value="goals">Metas Financeiras</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <OverviewTab onViewAllBills={() => setActiveTab("bills")} onViewAllGoals={() => setActiveTab("goals")} />
            </TabsContent>
            <TabsContent value="transactions">
              <TransactionsTab />
            </TabsContent>
            <TabsContent value="bills">
              <BillsTab />
            </TabsContent>
            <TabsContent value="goals">
              <GoalsTab />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
