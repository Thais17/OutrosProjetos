/**
* Cálculo do valor do serviço
* @author José de Assis
*/

function calcular(){
	var remuneracao, custo, horas, resultado;
	//entrada
	remuneracao = parseFloat(frmServico.txtRemuneracao.value.replace(",","."));
	custo = parseFloat(frmServico.txtCusto.value.replace(",","."));
	horas = parseFloat(frmServico.txtHoras.value.replace(",","."));
	//processamento
	resultado = (remuneracao + (0.3 * remuneracao) + custo + (0.2 * remuneracao)) / horas;
	//saída
	frmServico.txtValor.value = resultado.toFixed(2);
}