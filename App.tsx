
import React, { useState, useEffect } from 'react';
import SecurityDashboard from './components/SecurityDashboard';
import ProjectGallery from './components/ProjectGallery';
import AIAssistant from './components/AIAssistant';
import Terminal from './components/Terminal';
import { SKILLS, GITHUB_URL } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [typingText, setTypingText] = useState('');
  const fullText = "SOC-Focused Cyber Security Analyst | AI for Threat Detection | TryHackMe Global Top 1%";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypingText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-emerald-500/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-emerald-500 flex items-center justify-center rounded-lg rotate-3 group-hover:rotate-0 transition-transform shadow-lg shadow-emerald-500/20">
              <span className="text-white font-bold text-xl mono">RP</span>
            </div>
            <span className="font-bold text-lg tracking-widest hidden sm:inline uppercase">Rohit Punne<span className="text-emerald-500">.exe</span></span>
          </div>
          
          <ul className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
            {['home', 'dashboard', 'projects', 'skills', 'contact'].map((tab) => (
              <li key={tab}>
                <a 
                  href={`#${tab}`} 
                  className={`hover:text-emerald-500 transition-colors ${activeTab === tab ? 'text-emerald-500' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a 
              href={GITHUB_URL} 
              target="_blank" 
              className="text-slate-400 hover:text-emerald-500 transition-colors hidden sm:block"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <button className="bg-emerald-500/10 text-emerald-500 px-4 py-2 rounded-lg border border-emerald-500/20 text-xs font-bold uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all">
              SOC Mode
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="min-h-screen flex items-center justify-center pt-28 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-slate-950 to-slate-950 -z-10"></div>
        <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <div className="space-y-8 text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-emerald-500 text-[10px] font-bold uppercase tracking-[0.3em] animate-pulse">
              Security Intelligence Terminal
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight glitch-effect uppercase">
              ROHIT <br /><span className="text-emerald-500">PUNNE</span>
            </h1>
            <div className="h-12">
              <p className="text-slate-400 text-sm md:text-lg mono border-r-2 border-emerald-500 pr-1 animate-typing overflow-hidden whitespace-nowrap inline-block">
                {typingText}
              </p>
            </div>
            <p className="max-w-xl text-slate-400 leading-relaxed text-sm md:text-base">
              Specializing in incident response, threat hunting, and the application of AI to real-world security challenges. 
              Currently managing high-fidelity detection pipelines and neutralizing advanced persistent threats.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-4">
              <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl shadow-xl shadow-emerald-600/20 transition-all active:scale-95 uppercase tracking-widest text-xs text-center">
                View Deployment
              </a>
              <a href={GITHUB_URL} target="_blank" className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-2xl border border-slate-700 transition-all active:scale-95 uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                <i className="fab fa-github"></i> GitHub Profile
              </a>
            </div>
          </div>

          <div className="w-full max-w-xl mx-auto lg:ml-auto">
             <Terminal />
          </div>
        </div>

        {/* Floating Background Decorations */}
        <div className="absolute top-1/4 left-10 text-emerald-500/10 text-6xl rotate-12 -z-10 hidden lg:block animate-float"><i className="fas fa-shield-halved"></i></div>
        <div className="absolute bottom-1/4 right-10 text-emerald-500/10 text-6xl -rotate-12 -z-10 hidden lg:block animate-pulse"><i className="fas fa-code"></i></div>
      </header>

      {/* Main Content Sections */}
      <main>
        <SecurityDashboard />
        
        <ProjectGallery />

        {/* GitHub Contribution Placeholder/Callout */}
        <section className="py-20 bg-slate-900/10 border-y border-slate-900">
           <div className="max-w-7xl mx-auto px-6 text-center">
              <div className="flex flex-col items-center gap-6">
                <i className="fab fa-github text-6xl text-slate-700"></i>
                <h3 className="text-2xl font-bold text-white tracking-wider uppercase">Open Source Repository Feed</h3>
                <p className="text-slate-400 max-w-xl mx-auto">
                   Explore my complete catalog of security scripts, SIEM configurations, and threat research documentation directly on GitHub.
                </p>
                <a 
                  href={GITHUB_URL} 
                  target="_blank" 
                  className="px-10 py-3 bg-emerald-500 text-slate-950 font-black rounded-full uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-lg shadow-emerald-500/20"
                >
                  Visit Rohit8983 on GitHub
                </a>
              </div>
           </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold border-l-4 border-emerald-500 pl-4 uppercase tracking-wider mono mb-16">
            Arsenal & Tech Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.values(Array.from(new Set(SKILLS.map(s => s.category)))).map((cat, i) => (
              <div key={i} className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-500">{cat}</h3>
                <div className="space-y-5">
                  {SKILLS.filter(s => s.category === cat).map((skill, j) => (
                    <div key={j} className="space-y-2 group">
                      <div className="flex justify-between text-xs font-bold text-slate-400 group-hover:text-white transition-colors">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-emerald-500 transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(16,185,129,0.5)]" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTF Showcase Section */}
        <section className="py-24 bg-slate-900/20">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <div className="w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center text-emerald-500 text-3xl">
                <i className="fas fa-flag"></i>
              </div>
              <h2 className="text-4xl font-bold text-white tracking-tight leading-tight uppercase">
                TryHackMe Global <br /><span className="text-emerald-500">Top 1% Rank</span>
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Aggressive pursuit of security knowledge through over 200+ lab environments. Mastery in Network Forensics, Binary Exploitation, and Cloud Security defense.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                  <div className="text-2xl font-bold text-white mono">200+</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Rooms Pwned</div>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                  <div className="text-2xl font-bold text-white mono">Top 1%</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Global Rank</div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-square max-w-[400px] mx-auto bg-slate-900 rounded-[3rem] border-4 border-slate-800 p-8 flex flex-col justify-center items-center gap-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 to-transparent"></div>
                <div className="w-48 h-48 rounded-2xl bg-emerald-950 flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform border border-emerald-500/30">
                  <i className="fas fa-user-shield text-7xl text-emerald-500"></i>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-white mb-2 tracking-widest uppercase">Rohit Punne</h4>
                  <p className="text-emerald-500 text-xs font-bold uppercase tracking-[0.3em]">Active SOC Operator</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 rounded-[3rem] p-12 text-center space-y-8 relative overflow-hidden shadow-2xl shadow-emerald-500/5">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
             <h2 className="text-4xl font-bold text-white uppercase tracking-tight">Initiate Secure Comm</h2>
             <p className="text-slate-400">
               Looking for a SOC professional with AI expertise? Open for collaborations and threat analysis initiatives.
             </p>
             <div className="flex flex-col gap-6 items-center">
               <a href="mailto:rohitpunne292@gmail.com" className="group flex items-center gap-4 bg-slate-950 px-8 py-5 rounded-3xl border border-slate-800 hover:border-emerald-500/50 transition-all w-full max-w-md">
                 <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500">
                   <i className="fas fa-envelope"></i>
                 </div>
                 <div className="text-left">
                   <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">E-Mail Address</div>
                   <div className="text-white font-medium group-hover:text-emerald-400 transition-colors">rohitpunne292@gmail.com</div>
                 </div>
               </a>
               <a href="https://www.linkedin.com/in/rohit-punne-4a15172a0/" target="_blank" className="group flex items-center gap-4 bg-slate-950 px-8 py-5 rounded-3xl border border-slate-800 hover:border-emerald-500/50 transition-all w-full max-w-md">
                 <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500">
                   <i className="fab fa-linkedin"></i>
                 </div>
                 <div className="text-left">
                   <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">LinkedIn Profile</div>
                   <div className="text-white font-medium group-hover:text-blue-400 transition-colors">Professional Presence</div>
                 </div>
               </a>
             </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-900 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center text-white font-bold mono">RP</div>
             <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">© 2026 Secured SOC Repository</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/Rohit8983" target="_blank" className="text-slate-500 hover:text-emerald-500 transition-colors"><i className="fab fa-github text-xl"></i></a>
            <a href="https://www.linkedin.com/in/rohit-punne-4a15172a0/" target="_blank" className="text-slate-500 hover:text-emerald-500 transition-colors"><i className="fab fa-linkedin text-xl"></i></a>
            <a href="#" className="text-slate-500 hover:text-emerald-500 transition-colors"><i className="fab fa-twitter text-xl"></i></a>
          </div>
        </div>
      </footer>

      {/* AI Bot */}
      <AIAssistant />
    </div>
  );
};

export default App;
