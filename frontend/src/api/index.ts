const socket: WebSocket = new WebSocket("ws://localhost:8080/ws")

let connect = (cb: Function) => {
  console.log("Attempting connection...")

  socket.onopen = () => {
    console.log("Successfully connnected")
  }

  socket.onmessage = (msg) => {
    console.log(msg)
    cb(msg)
  }

  socket.onclose = (event: CloseEvent) => {
    console.log(`Socket connection closed: ${event}`)
  }

  socket.onerror = (error: Event) => {
    console.log(`Socket error: ${error}`)
  }
}

let sendMsg = (msg: string) => {
  console.log(`Sending message: ${msg}`)
  socket.send(msg)
}

export { connect, sendMsg }
