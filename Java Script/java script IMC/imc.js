/**
* JS - Desafio do IMC
* @author José de Assis
*/

function calcular(){
	var peso, altura, imc;
	peso = parseFloat(frmImc.txtPeso.value.replace(",","."));
	altura = parseFloat(frmImc.txtAltura.value.replace(",","."));
	imc = peso/(altura * altura);
	frmImc.txtImc.value = imc.toFixed(2);
	// lógica principal (encadeamento do if)
	if (imc < 17){
		alert("Muito abaixo do peso");
	} else if (imc >= 17 && imc < 18.5){
		alert("Abaixo do peso");	
	} else if (imc >= 18.5 && imc < 25){
		alert("Peso Normal");
	} else if (imc >= 25 && imc < 30){
		alert("Acima do Peso");
	} else if (imc >= 30 && imc < 35){
		alert("Obesidade I");
	} else if (imc >= 35 && imc < 40){
		alert("Obesidade II");
	} else{
		alert("Obesidade III");
	}
}





