# Chatbot Setup Guide

## Prerequisites
1. Node.js 18+ installed
2. npm or yarn package manager
3. An OpenAI API key

## Installation

1. Install the required dependencies:
   ```bash
   npm install openai langchain @langchain/openai @langchain/community
   ```

2. Create a `.env.local` file in the root of your project and add your OpenAI API key:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

3. The Chatbot component is already set up and ready to use. It will appear as a floating button in the bottom-right corner of your website.

## Usage

1. The chatbot will be available on all pages where you include the `Chatbot` component.
2. Click the chat icon in the bottom-right corner to open the chat interface.
3. Users can type their questions about Eshwa AI, and the chatbot will respond based on the provided context.

## Customization

You can customize the chatbot's appearance and behavior by modifying the `Chatbot` component in `components/chatbot/Chatbot.tsx`.

## Notes

- The current implementation uses an in-memory store for chat history, which means it will be cleared when the server restarts.
- For production use, consider implementing a proper database to store chat history.
- The chatbot uses the `gpt-3.5-turbo` model by default. You can change this in `app/api/chat/route.ts` if needed.
