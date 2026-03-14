import CodeEditor from "@/components/CodeEditor";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usage",
  description: "Learn how to use MMK Icons in your components. See examples of how to customize size, fill, and styles.",
};

export default function Usage() {

  const code = `import { NextjsIcon } from 'mmk-icons';

const App = () => {
  return (

    <NextjsIcon
      size="40"
      className="text-neutral-900"
      fill="white"
      style={{height:"30px"}}
    />
    
  );
};

export default App;`

  const code1 = `import { NextjsIcon } from 'mmk-icons';

const App = () => {
  return (
    <NextjsIcon />
  );
};

export default App;`




  return (
    <div className="w-[80%]" >
      <h1 className="text-3xl font-bold mb-4 " >Usage</h1>
      <p className="text-md ml-1">These icons can be used in React and NextJS also</p>
      <p className="text-md  ml-1 " >Simple usage of icons in your projects</p>
      <div className="  border-b border-neutral-500/50 mb-10 mt-10 " ></div>

      <h1 className="text-3xl font-bold mb-4 " > Quick start</h1>
      <p className="text-md ml-2 " >The quickest way to use icons in your project,copy icon name and code given below and paste in your project.</p>

      <CodeEditor
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>}
        title={"App.tsx"}
        code={code1}
      />
      {/* <CodeEditor title={"App.tsx"}  code={code1} /> */}

      <div className="  border-b border-neutral-500/50 mb-10 mt-10 " ></div>


      <h1 className="text-3xl font-bold mb-4 " >Props...</h1>
      <p className="text-md ml-2 " >You can pass custom className, fill, styles and additional props... to icons</p>

      <CodeEditor
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>}
        title={"App.tsx"} color="text-purple-500"
        code={code}
      />

      <Footer next={"/icons"} nextName={"Icons"} prev="/installation" prevName="Installtion" />
    </div>
  )
}