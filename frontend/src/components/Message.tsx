import React, { useEffect, useState } from "react";
import "./Message.css"

export type PropType = {
  message: any
}

const Message:React.FC<PropType> = (props: PropType) => {
  const [message, setMessage] = useState<any>();

  useEffect(() => {
    let tmp = JSON.parse(props.message)
    setMessage(tmp)
  }, [props.message])

  return (
    <div className="Message">{message && message.body}</div>
  )
}

export default Message
