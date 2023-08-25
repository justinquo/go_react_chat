import React from "react"
import Message from "./Message"
import "./ChatHistory.css"

type PropType = {
  chatHistory: [
    {
      data: string
    }
  ],
}

const ChatHistory: React.FC<PropType> = (props: PropType) => {
  const { chatHistory } = props

  return (
    <div className="ChatHistory">
      <h2>Chat History</h2>
      {
        chatHistory.map((msg, index) => {
          return (
            <Message message={msg.data} />
          )
        })
      }
    </div>
  )
}

export default ChatHistory
