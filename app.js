const π  = 3.1415926535;
const e = 2.7182818284;
let history = document.getElementById("history-value");
let result = document.getElementById("output-value");
let store = 0;
function Num(value){
	if(value == "10**" || value == "e**"){
		history.innerHTML = value + history.innerHTML;
	}
	else{
		history.innerHTML += value;
	}
}
function Remove(){
	document.getElementById("equal").disabled = false;
	document.getElementById("trigo").selected = true;
	document.getElementById("fun").selected = true;
	history.innerHTML = "";
	result.innerHTML = "";
}
function Equal(){
	result.innerHTML = eval(history.innerHTML).toFixed(2);
}
function Backspace(){
	history.innerHTML = (history.innerHTML).substr(0, (history.innerHTML).length-1);
}
function plusMinus(value){
	if(value == "modeX"){
		let a = (history.innerHTML).substr(0,1);
		if(a == "-")
		{
			history.innerHTML = 0 - history.innerHTML;
		}
		else{
			history.innerHTML = history.innerHTML;
		}
	}
	else{
		history.innerHTML = 0 - history.innerHTML;
	}
}
function Trigonometry(){
	document.getElementById("equal").disabled = true;
	let x = document.getElementById("Trigonometry").value;
	switch(x){
		case "sin":
			if(document.getElementById('degtorad').innerText == 'DEG'){
				history.innerHTML= history.innerHTML*(π/180)
				result.innerHTML = Math.sin(history.innerHTML);
			}
			else{
				result.innerHTML = Math.sin(history.innerHTML);
			}
			break;
		case "cos":
			if(document.getElementById('degtorad').innerText == 'DEG'){
				history.innerHTML= history.innerHTML*(π/180)
				result.innerHTML = Math.cos(history.innerHTML);
			}
			else{
				result.innerHTML = Math.cos(history.innerHTML);
			}
			break;
		case "tan":
			if(document.getElementById('degtorad').innerText == 'DEG'){
				history.innerHTML= history.innerHTML*(π/180)
				result.innerHTML = Math.tan(history.innerHTML);
			}
			else{
				result.innerHTML = Math.tan(history.innerHTML);
			}
			break;
	}
}
function Function(){
	document.getElementById("equal").disabled = true;
	let x = document.getElementById("Function").value;
	switch(x){
		case "abs":
			result.innerHTML = Math.abs(history.innerHTML);
			break;
		case "acos":
			result.innerHTML = Math.acos(history.innerHTML);
			break;
		case "acosh":
			result.innerHTML = Math.acosh(history.innerHTML);
			break;
		case "asin":
			result.innerHTML = Math.asin(history.innerHTML);
			break;
	}
}
function Factorial(value){
	document.getElementById("equal").disabled = true;
	let num = history.innerHTML;
	let fact=1;
	history.innerHTML += value; 
	for(let i=2;i<=num;i++)
	{
		fact = fact*i;
	}
	result.innerHTML = fact;
}
// F - E Function
function toExp(){
	document.getElementById("equal").disabled = true;
	let number = Number(history.innerHTML);
	result.innerHTML = number.toExponential();
}
function Logerithm(value){
	let log = history.innerHTML;
	document.getElementById("equal").disabled = true;
	if(value == "log"){
		history.innerHTML = `log ${log}`;
		result.innerHTML = Math.log10(log);
	}
	else{
		history.innerHTML = `ln<sub>e</sub> ${log}`;
		result.innerHTML = Math.log(log);
	}
	
}
	// Function for MS Button
function Memory() {
	document.getElementById('mr').disabled = false;
	document.getElementById('mc').disabled = false;
	if (result.innerText == "") {
		store = eval(history.innerText);
	}
	else{
		store = eval(result.innerText);
	}
}

	// Function for MR Button
function MemoryRead() {
	history.innerHTML = "";
	result.innerHTML = "";
	history.innerText = store;
}

	// Function for MC Button
function MemoryClear() {
	history.innerHTML = "";
	result.innerHTML = "";
	store = 0;
}

	// Function for M+ Button
function MemoryPlus() {
	if (result.innerText == "") {
		store += eval(history.innerText);
	}
	else{
		store += eval(result.innerText);
	}
}

	// Function for M- Button
function MemoryMinus() {
	if (result.innerText == "") {
		store -= eval(history.innerText);
	}
	else{
		store -= eval(result.innerText);
	}
}
function DegtoRad(){
	if(document.getElementById('degtorad').innerText == 'DEG'){
		document.getElementById('degtorad').innerText = 'RAD';
		document.getElementById('degtorad').value = 'RAD';
	}
	else{
		document.getElementById('degtorad').innerText = 'DEG';
		document.getElementById('degtorad').value = 'DEG';
	}

}
