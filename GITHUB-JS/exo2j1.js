



// (variable Globale) ==> AFFECTATION
p1 = document.getElementById("monparagraph1");
//console.debug(p1); 
p2 = document.getElementById("monparagraph2");
//console.debug(p2);
monImage = document.getElementById("monimage");
//console.debug(monImage);
fond = document.getElementById("fond");
//console.debug(fond);

//   test IF
function changeFont( balise, taille, couleur){
	if(taille != null){ 
	console.log("La taille de " + balise.id + " est : " + taille);
	balise.style.fontSize=taille;	
	balise.style.color=couleur;
	}
}
// p1, p2 vont remplacer balise ==> APPEL DE LA FONCTION
changeFont(p1,"30px","blue"); // taille est définie à 30px
changeFont(p2,null,"red"); // taille est null, mais couleur est definie

