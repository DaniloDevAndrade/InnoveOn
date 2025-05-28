'use server'

import { SidebarProvider } from "@/components/ui/sidebar"
import SessionAuth from "./api/authSession"

export default async function Dashboard(){

    return(
        <h1>Hello Dashboard</h1>
    )
}