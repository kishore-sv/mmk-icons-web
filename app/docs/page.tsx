import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Comprehensive documentation for MMK Icons. Explore features, icon props, and TypeScript support details.",
};


export default function Docs(){
    return(
        <div className="w-[80%] flex flex-col gap-6" >
            <h1 className="font-bold text-3xl" >Documentation</h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
                MMK Icons is a high-quality icon library designed specifically for React and Next.js projects. 
                All icons are built with TypeScript and support easy customization through props.
            </p>

            <section className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold">Features</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>70+ Modern Web Icons</li>
                    <li>Full TypeScript Support</li>
                    <li>Supports className and style props</li>
                    <li>Customizable fill and size</li>
                    <li>Compatible with Bun, Yarn, and PNPM</li>
                </ul>
            </section>

            <section className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold">Icon Props</h2>
                <div className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg overflow-x-auto font-mono text-sm border border-neutral-500/20">
                    <pre>{`interface IconProps {
  size?: string;
  fill?: string;
  className?: string;
  style?: React.CSSProperties;
}`}</pre>
                </div>
            </section>

            <Footer  prev="/icons" prevName="Icons" />
        </div>
    )
}