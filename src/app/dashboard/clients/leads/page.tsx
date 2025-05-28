'use server'
import DashboardLeads from "./components/leads-dashboard";

export default async function Leads(){

    return(
        <div className="m-3">
            <DashboardLeads></DashboardLeads>
        </div>
    )
}