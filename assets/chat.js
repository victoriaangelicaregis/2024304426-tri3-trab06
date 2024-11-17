    const main = document.querySelector('main')
    const input = document.querySelector('input')
    const button = document.querySelector('button')

    let currentNick = null

    function addMessage(content, nick, time) {
      main.innerHTML += `
        <div class="message ${currentNick == nick ? 'owner' : ''}">
          <div class="content">${content}</div>
          <div class="nick">${nick}</div>
          <div class="time">${time}</div>
        </div>
      `	      
    }

    const ws = new WebSocket('ws://192.168.120.53:4000')

    ws.addEventListener("open", () => console.log('Conectado'))
    ws.addEventListener("close", () => console.log('Desconectado'))

    ws.addEventListener("message", (event) => {
      const data = JSON.parse(event.data)
      addMessage(data.message, data.nick, data.timestamp)
    })

    button.addEventListener('click', () => {
      const message = input.value
      if (message.startsWith("/nick ")) {
        currentNick = message.split(' ')[1]
        document.querySelector('h1').innerText = `Usuário ${currentNick}`
      }
      ws.send(message)
      input.value = ''
    })