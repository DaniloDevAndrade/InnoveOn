'use client'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leads, LeadStatus } from "@/generated/prisma";
import { TabsContent } from "@radix-ui/react-tabs";
import LeadsCards from "./leads-cards";
import LeadsStatus from "./lead-status";
import LeadSource from "./lead-source";
import { LeadFilters } from "./leads-filter";
import { useCallback, useEffect, useState } from "react";
import { LeadTable } from "./leads-table";
import { Pagination } from "./pagination";
import { LeadFormModal } from "./lead-modal";
import { requestAllLeads, requestDeleteLead, requestCreateLead, requestUpdateLead } from "../api/requestLeads";
import { AddLeadButton } from "./lead-add-button";
import { FunilChart } from "./funil-chart";
import FunilMetrics from "./funil-metrics";

interface LeadStatsProps {
    leads: Leads[]
  }

export default function DashboardLeads({ leads: initialLeads }: LeadStatsProps){

    const [leads, setLeads] = useState<Leads[]>(initialLeads);
    const [filteredLeads, setFilteredLeads] = useState<Leads[]>(initialLeads);

    useEffect(() =>{
      console.log(leads)
    }, [])

    const funilData = [
      { status: "Leads", quantity: 1250, color: "#ef4444" },
      { status: "Contatados", quantity: 950, color: "#3b82f6" },
      { status: "Qualificados", quantity: 600, color: "#8b5cf6" },
      { status: "Propostas", quantity: 100, color: "#f97316" },
      { status: "Negociação", quantity: 50, color: "#ec4899" },
      { status: "Ganhos", quantity: 50, color: "#22c55e" },
    ]

    const refreshLeads = useCallback(async () => {
        const response = await requestAllLeads();
        setLeads(response.findLeads);
        setFilteredLeads(response.findLeads);
    }, []);

    const [activeFilter, setActiveFilter] = useState<LeadStatus | "all">("all")
    const [searchTerm, setSearchTerm] = useState("")

    const [isFormOpen, setIsFormOpen] = useState(false)
    const [currentLead, setCurrentLead] = useState<Leads | null>(null)

    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)


    const handleFilter = (status: LeadStatus | "all") => {
        setActiveFilter(status)
        if (status === "all") {
          setFilteredLeads(
            leads.filter(
              (lead) =>
                searchTerm === "" ||
                lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                lead.email.toLowerCase().includes(searchTerm.toLowerCase()),
            ),
          )
        } else {
          setFilteredLeads(
            leads.filter(
              (lead) =>
                lead.status === status &&
                (searchTerm === "" ||
                  lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  lead.email.toLowerCase().includes(searchTerm.toLowerCase())),
            ),
          )
        }
      }

      const handleSearch = (term: string) => {
        setSearchTerm(term)
        if (term === "") {
          setFilteredLeads(leads.filter((lead) => activeFilter === "all" || lead.status === activeFilter))
        } else {
          setFilteredLeads(
            leads.filter(
              (lead) =>
                (activeFilter === "all" || lead.status === activeFilter) &&
                (lead.name.toLowerCase().includes(term.toLowerCase()) ||
                  lead.email.toLowerCase().includes(term.toLowerCase())),
            ),
          )
        }
      }

      const openEditForm = (lead: Leads) => {
        setCurrentLead(lead)
        setIsFormOpen(true)
      }

      const handleDeleteLead = async (id: string) => {
        await requestDeleteLead(id)
        refreshLeads()
      }

      const handleEditLead = async(updatedLead: Leads) => {
        const res = await requestUpdateLead(updatedLead)
        refreshLeads()
        console.log(res)
        setIsFormOpen(false)
        setCurrentLead(null)
      }

      const handleAddLead = async (lead: Omit<Leads, "id" | "createdAt">) => {
        await requestCreateLead(lead)
        refreshLeads()
        setIsFormOpen(false)
      }


    return(
        <div>
            <header className="border-b mb-3">
              <div className="flex items-center justify-between h-16 px-4">
                <h1 className="text-2xl font-bold">Gerenciamento de Leads</h1>
                <AddLeadButton onClick={() => setIsFormOpen(true)} />
              </div>
            </header>
            <Tabs defaultValue="dashboard">
                <TabsList className="grid w-full max-w-md grid-cols-3 mb-3">
                    <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                    <TabsTrigger value="leads">Leads</TabsTrigger>
                    <TabsTrigger value="funil">Funil</TabsTrigger>
                </TabsList>

            <TabsContent value="dashboard">
                <LeadsCards leads={leads}></LeadsCards>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-lg shadow p-6">
                        <h3 className="text-lg font-medium mb-4">Leads por Status</h3>
                        <LeadsStatus leads={leads}></LeadsStatus>
                    </div>
                    <div className="rounded-lg shadow p-6">
                        <h3 className="text-lg font-medium mb-4">Leads por Origem</h3>
                        <LeadSource leads={leads}></LeadSource>
                    </div>
                </div>
            </TabsContent>

            <TabsContent value="leads">
                <LeadFilters
                    activeFilter={activeFilter}
                    onFilterChange={handleFilter}
                    onSearch={handleSearch}
                    searchTerm={searchTerm}
                />

                <LeadTable
                    onEdit={openEditForm}
                    onDelete={handleDeleteLead}
                    leads={filteredLeads.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
                />

                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(filteredLeads.length / pageSize)}
                    onPageChange={setCurrentPage}
                    pageSize={pageSize}
                    onPageSizeChange={(size) => {
                        setPageSize(size)
                        setCurrentPage(1)
                    }}
                    totalItems={filteredLeads.length}
                    />

            </TabsContent>

            <TabsContent value="funil">
              <FunilChart data={funilData} />
              <FunilMetrics data={funilData}></FunilMetrics>
            </TabsContent>
            </Tabs>

            {isFormOpen && (
                <LeadFormModal
                lead={currentLead}
                onClose={() => {
                    setIsFormOpen(false)
                    setCurrentLead(null)
                }}
                onSave={currentLead ? handleEditLead : handleAddLead}
                />
            )}

        </div>
    )
}