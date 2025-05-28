'use server'
import { requestAllLeads } from "./_api/requestLeads";
import DashboardLeads from "./components/leads-dashboard";

export default async function Leads(){

    const leads = await requestAllLeads()

    return(
        <div className="m-3">
            <DashboardLeads leads={leads.findLeads}></DashboardLeads>
        </div>
    )
}