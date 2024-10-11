// Sélectionne l'élément du curseur et l'élément d'affichage
document.getElementById('angleSlider').addEventListener('input', function() {
    var angle = this.value; // Récupère la valeur actuelle du curseur
    document.getElementById('angleDisplay').innerText = 'Angle: ' + angle + '°'; // Met à jour le texte affiché
});

// document.getElementById('angleSlider'): Cette ligne recherche un élément HTML dans le document par son ID. Ici, on cherche un élément 
// qui a l'ID angleSlider, qui est censé être un élément de type input avec type="range" (un curseur).
// document fait référence à l'objet représentant la page web actuelle.
// getElementById() est une méthode qui retourne l'élément ayant l'ID spécifié.
// .addEventListener('input', function() { ... }):

// addEventListener est une méthode qui permet d'ajouter un gestionnaire d'événements à un élément. Dans ce cas, elle écoute l'événement 
// input. L'événement input se produit chaque fois que la valeur d'un élément de formulaire change, ce qui inclut les curseurs. Cela signifie que 
// chaque fois que l'utilisateur déplace le curseur, le code à l'intérieur de la fonction sera exécuté.
// function() { ... } est une fonction anonyme (ou fonction de rappel) qui sera exécutée chaque fois que l'événement input se déclenche.

// var angle = this.value;:this fait référence à l'élément qui a déclenché l'événement, c'est-à-dire le curseur (input).
// value est une propriété qui contient la valeur actuelle du curseur. Si le curseur est à 90, alors this.value sera 90.
// La valeur récupérée est stockée dans une variable nommée angle.

// document.getElementById('angleDisplay').innerText = 'Angle: ' + angle + '°';: Ici, on utilise à nouveau getElementById pour sélectionner 
// un autre élément, cette fois celui ayant l'ID angleDisplay. Cet élément est censé être un élément HTML (comme un <p>) qui affichera la 
// valeur de l'angle. innerText est une propriété qui permet de définir ou de récupérer le contenu textuel d'un élément.
// On met à jour le texte affiché à l'intérieur de l'élément avec la chaîne 'Angle: ' suivie de la valeur de angle et du symbole °. Par 
//exemple, si angle est 90, le texte affiché sera Angle: 90°.