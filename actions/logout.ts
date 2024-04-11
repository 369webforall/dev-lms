"use server"

import { signOut } from "@/auth"

export const logout = async ()=>{
// handle some server stuff before logout

await signOut();
} 



