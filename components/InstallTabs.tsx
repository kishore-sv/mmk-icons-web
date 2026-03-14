"use client"
import { useState } from 'react';

const managers = [
  { name: 'npm', command: 'npm install mmk-icons' },
  { name: 'pnpm', command: 'pnpm add mmk-icons' },
  { name: 'yarn', command: 'yarn add mmk-icons' },
  { name: 'bun', command: 'bun add mmk-icons' },
];

export default function InstallTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(managers[activeTab].command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="w-[100%] lg:w-[90%] lg:ml-7 m-4 rounded-lg border-[0.5px] border-neutral-600 overflow-hidden bg-neutral-900">
      <div className="flex border-b border-neutral-700 bg-neutral-100 dark:bg-neutral-950 px-2 justify-between items-center">
        <div className="flex">
          {managers.map((m, i) => (
            <button
              key={m.name}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
                activeTab === i
                  ? 'border-blue-500 text-blue-500 dark:text-blue-400 bg-neutral-200 dark:bg-neutral-900'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300'
              }`}
            >
              {m.name}
            </button>
          ))}
        </div>
        <button 
          onClick={handleCopy}
          className="p-2 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
          title="Copy to clipboard"
        >
          {copied ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M20 6 9 17l-5-5" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
          )}
        </button>
      </div>
      <div className="p-6 bg-neutral-100 dark:bg-neutral-900">
        <div className="flex items-center gap-3 font-mono text-sm leading-relaxed overflow-x-auto">
          <span className="text-blue-500 dark:text-blue-400 shrink-0">$</span>
          <code className="text-neutral-800 dark:text-neutral-200">{managers[activeTab].command}</code>
        </div>
      </div>
    </div>
  );
}
