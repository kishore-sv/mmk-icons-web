import Footer from "@/components/Footer";
import { Link } from "next-view-transitions";
import { ReactNode } from "react";
import { normalIcons } from "@/utils/normalcons"
import { Metadata } from "next";
import QuickCopy from "@/components/QuickCopy";

export const metadata: Metadata = {
    title: "Icon Library",
    description: "Browse the complete set of 70+ premium vector icons. Search and find the perfect icons for your React or Next.js app.",
};

function Icon({ icon, name, iconName }: { icon?: ReactNode; name: string; iconName: string }) {
    return (
        <div className="group relative w-[45%] md:w-[22%] lg:w-1/6">
            <Link
                href={`/icons/${name}`}
                className="flex cursor-pointer w-full flex-col gap-2 justify-center rounded-xl items-center dark:bg-neutral-800/50 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-all border border-transparent hover:border-neutral-500/10 hover:shadow-xl dark:hover:shadow-neutral-900/50 bg-neutral-100  p-4"
            >
                <div className="w-12 h-12 flex items-center justify-center text-neutral-800 dark:text-neutral-100 group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>
                <p className="font-semibold text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors truncate w-full text-center px-2">
                    {iconName}
                </p>
            </Link>
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <QuickCopy text={iconName} className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur shadow-sm border border-neutral-500/20" />
            </div>
        </div>
    )
}

export default function Icons() {
    return (
        <div className="lg:w-[90%] w-full max-w-7xl mx-auto" >
            <div className="mb-10 space-y-2">
                <h1 className="text-4xl font-bold tracking-tight" >Icon Library</h1>
                <p className="text-lg text-neutral-500 dark:text-neutral-400">
                    A curated collection of modern, themed and colorful icons for your next project.
                </p>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-neutral-500/30 via-neutral-500/10 to-transparent mb-12" />

            <div className="w-full flex gap-6 flex-wrap justify-start">
                {normalIcons.map((icon) => (
                    <Icon key={icon.iconName} icon={icon.icon} name={icon.name} iconName={icon.iconName} />
                ))}
            </div>

            <div className="mt-20">
                <Footer next={"/docs"} nextName={"Docs"} prev="/usage" prevName="Usage" />
            </div>
        </div>
    )
}