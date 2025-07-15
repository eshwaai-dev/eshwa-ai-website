# Eshwa AI Website with AI Chatbot

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/prashant-korbus-projects/v0-fluid-particles-background)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=vercel)](https://nextjs.org/)

## Overview

This is the official website for Eshwa AI, featuring a modern, interactive AI chatbot that helps visitors learn about our services, solutions, and expertise in AI consulting, custom solutions, and training.

## Features

- **AI-Powered Chatbot**: Interactive assistant that answers questions about Eshwa AI's services
- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Serverless Backend**: Powered by Next.js API routes and OpenAI's GPT models
- **Context-Aware Responses**: Chatbot uses RAG (Retrieval-Augmented Generation) to provide accurate information

## Chatbot Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- OpenAI API key

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file in the root directory and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This project is set up for deployment on Vercel. Push your changes to the main branch to trigger automatic deployments.

## Customization

- Update company information in `lib/companyContext.ts`
- Modify the chat interface in `components/chatbot/Chatbot.tsx`
- Adjust the AI behavior in `app/api/chat/route.ts`

## License

MIT
