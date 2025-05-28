'use server'

import DashboardPage from "./components/finance-dashboard"

export default async function Finance(){

    return(
        <div className="m-5">
            <DashboardPage></DashboardPage>
        </div>
    )
}