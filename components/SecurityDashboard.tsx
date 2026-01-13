
import React, { useState, useEffect } from 'react';
import { 
  LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, BarChart, Bar, Cell 
} from 'recharts';
import { INITIAL_METRICS } from '../constants';
import { Metric } from '../types';

const data = [
  { time: '00:00', alerts: 45, events: 2400 },
  { time: '04:00', alerts: 30, events: 1398 },
  { time: '08:00', alerts: 90, events: 9800 },
  { time: '12:00', alerts: 148, events: 3908 },
  { time: '16:00', alerts: 85, events: 4800 },
  { time: '20:00', alerts: 110, events: 3800 },
  { time: '23:59', alerts: 50, events: 4300 },
];

const SecurityDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<Metric[]>(INITIAL_METRICS);

  // Simulation: Update metrics randomly to give a "live" feel
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => prev.map(m => {
        const change = Math.floor(Math.random() * 10) - 2;
        return { ...m, value: Math.max(0, m.value + change) };
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="dashboard" className="py-20 px-6 max-w-7xl mx-auto space-y-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-3xl font-bold border-l-4 border-emerald-500 pl-4 uppercase tracking-wider mono">
          SOC Command Center
        </h2>
        <div className="flex items-center gap-2 text-emerald-500 animate-pulse bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          <span className="text-xs font-bold uppercase tracking-widest">System Live: All Sensors Active</span>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-emerald-500/50 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">{metric.label}</span>
              <i className={`fas fa-chart-line text-emerald-500 opacity-50 group-hover:opacity-100`}></i>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold mono text-emerald-400">{metric.value.toLocaleString()}</span>
              {metric.trend === 'up' && <i className="fas fa-caret-up text-emerald-500"></i>}
              {metric.trend === 'down' && <i className="fas fa-caret-down text-rose-500"></i>}
            </div>
            <p className="text-xs text-slate-500 mt-2">{metric.subtext}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-sm font-bold text-slate-400 mb-6 uppercase tracking-widest flex items-center gap-2">
            <i className="fas fa-bolt-lightning text-yellow-500"></i> Alert Volume (24h)
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorAlerts" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="time" stroke="#64748b" fontSize={10} tickLine={false} />
                <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f1f5f9' }}
                  itemStyle={{ color: '#10b981' }}
                />
                <Area type="monotone" dataKey="alerts" stroke="#10b981" fillOpacity={1} fill="url(#colorAlerts)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-sm font-bold text-slate-400 mb-6 uppercase tracking-widest flex items-center gap-2">
            <i className="fas fa-microchip text-blue-500"></i> Log Intake Efficiency
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="time" stroke="#64748b" fontSize={10} tickLine={false} />
                <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip 
                   cursor={{fill: '#1e293b', opacity: 0.4}}
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f1f5f9' }}
                />
                <Bar dataKey="events" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityDashboard;
