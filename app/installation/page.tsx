import Install from "@/components/Install";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation",
  description: "Learn how to install MMK Icons in your React or Next.js project using npm, pnpm, yarn, or bun.",
};


export default function Installation(){
    return(
   
             <Install/>
        
    )
}