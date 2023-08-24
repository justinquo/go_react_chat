import React from "react"
import "./ChatHistory.css"

type PropType = {
  chatHistory: [
    {
      data: string
    }
  ]
}

const ChatHistory: React.FC<PropType> = (props: PropType) => {
  const { chatHistory } = props

  return (
    <div className="ChatHistory">
      <h2>Chat History</h2>
      {
        chatHistory.map((msg, index) => {
          return (
            <p key={index}>{msg.data}</p>
          )
        })
      }
    </div>
  )
}

export default ChatHistory
