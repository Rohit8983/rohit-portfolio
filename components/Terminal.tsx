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
    let response: string | string[] = "";

    switch (cmd) {
      case 'help':
        response =
          "Available commands: HELP, CLEAR, WHOAMI, EXPERIENCE, EDUCATION, SKILLS, CERTIFICATIONS, MITRE, PROJECTS, RESUME, CONNECT, STATUS, EXIT";
        break;

      case 'clear':
        setHistory([]);
        setInput("");
        return;

      case 'whoami':
        response =
          "Rohit Punne | SOC Analyst | Cyber Security Engineer | Top 1% TryHackMe";
        break;

      case 'experience':
        response = [
          "=== EXPERIENCE ===",
          "Cyber Security Intern | CEERAS IT Solution (Remote)",
          "Apr 2025 – Sep 2025",
          "- Penetration testing, phishing analysis, incident response",
          "- Tools: Metasploit, Burp Suite, Nmap",
          "",
          "Technical Analyst (Lead) | Veltrixis Pvt Ltd, Hyderabad",
          "Feb 2025 – Jun 2025",
          "- Led secure web app development (React, Node.js)",
          "- Enforced SSDLC & secure coding practices",
          "",
          "AI/ML Data Analyst Intern | OCTACOMM, Hyderabad",
          "May 2024 – Jun 2024",
          "- Network anomaly detection using ML",
          "- Led team of 8 on predictive threat analytics"
        ];
        break;

      case 'education':
        response = [
          "=== EDUCATION ===",
          "B.Tech CSE (Cyber Security)",
          "Institute of Aeronautical Engineering, Hyderabad",
          "Expected Graduation: May 2027",
          "GPA: 7.85 / 10.0",
          "",
          "Intermediate | Narayana Junior College",
          "Completed: June 2023 | Score: 83%",
          "",
          "SSC | Wisdom Grammar High School",
          "Completed: March 2021 | GPA: 8.7 / 10.0"
        ];
        break;

      case 'skills':
        response = [
          "=== TECHNICAL SKILLS ===",
          "SIEM & Security Tools:",
          "- Splunk, Wazuh, ELK Stack, Security Onion",
          "",
          "Threat & Network Analysis:",
          "- Wireshark, TCPDump, Zeek",
          "- MITRE ATT&CK",
          "",
          "Programming:",
          "- Python, Java, React, Node.js",
          "- PowerShell (Basic)",
          "",
          "OS & Networking:",
          "- Linux, Windows, DBMS, Computer Networks"
        ];
        break;

      case 'certifications':
        response = [
          "=== CERTIFICATIONS ===",
          "- SOC Level-1 Path (TryHackMe)",
          "- Fundamentals of Malware Analysis (TryHackMe)",
          "- Microsoft KQL Fundamentals (Microsoft Learn)",
          "- Cisco Junior Cybersecurity Analyst",
          "- Cisco Networking Basics"
        ];
        break;

      case 'mitre':
        response = [
          "=== MITRE ATT&CK COVERAGE ===",
          "Initial Access:",
          "- Phishing (T1566)",
          "",
          "Execution:",
          "- Command-Line Interface (T1059)",
          "",
          "Persistence:",
          "- Account Manipulation (T1098)",
          "",
          "Defense Evasion:",
          "- Obfuscated Files or Information (T1027)",
          "",
          "Discovery:",
          "- Network Service Discovery (T1046)",
          "",
          "Impact:",
          "- Denial of Service (T1499)",
          "",
          "Mapped across SOC labs, projects, and internships"
        ];
        break;

      case 'projects':
        response =
          "Fetching deployments... Found 4 active security projects. Redirecting to gallery...";
        setTimeout(() => {
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        }, 1000);
        break;

      case 'resume':
        response = "Opening resume.pdf ...";
        setTimeout(() => {
          document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
        }, 800);
        break;

      case 'connect':
        response = [
          "=== CONNECT ===",
          "LinkedIn: https://linkedin.com/in/rohit-punne",
          "GitHub: https://github.com/Rohit8983",
          "Email: rohitpunne292@gmail.com"
        ];
        break;

      case 'status':
        response =
          "Threat Level: GREEN | SOC Monitoring Active | No Critical Alerts";
        break;

      case 'exit':
        response = "Session terminated. Logging out rohit_analyst.";
        break;

      default:
        response = `Command not found: ${cmd}. Type 'help' for options.`;
    }

    if (Array.isArray(response)) {
      setHistory(prev => [...prev, `> ${input}`, ...response]);
    } else {
      setHistory(prev => [...prev, `> ${input}`, response]);
    }

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
        <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">
          rohit@soc-terminal ~ bash
        </span>
      </div>

      <div className="p-4 h-64 overflow-y-auto scrollbar-hide flex flex-col gap-1">
        {history.map((line, i) => (
          <div
            key={i}
            className={line.startsWith('>') ? "text-emerald-400" : "text-slate-300"}
          >
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
