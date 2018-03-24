/**
* JS - aula 2 - Cálculo da média
* @author José de Assis
*/

function calcular(){
	//alert("teste"); //Dica: Usar o alert para testar o link com o html antes de começar a desenvolver a função
	// a linha abaixo cria 3 variáveis
	var nota1, nota2, media;
	// a linha abaixo captura o que foi digitado na caixa de texto do form e amarzena na variável nota1
	// frmMedia.txtNota1 (caminho para o valor a ser capturado)
	// parseFloat (converter para o tipo numérico real "números com casas decimais")
	// .replace(",",".") converter de vírgula para ponto
	nota1 = parseFloat(frmMedia.txtNota1.value.replace(",","."));
	nota2 = parseFloat(frmMedia.txtNota2.value.replace(",","."));
	media = (nota1 + nota2)/ 2;
	// a linha abaixo exibe o resultadona caixa de texto do formulário
	//.toFixed(2) -> arredondamento para 2 casas decimais
	frmMedia.txtResultado.value = media.toFixed(2);
	// lógica para determinar o status do aluno
	if (media <= 2){
		alert("REPROVADO");
	} else if (media > 2 && media < 5){
		alert("RECUPERAÇÃO");
	} else {
		alert("APROVADO");
	}
}





