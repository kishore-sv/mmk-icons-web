"use client"
import { Link } from "next-view-transitions";
import { useEffect, useRef, useState } from "react";
import SearchModal from "./SearchModal";
import Logo from "./logo";

export default function Header() {
    const [dark, setDark] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [open, setOpen] = useState<boolean>(false)

    useEffect(() => {
        // Sync state with document theme set by head script
        if (document.documentElement.classList.contains('dark')) {
            setDark(true)
        }

        // Remove preload class to enable transitions
        document.body.classList.remove('preload');



        const handleKey = (e: KeyboardEvent) => {
            console.log("command+k")
            const isMac = navigator.platform.toUpperCase().includes("MAC");
            const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;
            if (cmdOrCtrl && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                setOpen(true)
                // setTimeout(() => inputRef.current?.focus(), 0);
            }

            if (e.key === 'Escape') setOpen(false);
        }
        const handleClickOutside = (e: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        };

        window.addEventListener("keydown", handleKey);
        window.addEventListener("mousedown", handleClickOutside)

        return () => {
            window.removeEventListener("keydown", handleKey);
            window.removeEventListener("mousedown", handleClickOutside);
            document.documentElement.classList.remove('dark');
        }

    }, [])



    const toggleTheme = () => {
        if (dark) {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        }
        setDark(!dark)
    }


    return (
        <>
            <header className="z-[999] h-[8vh] bg-[rgba(255,255,255,0.5)]  dark:bg-[rgba(0,0,0,.5)] backdrop-blur-sm sticky top-0 w-full border-b border-neutral-500/50 flex justify-between items-center px-2 py-3 ">
                <section className="flex justify-center items-center tracking-tighter " >
                    <Link href={"/"} className="lg:text-2xl font-bold flex items-center gap-2" >
                        <Logo className="size-14 lg:ml-5 rounded-md" />
                        Icons
                    </Link>
                </section>
                <section className="flex justify-end items-center  lg:w-[50%] gap-5 lg:pr-10 " >


                    <button onClick={() => setOpen(true)} className="lg:hidden " >
                        <svg className="text-neutral-800 dark:text-neutral-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                    </button>
                    <input
                        ref={inputRef}
                        onClick={() => setOpen(true)}
                        type="text" placeholder="Search icon name..." className="hidden lg:block px-3 py-2 w-[50%] font-medium text-neutral-900 dark:text-neutral-200 rounded-lg bg-neutral-100 text-md  dark:bg-neutral-900 outline-none " />
                    <span onClick={() => setOpen(true)} className=" hidden right-[9.8rem] absolute dark:bg-neutral-800 dark:text-neutral-300/80 bg-neutral-200 text-neutral-700 rounded-lg py-0.5 px-1  lg:flex justify-center items-center  " >
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" /></svg>
                        +K
                    </span>
                    <button
                        onClick={toggleTheme}
                        className="dark:hover:bg-neutral-800/80 hover:bg-neutral-300 dark:bg-neutral-800 bg-neutral-200 text-neutral-700 p-1 dark:text-neutral-300/80 dark:hover:text-neutral-100 hover:text-neutral-600 rounded-lg cursor-pointer ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
                    </button>
                    <Link href={"https://github.com/KishoreBunnny"}
                        target="_blank"
                        className="dark:hover:bg-neutral-800/80 hover:bg-neutral-300 dark:bg-neutral-800 bg-neutral-200 text-neutral-700 p-1 dark:text-neutral-300/80 dark:hover:text-neutral-100 hover:text-neutral-600 rounded-lg cursor-pointer ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    </Link>
                </section>


            </header>
            {!!open && <SearchModal containerRef={containerRef} open={open} setOpen={setOpen} />}
        </>
    )
}