import CodeEditor from "./CodeEditor";
import Footer from "./Footer";
import InstallTabs from "./InstallTabs";

export default function Install() {

  const code = `{
  "dependencies": {
    "mmk-icons": "^0.1.0"
  }
}`

  const code1 = `import { NextjsIcon } from 'mmk-icons';

const App = () => {
  return (
    <NextjsIcon />
  );
};

export default App;`




  return (
    <div className="w-[80%]" >
      <h1 className="text-3xl font-bold mb-4 " >Installation</h1>
      <p className="text-md  ml-1 " >Step to install mmk icons into your project.</p>
      <div className="  border-b border-neutral-500/50 mb-10 mt-10 " ></div>

      <InstallTabs />

      <div className="  border-b border-neutral-500/50 mb-10 mt-10 " ></div>


      <CodeEditor title={"package.json"} color="text-pink-700"
        code={code}
      />


      <CodeEditor
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>}
        title={"App.tsx"} color="text-purple-500"
        code={code1}
      />

      
      <Footer next={"/usage"} nextName={"Usage"} prev="/" prevName="Home" />
    </div>
  )
}