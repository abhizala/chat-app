const socket = io()

socket.on('message', (message) => {
    console.log(message)
})

document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault()

    const message = e.target.elements.message.value

    socket.emit('sendMessage', message)
})
 document.querySelector('#send-location').addEventListener('click', () => {
     if (!navigator.geolocation) {
         return alert('Geolation is not supported by your browser')
     }

     navigator.geolocation.getCurrentPosition((postion) => {
         socket.emit('sendLocation', {
             latitude: postion.coords.latitude,
             longitude: postion.coords.longitude
         })
     })
 })