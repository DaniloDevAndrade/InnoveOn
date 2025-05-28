'use server'

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import requestRole from "./requestRole";

export default async function SessionAuth() {

    const session = await auth();
        if (!session) {
            redirect('/login');
        }

        const nameUser = session.user?.name
        const emailUser = session.user?.email;

    const res = await requestRole(emailUser as string)
    
    const roleUser = res.role
  
  return {emailUser, nameUser, roleUser}
}