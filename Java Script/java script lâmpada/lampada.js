/**
* JS - Funções com parâmetros
* @author José de Assis
*/

/**** sem parâmetros ****/
/*
function acenderLampada(){
	//a linha abaixa troca a imagem do objeto identificado
	document.getElementById("lamp").src = "lampada_acesa.jpg";
}

function apagarLampada(){
	document.getElementById("lamp").src = "lampada_apagada.jpg";
}

function quebrarLampada(){
	document.getElementById("lamp").src = "lampada_quebrada.jpg";
}
*/
/*** com parâmetros ***/
var recebe; //variável usada para receber um parâmetro
var quebrada = false; // variável de apoio para manter a lâmpada quebrada

function estadoLampada(recebe){
	if(recebe == 1 && quebrada == false){
		document.getElementById("lamp").src = "lampada_acesa.jpg";
	} else if(recebe == 2 && quebrada == false){
		document.getElementById("lamp").src = "lampada_apagada.jpg";
	} else{
		document.getElementById("lamp").src = "lampada_quebrada.jpg";
		quebrada = true;
	}
}























