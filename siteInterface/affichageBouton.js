
/*La fonction toggleDropdown(id) prend l'identifiant du menu déroulant comme argument.
Elle vérifie si le menu est actuellement visible (dropdown.style.display === "block"). Si oui, elle le masque en définissant display sur none. 
Sinon, elle l'affiche en définissant display sur block */

function toggleDropdown(id) {
    var dropdown = document.getElementById(id);
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}
