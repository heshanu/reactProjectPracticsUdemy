import React from 'react'
import { ChatEngine } from 'react-chat-engine';

import ChatFeed  from './compoents/ChatFeed';

import './App.css';

function App() {
  return (
    <div className="App">
      <ChatEngine height="100vh"
        projectID="523bcdd7-70b6-49c5-ba64-157f3994e981"
        userName="heshan"
        userSecret="qwerty"
        renderChatFeed={(chatAppProps) => { <ChatFeed {...chatAppProps} /> }}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  );
}

export default App;
