# 🤖 AI Chatbot — React & Groq AI

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Groq](https://img.shields.io/badge/Groq_AI-LLM_API-F55036?style=for-the-badge)](https://groq.com)
[![Responsive](https://img.shields.io/badge/Design-Responsive-10A37F?style=for-the-badge)](#)
[![License](https://img.shields.io/badge/License-MIT-lightgrey?style=for-the-badge)](#)

A fully responsive AI chatbot built from scratch, focused on learning through real projects — not tutorials.

<p>
  <a href="#-about-this-project">About</a> ·
  <a href="#-tech-stack">Tech Stack</a> ·
  <a href="#-features">Features</a> ·
  <a href="#-what-i-learned-building-this">What I Learned</a> ·
  <a href="#-output-quality">Output Quality</a> ·
  <a href="#-about-me">About Me</a>
</p>

---

## 📖 About This Project

A real-time chatbot that connects to the **Groq AI API** and lets users have conversations with a large language model directly in the browser. Everything was built independently — the UI, API integration, state management, and responsive layout — with no end-to-end tutorials.

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **React.js** | Frontend UI framework |
| **JavaScript (ES6+)** | Core logic and async handling |
| **CSS3 / Flexbox** | Styling and responsive layout |
| **Groq AI API** | LLM backend (`llama-3.1-8b-instant`) |
| **React Hooks** | State and side-effect management |

---

## ✨ Features

- Real-time AI conversation using Groq's LLM API
- Async/await for smooth, non-blocking API calls
- Fully responsive across mobile and desktop
- Live UI updates without page reloads
- New Chat button to reset conversation
- API key secured via environment variables
- Clean error handling throughout

---

## 🎯 What I Learned Building This

This project was built to learn by doing. Key takeaways:

- **React Hooks in practice** — using `useState` and `useEffect` to manage live chat state without breaking the UI
- **Async/await with real APIs** — handling delays, errors, and responses from a third-party AI API end-to-end
- **Responsive design** — using Flexbox and media queries to make layouts work across different screen sizes
- **API integration from scratch** — authentication, sending requests, parsing responses, and rendering them in the UI
- **Security basics** — keeping API keys out of source code using environment variables and `.gitignore`
- **Debugging independently** — identifying and fixing real problems without hand-holding

---

## 🧠 Output Quality

The chatbot doesn't just return raw model output — responses are shaped for readability:

- A **custom system prompt** enforces clean Markdown, sensible heading limits, and paragraph-vs-bullet rules so answers read like a well-written explanation rather than a wall of nested bullet points
- **Response length is matched to the question** — short questions get short, direct answers; "explain/describe" questions get a structured but concise write-up (summary → a few focused sections → optional closing line)
- **Markdown rendering** on the frontend turns headings, bold text, lists, and code blocks into properly styled UI elements instead of raw symbols
- **Custom CSS** for chat bubbles, code blocks, and lists keeps long answers scannable instead of a dense text block

---

## 👤 About Me

I'm **Ankit**, a beginner developer who learns by building real projects. I'm currently focused on React, JavaScript, and AI integrations — picking up skills through hands-on work rather than waiting until I "feel ready."

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Ankit_Prashar-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/ankitprashar15)

---

<p align="center"><i>Built independently by Ankit.</i></p> 