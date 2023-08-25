import React from "react"
import "./ChatInput.css"

export type PropType = {
  send: any
}

const ChatInput:React.FC<PropType> = ({ send }: PropType) => {
  return (
    <div className="ChatInput">
      <input onKeyDown={send} />
    </div>
  )
}

export default ChatInput
