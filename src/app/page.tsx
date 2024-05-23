import React from "react";
import { LoginForm } from "@/app/components/login-form";
import Footer from "./components/footer";
import { redirect } from "next/navigation";
import { createServerClient } from '../utils/supabase/server';

export default async function Home() {

  // const supabase = createServerClient();
  // const user = await supabase.auth.getUser();

  // if (user) {
  //   redirect('/dashboard')  
  // }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginForm/>
      <Footer/>
    </main>
  )
};