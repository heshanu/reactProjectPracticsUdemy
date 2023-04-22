import React from 'react'
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './compoents/ChatFeed';
import './App.css';
import LoginForm from './compoents/LoginForm';

function App() {
  if (!localStorage.getItem('username')) return <LoginForm />


  return (
    <div className="App">
      <ChatEngine
        projectID={process.env.REACT_APP_PROJECT_ID}
        userName="heshan"
        userSecret="qwerty"
        height='100vh'
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  );
}

export default App;
