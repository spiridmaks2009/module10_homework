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

btnGeo.addEventListener('click', async () => {
    const success = (position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        sendMessage(`<a href="https://www.openstreetmap.org/#map=5/${latitude}/${longitude}" target="_blank">Ссылка на карту</a>`);
    }

    const error = () => {
        let err = document.createElement("p")
        err.innerHTML = "ERROR"
        chat.appendChild(err)
    }

    if (!navigator.geolocation) {
        status.textContent = 'Geolocation не поддерживается вашим браузером';
    } else {
        status.textContent = 'Определение местоположения...';
    }

    navigator.geolocation.getCurrentPosition(success, error)
})