const joinRoomButton = document.getElementById('room-button')
const mesageInput = document.getElementById('message-input')
const roomInput = document.getElementById('room-input')
const form = document.getElementById('form')

form.addEventListener('submit',e=>{
    e.preventDefault()
    const message = mesageInput.value 
    const room = roomInput.value

    if(message =="") return 
    displayMessage(message)
    messageInput.value= ""
})

joinRoomButton.addEventListener("click",()=>{
    const room = roomInput.value
})

joinRoomButton.addEventListener("click",()=>{
    const div =document.createElement("div")
    div.textContent = message
    document.getElementById('message-container').append(div)
    
})