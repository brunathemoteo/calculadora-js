function addCharacter(caracter) {
	const valorDisplay = document.querySelector(".display").value;

	document.querySelector(".display").value = valorDisplay + caracter;
}

function cleanDisplay() {
	document.querySelector(".display").value = "";
}

function calcular() {
	const valorDisplay = document.querySelector(".display").value;

	document.querySelector(".display").value = eval(valorDisplay);
}

function invertSignal() {
	const valorDisplay = document.querySelector(".display").value;

	document.querySelector(".display").value = valorDisplay * -1;
}
