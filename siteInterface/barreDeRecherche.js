function barreDeRecherche(event) {
    var input = document.getElementById('searchbar');
    // Récupère les éléments entrés dans la barre de recherche avec l'id "searchbar"
    if (event.key === 'Enter') { 
        // Vérifie si la barre de recherche n'est pas vide
        if (input.value.trim() !== "") {
            input.value = ""; // Vide la barre de recherche
            input.placeholder = "Rechercher un capteur..."; // Remet le placeholder si vide
        } else {
            input.placeholder = "Rechercher un capteur..."; 
        }
    }
}