"use client"

import { useState } from "react"
import { CalendarIcon, FileText, FilePlus, Search, Download, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

export default function RelatoriosPage() {
  const [date, setDate] = useState<Date>()

  // Dados de exemplo para relatórios
  const relatorios = [
    { id: 1, titulo: "Relatório Financeiro Q1", tipo: "Financeiro", data: "15/03/2024", autor: "João Silva" },
    { id: 2, titulo: "Vendas Mensais - Março", tipo: "Vendas", data: "05/04/2024", autor: "Maria Oliveira" },
    { id: 3, titulo: "Análise de Estoque", tipo: "Estoque", data: "10/04/2024", autor: "Carlos Santos" },
    { id: 4, titulo: "Relatório de Despesas", tipo: "Financeiro", data: "12/04/2024", autor: "Ana Pereira" },
    { id: 5, titulo: "Desempenho de Funcionários", tipo: "RH", data: "08/04/2024", autor: "Pedro Costa" },
  ]

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Sistema de Relatórios</h1>
      </div>

      <Tabs defaultValue="visualizar" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="visualizar" className="text-base py-3">
            <FileText className="mr-2 h-5 w-5" />
            Visualizar Relatórios
          </TabsTrigger>
          <TabsTrigger value="novo" className="text-base py-3">
            <FilePlus className="mr-2 h-5 w-5" />
            Novo Relatório
          </TabsTrigger>
        </TabsList>

        <TabsContent value="visualizar">
          <Card>
            <CardHeader>
              <CardTitle>Meus Relatórios</CardTitle>
              <CardDescription>Visualize e gerencie todos os relatórios da empresa.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Buscar relatórios..." className="pl-8" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Tipo de relatório" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos</SelectItem>
                      <SelectItem value="financeiro">Financeiro</SelectItem>
                      <SelectItem value="vendas">Vendas</SelectItem>
                      <SelectItem value="estoque">Estoque</SelectItem>
                      <SelectItem value="rh">RH</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Ordenar por" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recente">Mais recente</SelectItem>
                      <SelectItem value="antigo">Mais antigo</SelectItem>
                      <SelectItem value="alfabetico">Alfabético</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Título</TableHead>
                      <TableHead>Tipo</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Autor</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {relatorios.map((relatorio) => (
                      <TableRow key={relatorio.id}>
                        <TableCell className="font-medium">{relatorio.titulo}</TableCell>
                        <TableCell>{relatorio.tipo}</TableCell>
                        <TableCell>{relatorio.data}</TableCell>
                        <TableCell>{relatorio.autor}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="outline" size="icon">
                              <Download className="h-4 w-4" />
                              <span className="sr-only">Download</span>
                            </Button>
                            <Button variant="outline" size="icon">
                              <FileText className="h-4 w-4" />
                              <span className="sr-only">Visualizar</span>
                            </Button>
                            <Button variant="outline" size="icon">
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Excluir</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">Exibindo {relatorios.length} relatórios</div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Anterior
                </Button>
                <Button variant="outline" size="sm">
                  Próximo
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="novo">
          <Card>
            <CardHeader>
              <CardTitle>Criar Novo Relatório</CardTitle>
              <CardDescription>Preencha os campos abaixo para gerar um novo relatório.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="titulo">Título do Relatório</Label>
                <Input id="titulo" placeholder="Ex: Relatório Financeiro Mensal" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="tipo">Tipo de Relatório</Label>
                  <Select>
                    <SelectTrigger id="tipo">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="financeiro">Financeiro</SelectItem>
                      <SelectItem value="vendas">Vendas</SelectItem>
                      <SelectItem value="estoque">Estoque</SelectItem>
                      <SelectItem value="rh">RH</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Data do Relatório</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "dd/MM/yyyy", { locale: ptBR }) : "Selecione uma data"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="descricao">Descrição</Label>
                <Textarea
                  id="descricao"
                  placeholder="Descreva o conteúdo e objetivo deste relatório"
                  className="min-h-[120px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="arquivo">Anexar Arquivos</Label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="arquivo"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/40 hover:bg-muted/60"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-3 text-muted-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p className="mb-2 text-sm text-muted-foreground">
                        <span className="font-semibold">Clique para enviar</span> ou arraste e solte
                      </p>
                      <p className="text-xs text-muted-foreground">PDF, XLSX, DOCX, CSV (MAX. 10MB)</p>
                    </div>
                    <input id="arquivo" type="file" className="hidden" />
                  </label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Cancelar</Button>
              <Button>Gerar Relatório</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
