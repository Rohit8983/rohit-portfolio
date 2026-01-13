
import React, { useState, useEffect, useRef } from 'react';

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<string[]>([
    "RohitOS v2.5.0 (kernel: 5.15-security-hardened)",
    "Authentication successful. User: rohit_analyst",
    "System check: OK. Network: SECURE. Firewall: ACTIVE.",
    "Type 'help' for available commands."
  ]);
  const [input, setInput] = useState("");
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.toLowerCase().trim();
    let response = "";

    switch (cmd) {
      case 'help':
        response = "Available: HELP, CLEAR, WHOAMI, PROJECTS, STATUS, EXIT";
        break;
      case 'clear':
        setHistory([]);
        setInput("");
        return;
      case 'whoami':
        response = "Rohit Punne | SOC Analyst | AI Researcher | Top 1% TryHackMe";
        break;
      case 'projects':
        response = "Fetching deployments... Found 4 active projects. Redirecting to gallery...";
        setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), 1000);
        break;
      case 'status':
        response = "Threat Level: GREEN. No active intrusions detected in local perimeter.";
        break;
      default:
        response = `Command not found: ${cmd}. Type 'help' for options.`;
    }

    setHistory(prev => [...prev, `> ${input}`, response]);
    setInput("");
  };

  return (
    <div className="bg-black/80 border border-emerald-500/30 rounded-lg overflow-hidden shadow-2xl shadow-emerald-500/10 font-mono text-xs md:text-sm">
      <div className="bg-slate-900 px-4 py-2 border-b border-emerald-500/20 flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
        </div>
        <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">rohit@soc-terminal ~ bash</span>
      </div>
      <div className="p-4 h-64 overflow-y-auto scrollbar-hide flex flex-col gap-1">
        {history.map((line, i) => (
          <div key={i} className={line.startsWith('>') ? "text-emerald-400" : "text-slate-300"}>
            {line}
          </div>
        ))}
        <div ref={terminalEndRef} />
        <form onSubmit={handleCommand} className="flex">
          <span className="text-emerald-500 mr-2">$</span>
          <input
            autoFocus
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none border-none p-0 text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
