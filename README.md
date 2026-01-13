# Rohit Punne - Advanced SOC Analyst Portfolio

An interactive, AI-powered portfolio designed for a Senior SOC Analyst. This application features real-time security dashboards, a Gemini-integrated security assistant, and a terminal-based interface for a professional "cyber-command" aesthetic.

## 🚀 Deployment Instructions

### 1. Pushing to GitHub
To upload this project to your GitHub account (`Rohit8983`), follow these steps in your terminal:

```bash
# Initialize the repository
git init

# Add all files
git add .

# Create your first commit
git commit -m "feat: initial deployment of SOC Analyst Portfolio"

# Add your GitHub repository as remote (Replace URL with your actual repo link)
git remote add origin https://github.com/Rohit8983/soc-portfolio.git

# Set branch to main and push
git branch -M main
git push -u origin main
```

### 2. Live Hosting

#### Option A: GitHub Pages (Recommended for this setup)
1. Go to your repository on GitHub.
2. Navigate to **Settings** > **Pages**.
3. Under **Build and deployment**, set Source to **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder.
5. Click **Save**. Your site will be live at `https://Rohit8983.github.io/soc-portfolio/`.

#### Option B: Vercel or Netlify
1. Connect your GitHub account to [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
2. Select this repository.
3. The platform will automatically detect the `index.html` and deploy it. No build commands are necessary as this project uses native ES6 modules.

## 🛠 Features
- **SOC Command Center**: Real-time simulated metrics and data visualizations using Recharts.
- **AI Security Assistant**: Powered by Google Gemini (Flash 2.0) to answer technical queries about your projects.
- **Interactive Terminal**: A functional "hacker" style terminal for quick navigation.
- **Responsive Design**: Built with Tailwind CSS for seamless mobile and desktop experiences.

## 🔑 Environment Variables
The AI Assistant requires an API key for the Google GenAI SDK. 
- In a local environment, use a `.env` file or environment variable: `API_KEY=your_key_here`.
- On hosting platforms, add `API_KEY` to the **Environment Variables** section in the dashboard.

---
*Created by Rohit Punne - SOC Analyst & AI Researcher*
