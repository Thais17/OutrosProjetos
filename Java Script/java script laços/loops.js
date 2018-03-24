/**
* Estudo dos laços de repetições
* @author José de Assis
*/

//Exemplo 1 - Entendendo a estrutura for
function exemplo1(){
	for(var i = 0; i < 10; i++){
		//a linha abaixo escreve um texto diretamente no documento
		document.write(i + "<br>");//<br> quebra de linha
	}
}

//Exemplo 2 - Tabuada com a estrutura for
function exemplo2(){
	var valor = 7;
	for (var i = 0; i < 11; i++){
		document.write(valor + " x " + i + " = " + (valor * i) + "<br>");
	}
}

//Exemplo 3 - Encadeamento do laço for
function exemplo3(){
	for(var i = 0; i < 11; i++){
		document.write("<p>Tabuada do  " + i + "</p>");
		for(var j = 0; j < 11; j++){
			document.write(i + " x " + j + " = " + (i * j) + "<br>");
		}
	}
}

//Exemplo 4 - Entendendo a estrutura while
function exemplo4(){
	var i = 3;
	while(i == 2){
		document.write("loop infinito (while)");
	}
}

//Exemplo 5 - Entendendo a estrutura do while
function exemplo5(){
	var i = 3;
	do{
		document.write("loop infinito (do while)");
	}while(i == 2);
}

//Exemplo 6 - Tabuada usando while
function exemplo6(){
	var valor = 7;
	var i = 0;
	while(i < 11){
		document.write(valor + " x " + i + " = " + (valor*i) + "<br>");
		i = i + 1;
	}
}









