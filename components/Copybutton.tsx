"use client"

import { useState } from "react";

export default function Copybutton({ iconName }: { iconName: string }) {
    const [copied, setCopied] = useState<boolean>(false)
    const handlecopy = async () => {
        try {
            await navigator.clipboard.writeText(iconName);
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (error) {
            console.log("error:", error)
        }
    }
    return (
        <button onClick={handlecopy} className="dark:bg-neutral-800 bg-neutral-200 dark:hover:bg-neutral-700 hover:bg-neutral-300 font-semibold px-4 py-2 rounded-xl flex justify-center items-center h-10 min-w-[100px] transition-colors">
            {copied ? 'Copied' : 'Copy'}
            <div className="ml-2">
                {copied ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M20 6 9 17l-5-5" /></svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>}
            </div>
        </button>
    )
}