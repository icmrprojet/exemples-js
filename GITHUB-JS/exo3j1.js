// Variables Globales
// fonctions Globales
function togreen(balise) {
	console.log("togreen");
	console.log("Il est 1000 passage du premier texte en vert");
	balise.style.color="green";
}
function toTransp(balise) {
	console.log("toTransp");
	console.log("Il est 2000 affichage de l'image en 50%");
	balise.style.opacity=0.5;
}
function changeColor(balise, color) {
	console.log("changeColor");
	console.log("Il est 3000, passage du body en jaune");
	balise.style.backgroundColor=color;
}
function changeFont(balise, taille, ligne, color) {
	console.log("changeFont");
	console.log("changement la taille et l'interlignage du texte ");
	balise.style.fontSize=taille;
	balise.style.lineHeight=ligne;
	balise.style.color=color;
}
// ==> AFFECTATION de balise
p1 = document.getElementById("monparagraph1");
p2 = document.getElementById("monparagraph2");
monImage = document.getElementById("monimage");
fond = document.getElementById("fond");


setTimeout (togreen,1000,p1);
setTimeout (toTransp,2000,monImage);
//changeColor (fond,"yellow", 0.5);//
setTimeout(changeColor,3000,fond,"yellow");

//changeFont(p2, "40px", "1.5em");//
setTimeout(changeFont,4000,p2,"40px", "1.5em");//