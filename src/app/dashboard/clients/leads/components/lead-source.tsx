import { Leads } from "@/generated/prisma"

interface LeadStatsProps {
    leads: Leads[]
  }

export default function LeadSource({ leads }: LeadStatsProps){

      const sources = [...new Set(leads.map((lead) => lead.source))]
      const sourceCounts = sources.map((source) => ({
        source,
        count: leads.filter((lead) => lead.source === source).length,
      }))

      sourceCounts.sort((a, b) => b.count - a.count)
    return(
        <>
             <div className="space-y-3">
              {sourceCounts.map(({ source, count }) => (
                <div key={source} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{source}</span>
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