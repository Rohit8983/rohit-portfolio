
import React from 'react';
import { Project, Skill, SkillCategory, Metric } from './types';

export const GITHUB_URL = "https://github.com/Rohit8983";

export const PROJECTS: Project[] = [
  {
    title: "AI-Based Cyber Risk Assessment",
    description: "A real-time risk scoring platform that evaluates security events using advanced heuristics and generates automated mitigation alerts for SOC teams.",
    link: "https://secure-risk1-ai.streamlit.app/",
    tags: ["Python", "Streamlit", "Machine Learning", "Risk Analysis"],
    icon: "fa-shield-halved",
    architecture: ["Logs", "Feature Engine", "ML Model", "SIEM Alert"]
  },
  {
    title: "Network Traffic Anomaly Detection",
    description: "A high-performance machine learning pipeline designed to detect malicious patterns and anomalous network behavior using ensemble models like Isolation Forests.",
    link: "https://networkanalysis-ai.streamlit.app/",
    tags: ["Network Security", "AI", "SOC", "Intrusion Detection"],
    icon: "fa-network-wired",
    architecture: ["Packets", "Extraction", "Isolation Forest", "LSTM"]
  },
  {
    title: "Social Media Sentiment Analysis Agent",
    description: "An advanced NLP agent for real-time trend monitoring. Analyzes live social feeds to detect sentiment shifts and potential security-related public events using AI.",
    link: "https://sentiment-watcher--23951a62a3.replit.app/",
    tags: ["NLP", "AI Agent", "Trend Monitoring", "Sentiment"],
    icon: "fa-magnifying-glass-chart",
    architecture: ["Social API", "NLP Processor", "Trend Engine", "Real-time Dashboard"]
  },
  {
    title: "GraphQL Security & Vulnerability Analyzer",
    description: "A comprehensive tool that strengthens API resilience against query-layer exploits. Bridges the gap between performance and protection using Taint Analysis and Query Complexity monitoring.",
    link: "https://github.com/Rohit8983",
    tags: ["GraphQL Security", "API Vulnerability", "Taint Analysis", "OWASP"],
    icon: "fa-bug-slash",
    architecture: ["Dependency Graph", "Taint Analysis", "Query Complexity", "Threat Detection"]
  }
];

export const SKILLS: Skill[] = [
  { name: "Splunk / SIEM", category: SkillCategory.SOC, level: 90 },
  { name: "Wazuh / ELK", category: SkillCategory.SOC, level: 85 },
  { name: "MITRE ATT&CK", category: SkillCategory.SOC, level: 92 },
  { name: "Wireshark", category: SkillCategory.THREAT, level: 88 },
  { name: "TCPDump / Zeek", category: SkillCategory.THREAT, level: 80 },
  { name: "Log Correlation", category: SkillCategory.THREAT, level: 95 },
  { name: "Burp Suite", category: SkillCategory.TESTING, level: 75 },
  { name: "Metasploit", category: SkillCategory.TESTING, level: 70 },
  { name: "Python / AI", category: SkillCategory.AI, level: 85 },
  { name: "React / JS", category: SkillCategory.AI, level: 75 }
];

export const INITIAL_METRICS: Metric[] = [
  { label: "Alerts Blocked", value: 4219, subtext: "Automated IPS response", trend: 'up' },
  { label: "MTTD (Avg)", value: 42, subtext: "Seconds to detect", trend: 'down' },
  { label: "Threat Intel Feeds", value: 12, subtext: "Active API streams", trend: 'neutral' },
  { label: "Logs Ingested", value: 1.2, subtext: "Millions of events", trend: 'up' }
];
