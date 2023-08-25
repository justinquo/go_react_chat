import { useEffect, useState } from 'react'
import Header from './components/Header'
import ChatHistory from './components/ChatHistory'
import ChatInput from './components/ChatInput'
import { connect, sendMsg } from './api'
import './App.css'

function App() {
  const [chatHistory, setChatHistory] = useState<any>([])
  useEffect(() => {
    connect((msg: any) => {
      console.log("New Message")
      let newHistory = [...chatHistory]
      newHistory.push(msg)
      setChatHistory(newHistory)
    });
  })

  const send = (event: any) => {
    if(event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }
  
  return (
    <div className='app'>
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput send={send}></ChatInput>
    </div>
  )
}

export default App
