


// ==> AFFECTATION
p1 = document.getElementById("monparagraph1");
p1.style.border="thick solid #000000"; 
p1.style.width="150px"; 
p1.style.lineHeight="30px";

monImage = document.getElementById("monimage");
monImage.style.opacity=.1;

p2 = document.getElementById("monparagraph2");
p2.style.width="150px"; 
p2.style.lineHeight="30px";
p2.style.border="thick outset red";

fond = document.getElementById("fond");


// ==> DECLARATION FONCTIONS
function changeFont( balise, taille, couleur){
	if(taille != null){ 
	console.log("La taille de " + balise.id + " est : " + taille);
	balise.style.fontSize=taille;	
	balise.style.color=couleur;
	}
}
function imageOn() {
monImage.style.opacity=1;
} 
function imageOff() {
monImage.style.opacity=.1;
} 

// ==> APPEL de la FONCTIONS changeFont()
p2.onmouseover = function(){
changeFont(p2,"10px","black");
}
p2.onmouseout = function(){
changeFont(p2,"15px","red");
}
// ==> APPEL FONCTIONS comme variable
p1.onmouseover = imageOn;
p1.onmouseout = imageOff;
 