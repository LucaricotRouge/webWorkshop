var socket = new WebSocket('ws://10.1.224.24:81'); // Utilisation de l'IP fournie sur Arduino IDE 

var angleSlider = document.getElementById("angleSlider");
var angleDisplay = document.getElementById("angleDisplay");

// Envoi de la valeur du curseur d'angle au serveur WebSocket
angleSlider.addEventListener('input', function() {
// addEventListener est une méthode JavaScript qui permet d'écouter un événement spécifique. Écouter un événement (en anglais, "event listening") 
// en programmation, et notamment en JavaScript, consiste à surveiller certaines actions ou interactions réalisées par l'utilisateur ou par d'autres 
// parties d'un programme, puis à exécuter une fonction lorsqu'un événement spécifique se produit.
// (ici l'événement "input" mais il peut y avoir d'autres événements comme click, mouseover, keydow, load...).
// La fonction anonyme function() qui suit est appelée chaque fois que l'événement "input" est déclenché. Cela signifie que chaque fois que 
// l'utilisateur déplace le curseur, cette fonction est exécutée. Les paramètres de .addEventListener() sont donc constitué d'un événement 
// et d'une fonction anonyme qui est tout ce qui se situe à l'intérieur des {} du .addEventListener(). 

    var angle = angleSlider.value; // prend la valeur du curseur d'angle 

    angleDisplay.textContent = "Luminosité: " + angle + ""; // Met à jour l'affichage
    // angleDisplay : Référence à un élément HTML (généralement un <span> ou un <div>) qui est utilisé pour afficher la valeur actuelle du curseur 
    // d'angle.
    // textContent : Propriété de l'élément HTML qui permet de définir ou récupérer le texte à l'intérieur de cet élément. Ici, on l'utilise pour 
    // mettre à jour le texte.

    if (socket && socket.readyState === WebSocket.OPEN) { // Vérifie si la connexion est ouverte
        socket.send(angle+ "%age du slicer de luminosité"); // Envoie la valeur de l'angle à l'ESP32
    }
});
