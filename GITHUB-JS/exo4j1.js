



// (variable Globale) ==> AFFECTATION
p1 = document.getElementById("monparagraph1");
//console.debug(p1); 
p2 = document.getElementById("monparagraph2");
//console.debug(p2);
monImage = document.getElementById("monimage");
//console.debug(monImage);
fond = document.getElementById("fond");
//console.debug(fond);

function changeSizeAndOpacity (balise,taille,opacite){
	balise.style.width = taille ;
	balise.style.opacity = opacite ;
	console.log( "taille = " + taille + " et " + "opacity = " + opacite)
}

function changeOpacity( balise, valeur){
	if(valeur == "on"){ 
	console.log("1000 Etat visible :" + valeur);
	balise.style.opacity = 1;
	}else{
		if (valeur == "off"){
		console.log("2000 Etat invisible :" + valeur);
		balise.style.opacity = 0;
		}else{
		console.log("10 Etat inconnu :" + valeur);
		balise.style.opacity = "inherit";
		}	
	}
}
// ==> APPEL FONCTIONS à l'ouverture de la page
changeSizeAndOpacity(monImage,"100px",.5);
//changeOpacity(monImage,"off");
setTimeout (changeOpacity,10,monImage,"");
setTimeout (changeOpacity,1000,monImage,"on");
setTimeout (changeOpacity,2000,monImage,"off");
setTimeout (changeOpacity,3000,monImage,"on");

