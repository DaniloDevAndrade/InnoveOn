import { Leads } from "@/generated/prisma";

interface LeadStatsProps {
    leads: Leads[]
  }

export default function LeadsStatus({ leads }: LeadStatsProps) {

    const statusCounts = {
        new: leads.filter((lead) => lead.status === "new").length,
        contacted: leads.filter((lead) => lead.status === "contacted").length,
        qualified: leads.filter((lead) => lead.status === "qualified").length,
        proposal: leads.filter((lead) => lead.status === "proposal").length,
        negotiation: leads.filter((lead) => lead.status === "negotiation").length,
        won: leads.filter((lead) => lead.status === "won").length,
        lost: leads.filter((lead) => lead.status === "lost").length,
    }

    const statusTranslations: { [key: string]: string } = {
        new: "Novo",
        contacted: "Contatado",
        qualified: "Qualificado",
        proposal: "Proposta",
        negotiation: "Negociação",
        won: "Ganho",
        lost: "Perdido"
    };

    return (
        <>
            <div className="space-y-3">
                {Object.entries(statusCounts).map(([status, count]) => (
                    <div key={status} className="space-y-1">
                        <div className="flex justify-between text-sm">
                            <span className="capitalize">{statusTranslations[status as keyof typeof statusTranslations]}</span>
                            <span>{count}</span>
                        </div>
                        <div className="w-full rounded-full h-2.5">
                            <div className="h-2.5 rounded-full bg-primary" style={{ width: `${(count / leads.length) * 100}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
