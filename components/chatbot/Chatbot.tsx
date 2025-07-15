'use client';

import dynamic from 'next/dynamic';

// Dynamically import the ChatInterface component with SSR disabled
const ChatInterface = dynamic(() => import('./ChatInterface'), {
  ssr: false,
  loading: () => null, // Don't show anything while loading
});

// This is a wrapper component that ensures ChatInterface is only rendered on the client side
const Chatbot = () => {
  // Only render in the browser
  if (typeof window === 'undefined') {
    return null;
  }
  
  return <ChatInterface />;
};

export default Chatbot;
