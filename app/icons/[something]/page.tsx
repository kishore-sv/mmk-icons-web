import CodeEditor from "@/components/CodeEditor";
import Copybutton from "@/components/Copybutton";
import { data } from "@/utils/data";
import Link from "next/link";
import { Metadata } from "next";

type Props = {
  params: Promise<{
    something: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.something.toLowerCase();
  const icon = data.find((item) => item.name.toLowerCase() === slug);

  return {
    title: icon ? `${icon.iconName} - MMK Icons` : "Icon Not Found",
    description: icon ? `Usage instructions for ${icon.iconName} from MMK Icons library.` : "Icon not found in MMK Icons library.",
  };
}

export default async function IconPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.something.toLowerCase();
  const icon = data.find((item) => item.name.toLowerCase() === slug);

  if (!icon) return (
    <div className="p-10 text-xl flex flex-col gap-4">
      <p>Icon not found.</p>
      <Link href="/icons" className="text-blue-500 hover:underline">Back to all icons</Link>
    </div>
  );

  const code = `import { ${icon.iconName} } from 'mmk-icons';

const App = () => {
  return (
    <${icon.iconName} 
      size="32" 
      fill="currentColor" 
      className="text-blue-500" 
    />
  );
};

export default App;`;

  return (
    <div className="lg:w-[90%] w-full max-w-5xl mx-auto px-4 py-8">
      <Link href="/icons" className="flex items-center gap-2 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors mb-8 group">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><path d="m15 18-6-6 6-6" /></svg>
        Back to Icons
      </Link>

      <div className="flex flex-col lg:flex-row gap-12 items-start mb-12">
        <div className="w-full lg:w-64 lg:h-64 aspect-square flex items-center justify-center rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm p-8 shrink-0">
          <div className="w-24 h-24 lg:w-32 lg:h-32 text-neutral-800 dark:text-neutral-100">
            {icon.icon}
          </div>
        </div>

        <div className="flex-1 w-[80%] md:w-[70%] space-y-6">
          <div>
            <h1 className="text-4xl truncate font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-2">
              {icon.iconName}
            </h1>
            <p className="text-lg text-neutral-500 dark:text-neutral-400">
              {icon.iconName.replace(/([A-Z])/g, ' $1').trim().replace('Icon', '').trim()} Component
            </p>
          </div>

          <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 flex justify-between items-center gap-4">
            <code className="text-blue-600 dark:text-blue-400 font-mono text-sm">
              import {'{'} {icon.iconName} {'}'} from 'mmk-icons'
            </code>
            <Copybutton iconName={icon.iconName} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
              <span className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">Type</span>
              <p className="font-medium">React Component</p>
            </div>
            <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
              <span className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">Size</span>
              <p className="font-medium">Scalable Vector</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold">Usage Example</h2>
          <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800"></div>
        </div>

        <CodeEditor
          title="App.tsx"
          color="dark:text-neutral-100 text-neutral-700"
          code={code}
        />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return data.map(icon => ({
    something: icon.name.toLowerCase()
  }));
}
