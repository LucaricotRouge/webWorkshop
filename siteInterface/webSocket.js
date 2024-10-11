
var socket = new WebSocket('ws://10.1.224.24:81'); // Utilisation de l'IP fournie sur Arduino IDE 

// on s'assure que les anciennes connexions WebSocket sont fermées proprement lorsque la page est rechargée.
// window.addEventListener('beforeunload', function() {
//     if (socket) {
//         socket.close();
//     }
// });


// Affichage de l'état de la connexion
var statusDisplay = document.getElementById("status");
socket.onopen = function() {
    statusDisplay.textContent = "Status : Connecté à l'ESP32";
    statusDisplay.style.color = "green"; // Change la couleur du texte en vert
};

socket.onclose = function() {
    statusDisplay.textContent = "Status : Déconnecté de l'ESP32";
    statusDisplay.style.color = "red"; // Change la couleur du texte en rouge
};

socket.onerror = function(error) {
    console.error("WebSocket Error: ", error);
};



