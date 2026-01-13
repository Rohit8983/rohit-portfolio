
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are a highly professional SOC (Security Operations Center) Analyst Assistant for Rohit Punne's portfolio.
Rohit's profile highlights:
- SOC Analyst with deep expertise in SIEM (Splunk, Wazuh, ELK).
- Strong focus on Threat Detection and Network Traffic Analysis.
- Notable projects: 
  1. "AI-Based Cyber Risk Assessment" (Streamlit)
  2. "Network Traffic Anomaly Detection" (Streamlit)
  3. "Social Media Sentiment Analysis Agent" (Replit)
  4. "GraphQL Security & Vulnerability Analyzer" (GitHub research project) - Focuses on API resilience, query complexity, and taint analysis.
- Ranked in top 1% globally on TryHackMe (200+ rooms completed).
- Background in Python, AI, and Machine Learning for security.

Your goal is to answer questions about Rohit's skills, experience, and projects. 
Maintain a "Cyber-professional" tone: sharp, analytical, and helpful. 
If someone asks about security advice, provide basic best practices while highlighting how Rohit's projects address these issues.
Keep responses concise but insightful.
`;

export async function getSecurityAssistantResponse(chatHistory: Message[]): Promise<string> {
  const contents = chatHistory.map(msg => ({
    role: msg.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: msg.content }]
  }));

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents as any,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.8,
      }
    });

    return response.text || "I'm having trouble connecting to my threat intelligence database. Please try again later.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The SOC assistant is currently offline due to technical maintenance.";
  }
}
