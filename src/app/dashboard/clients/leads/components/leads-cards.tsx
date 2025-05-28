import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, DollarSign, TrendingUp, Users } from "lucide-react";
import { Leads } from "@/generated/prisma";
import { formatCurrency } from "@/app/utils/leadsUtils";

interface LeadStatsProps {
    leads: Leads[]
  }
  
export default function LeadsCards({ leads }: LeadStatsProps){
    const totalLeads = leads.length
    const totalValue = leads.reduce((sum, lead) => sum + lead.value, 0)
    const wonLeads = leads.filter((lead) => lead.status === "won")
    const wonValue = wonLeads.reduce((sum, lead) => sum + lead.value, 0)
    const conversionRate = totalLeads > 0 ? (wonLeads.length / totalLeads) * 100 : 0

    return(
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg">Total de Leads</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
            <div className="text-2xl font-bold">{totalLeads}</div>
            <p className="text-xs text-muted-foreground">Leads em Todos os Estágios</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg">Valor Total</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalValue)}</div>
            <p className="text-xs text-muted-foreground">Valor Potencial de Todos os Leads</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg">Taxa de Conversão</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
            <div className="text-2xl font-bold">{conversionRate.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground">Leads Ganhos / Total de Leads</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg">Valor Ganho</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(wonValue)}</div>
            <p className="text-sm text-muted-foreground">Valor Total de Leads Convertidos</p>
            </CardContent>
        </Card>
        </div>
    )
}