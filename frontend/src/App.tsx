import { useEffect, useState } from 'react'
import Header from './Header'
import ChatHistory from './ChatHistory'
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

  const send = () => {
    console.log('hello')
    sendMsg('hello')
  }
  
  return (
    <div className='app'>
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <button onClick={() => send()}>Hit</button>
    </div>
  )
}

export default App
