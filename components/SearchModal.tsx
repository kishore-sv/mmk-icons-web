"use client"
import { MongoDbIcon, NextjsIcon, ReactIcon, TailwindIcon } from "mmk-icons";
import { Link } from "next-view-transitions";
import { ReactNode, RefObject, useEffect, useRef, useState } from "react";
import { normalIcons } from "@/utils/normalcons";
import QuickCopy from "./QuickCopy";

type filteredType = {
    name: string;
    icon: ReactNode;
    iconName: string;
}[]

const defaultresults = [
    { name: "reacticon", icon: <ReactIcon size={24} />, iconName: "ReactIcon" },
    { name: "nextjsicon", icon: <NextjsIcon size={24} />, iconName: "NextjsIcon" },
    { name: "tailwindicon", icon: <TailwindIcon size={24} />, iconName: "TailwindIcon" },
    { name: "mongodbicon", icon: <MongoDbIcon size={24} />, iconName: "MongoDbIcon" }
]

export default function SearchModal({ open, containerRef, setOpen }: {
    open: boolean;
    containerRef?: RefObject<HTMLDivElement | null>;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [input, setInput] = useState("");
    const [results, setResults] = useState<filteredType>([]);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (open) {
            document.body.classList.add('overflow-hidden');
            inputRef.current?.focus();
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        if (input.trim() === "") {
            setResults([]);
        } else {
            const filtered = normalIcons.map(item => ({
                ...item,
                // Ensure icon in search result has a consistent small size
                icon: <div className="w-6 h-6">{item.icon}</div>
            })).filter(icon => 
                icon.name.toLowerCase().includes(input.toLowerCase()) || 
                icon.iconName.toLowerCase().includes(input.toLowerCase())
            );
            setResults(filtered)
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [open, inputRef, input]);

    return (
        <>
            {!!open && <div className="fixed inset-0 z-[9999] bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-[2px] flex items-start justify-center pt-20">
                <div ref={containerRef} className="w-[90%] lg:w-[45%] border border-neutral-500/30 max-h-[35rem] overflow-hidden bg-neutral-100 dark:bg-neutral-950 rounded-2xl shadow-2xl flex flex-col">
                    <form role="search" aria-label="Site search" className="border-b border-neutral-500/20 bg-neutral-100 dark:bg-neutral-950 p-2">
                        <div className="flex items-center gap-3 px-4 py-2 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-500/10 focus-within:border-blue-500/50 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                            <input
                                ref={inputRef}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                type="search"
                                name="q"
                                placeholder="Search icons (e.g. React, Nextjs)..."
                                className="w-full font-medium text-neutral-900 dark:text-neutral-200 bg-transparent text-sm outline-none placeholder:text-neutral-500" />
                        </div>
                    </form>
                    
                    <div className="flex-1 overflow-y-auto p-3 space-y-1">
                        {input.trim() === "" && !results.length && (
                            <p className="px-3 py-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Recommended Icons</p>
                        )}
                        
                        {(input.trim() !== "" && results.length === 0) ? (
                            <div className="py-10 text-center space-y-2">
                                <p className="text-neutral-500 font-medium">No icons found for "{input}"</p>
                                <p className="text-xs text-neutral-400">Try searching for generic names like "react" or "social"</p>
                            </div>
                        ) : (
                            (results.length > 0 ? results : defaultresults).map((icon) => (
                                <div key={icon.name} className="group relative flex items-center justify-between hover:bg-neutral-200 dark:hover:bg-neutral-900 rounded-xl px-4 py-3 transition-all">
                                    <Link 
                                        onClick={() => setOpen(false)} 
                                        href={`/icons/${icon.name}`} 
                                        className="flex-1 flex gap-4 items-center cursor-pointer font-medium text-neutral-700 dark:text-neutral-200"
                                    > 
                                        <div className="p-2 bg-white dark:bg-neutral-800 rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                                            {icon.icon} 
                                        </div>
                                        {icon.iconName} 
                                    </Link>
                                    <QuickCopy text={icon.iconName} className="opacity-0 group-hover:opacity-100" />
                                </div>
                            ))
                        )}
                    </div>
                    
                    <div className="p-3 border-t border-neutral-500/10 bg-neutral-50 dark:bg-neutral-900/50 flex justify-between items-center text-[10px] text-neutral-500 font-medium">
                        <div className="flex gap-4">
                            <span className="flex items-center gap-1"><kbd className="bg-neutral-200 dark:bg-neutral-800 px-1 rounded">ESC</kbd> to close</span>
                            <span className="flex items-center gap-1"><kbd className="bg-neutral-200 dark:bg-neutral-800 px-1 rounded">↵</kbd> to select</span>
                        </div>
                        <span>{results.length || defaultresults.length} total icons</span>
                    </div>
                </div>
            </div>}
        </>
    )
}