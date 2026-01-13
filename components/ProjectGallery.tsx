
import React from 'react';
import { PROJECTS } from '../constants';

const ProjectGallery: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold border-l-4 border-emerald-500 pl-4 uppercase tracking-wider mono mb-16">
          Advanced Cyber Operations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-emerald-500/50 transition-all duration-500">
              {/* Header */}
              <div className="p-8 pb-0">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500">
                    <i className={`fas ${project.icon} text-2xl`}></i>
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    <i className="fas fa-arrow-up-right-from-square text-xl"></i>
                  </a>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm h-20 overflow-hidden line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Architecture Viz */}
              <div className="p-8">
                <div className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-4">Pipeline Architecture</div>
                <div className="flex items-center gap-2 flex-wrap">
                  {project.architecture.map((step, i) => (
                    <React.Fragment key={i}>
                      <div className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-medium text-slate-300">
                        {step}
                      </div>
                      {i < project.architecture.length - 1 && (
                        <i className="fas fa-chevron-right text-[10px] text-emerald-500/40"></i>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="p-8 pt-0 flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] bg-slate-950 text-slate-400 border border-slate-800 px-2 py-1 rounded uppercase tracking-tighter">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Decorative Overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-emerald-500/20 transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
