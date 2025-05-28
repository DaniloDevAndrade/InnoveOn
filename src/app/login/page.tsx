'use server'
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import LoginForm from "./components/login-form";
import Image from "next/image";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function LoginPage(){
    const session = await auth()

    if (session) {
        redirect('/dashboard');
    }

    return (
        <div className="flex flex-col h-screen items-center justify-center">
        <Card className="w-[40%] h-auto ">
            <CardHeader className="flex justify-center">
                <Image alt="" src="/logo-white.webp" width="500" height="200" className="w-100"></Image>
            </CardHeader>
            <CardContent>
                <LoginForm />
            </CardContent>
        </Card>
        </div>
    )
}