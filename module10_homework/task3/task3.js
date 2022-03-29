let websocket = new WebSocket("wss://echo-ws-service.herokuapp.com");
const btnSend = document.querySelector('.send-btn');
const btnGeo = document.querySelector('.geo-btn');
const chat = document.getElementById('chat');

websocket.onopen = function(evt) {
    sendMessage("CONNECTED!")
};

websocket.onclose = function(evt) {
    sendMessage("DISCONNECTED!")
};

websocket.onmessage = function(evt) {
    sendMessage(
        '<span style="color: blue;">RESPONSE: ' + evt.data+'</span>'
    );
};

websocket.onerror = function(evt) {
    sendMessage(
        '<span style="color: red;">ERROR: </span> ' + evt.data
    );
};

btnSend.addEventListener('click', async () => {
    const message = document.querySelector('.msg').value;
    sendMessage('SENT: ' + message);
    websocket.send('' + message);
})

function sendMessage(message) {
    let mes = document.createElement("p")
    mes.style.wordWrap = "break-word"
    mes.innerHTML = message
    chat.appendChild(mes)
}
