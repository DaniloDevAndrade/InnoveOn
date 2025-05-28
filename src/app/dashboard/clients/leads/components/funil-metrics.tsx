import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@radix-ui/react-progress";

interface FunilItem {
  status: string
  quantity: number
  color: string
}

interface FunilChartProps {
  data: FunilItem[]
}

export default function FunilMetrics({ data }: FunilChartProps){

      const taxasConversao = data.slice(0, -1).map((item, index) => {
        const proximo = data[index + 1];
        const taxa = ((proximo.quantity / item.quantity) * 100).toFixed(1);
        return {
          de: item.status,
          para: proximo.status,
          taxa,
        };
      });

  const taxaTotal = ((data[data.length - 1].quantity / data[0].quantity) * 100).toFixed(1)

    return (
        <div>
            <Card>
            <CardHeader>
              <CardTitle>Taxas de Conversão Entre Estágios</CardTitle>
              <CardDescription>Análise da eficiência de conversão entre as etapas do funil</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {taxasConversao.map((taxa, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>
                        {taxa.de} → {taxa.para}
                      </span>
                      <span className="font-medium">{taxa.taxa}%</span>
                    </div>
                    <Progress value={Number.parseFloat(taxa.taxa)} className="h-2" />
                    <div className="text-xs text-muted-foreground">
                      {index === 0 ? (
                        // Leads Novos → Contatados
                        Number.parseFloat(taxa.taxa) >= 70 ? (
                          <span className="text-emerald-500">✅ Bom desempenho. Continue qualificando leads.</span>
                        ) : Number.parseFloat(taxa.taxa) >= 50 ? (
                          <span className="text-amber-500">
                            ⚠️ Oportunidade de melhoria. Aumente a agilidade no primeiro contato.
                          </span>
                        ) : (
                          <span className="text-rose-500">
                            🚨 Atenção necessária. Reveja processos de captação e primeiro contato.
                          </span>
                        )
                      ) : index === 1 ? (
                        // Contatados → Qualificados
                        Number.parseFloat(taxa.taxa) >= 60 ? (
                          <span className="text-emerald-500">✅ Bom desempenho. Leads bem direcionados.</span>
                        ) : Number.parseFloat(taxa.taxa) >= 40 ? (
                          <span className="text-amber-500">
                            ⚠️ Oportunidade de melhoria. Reavalie os critérios de qualificação.
                          </span>
                        ) : (
                          <span className="text-rose-500">
                            🚨 Atenção necessária. Treine a equipe para identificar boas oportunidades.
                          </span>
                        )
                      ) : index === 2 ? (
                        // Qualificados → Propostas
                        Number.parseFloat(taxa.taxa) >= 50 ? (
                          <span className="text-emerald-500">
                            ✅ Bom desempenho. A equipe está aproveitando as oportunidades.
                          </span>
                        ) : Number.parseFloat(taxa.taxa) >= 30 ? (
                          <span className="text-amber-500">
                            ⚠️ Oportunidade de melhoria. Trabalhe melhor o follow-up.
                          </span>
                        ) : (
                          <span className="text-rose-500">
                            🚨 Atenção necessária. Reveja como as propostas estão sendo apresentadas.
                          </span>
                        )
                      ) : index === 3 ? (
                        // Propostas → Negociação
                        Number.parseFloat(taxa.taxa) >= 60 ? (
                          <span className="text-emerald-500">
                            ✅ Bom desempenho. Suas propostas estão bem estruturadas.
                          </span>
                        ) : Number.parseFloat(taxa.taxa) >= 40 ? (
                          <span className="text-amber-500">
                            ⚠️ Oportunidade de melhoria. Reforce os diferenciais do produto/serviço.
                          </span>
                        ) : (
                          <span className="text-rose-500">
                            🚨 Atenção necessária. Faça revisões na estratégia de proposta e negociação.
                          </span>
                        )
                      ) : // Negociação → Ganhos
                      Number.parseFloat(taxa.taxa) >= 50 ? (
                        <span className="text-emerald-500">✅ Bom desempenho. Excelente técnica de fechamento.</span>
                      ) : Number.parseFloat(taxa.taxa) >= 30 ? (
                        <span className="text-amber-500">
                          ⚠️ Oportunidade de melhoria. Revise objeções comuns com a equipe.
                        </span>
                      ) : (
                        <span className="text-rose-500">
                          🚨 Atenção necessária. Treine a equipe em técnicas de fechamento.
                        </span>
                      )}
                    </div>
                  </div>
                ))}
                <div className="pt-4 border-t">
                  <div className="flex justify-between text-sm font-medium">
                    <span>Conversão Total (Leads Novos → Ganhos)</span>
                    <span>{taxaTotal}%</span>
                  </div>
                  <div className="mt-2">
                    <Progress value={Number.parseFloat(taxaTotal)} className="h-2" />
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    {Number.parseFloat(taxaTotal) >= 6 ? (
                      <span className="text-emerald-500">✅ Excelente desempenho! Acima da média do setor (3-5%).</span>
                    ) : Number.parseFloat(taxaTotal) >= 3 ? (
                      <span className="text-amber-500">⚠️ Desempenho dentro da média do setor (3-5%).</span>
                    ) : (
                      <span className="text-rose-500">
                        🚨 Desempenho abaixo da média do setor (3-5%). Revise todo o processo de vendas.
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
    )
}