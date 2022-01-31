const π  = 3.1415926535;
const e = 2.7182818284;
let history = document.getElementById("history-value");
let result = document.getElementById("output-value");
let store = 0;

function Num(value){
	if(result.innerHTML != "")
	{
		history.innerHTML = result.innerHTML + value;
		result.innerHTML = "";
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
	document.getElementById("equal").disabled = true;
	if(value == "modeX"){
		let a = (history.innerHTML).substr(0,1);
		if(a == "-")
		{
			let mode = history.innerHTML;
			history.innerHTML = `|${mode}|`;
			result.innerHTML = 0 - mode;
		}
		else{
			let mode = history.innerHTML;
			history.innerHTML = `|${history.innerHTML}|`;
			result.innerHTML = mode;
		}
	}
	else{
		history.innerHTML = 0 - history.innerHTML;
	}
}

	// Trigonometry Function
function Trigonometry(){
	document.getElementById("equal").disabled = true;
	let x = document.getElementById("Trigonometry").value;
	switch(x){
		case "sin":
			if(document.getElementById('degtorad').innerText == 'DEG'){
				let rad1 = history.innerHTML;
				history.innerHTML = `sin (${rad1})`;
				result.innerHTML = Math.sin(rad1*(π/180));
			}
			else{
				let rad1 = history.innerHTML;
				history.innerHTML = `sin (${rad1})`;
				console.log(rad1);
				result.innerHTML = Math.sin(eval(rad1));
			}
			break;
		case "cos":
			if(document.getElementById('degtorad').innerText == 'DEG'){
				let rad2 = history.innerHTML;
				history.innerHTML = `cos (${rad2})`;
				result.innerHTML = Math.cos(rad2*(π/180));
			}
			else{
				let rad2 = history.innerHTML;
				history.innerHTML = `cos (${rad2})`;
				result.innerHTML = Math.cos(eval(rad2));
			}
			break;
		case "tan":
			if(document.getElementById('degtorad').innerText == 'DEG'){
				let rad3 = history.innerHTML;
				history.innerHTML = `tan (${rad3})`;
				result.innerHTML = Math.tan(rad3*(π/180));
			}
			else{
				let rad3 = history.innerHTML;
				history.innerHTML = `tan (${rad3})`;
				result.innerHTML = Math.tan(eval(rad3));
			}
			break;
	}
}

function Function(){
	document.getElementById("equal").disabled = true;
	let x = document.getElementById("Function").value;
	switch(x){
		case "abs":
			let fun1 = history.innerHTML;
			history.innerHTML = `abs (${fun1})`;
			result.innerHTML = Math.abs(fun1);
			break;
		case "acos":
			let fun2 = history.innerHTML;
			history.innerHTML = `acos (${fun2})`;
			result.innerHTML = Math.acos(fun2);
			break;
		case "acosh":
			let fun3 = history.innerHTML;
			history.innerHTML = `acosh (${fun3})`;
			result.innerHTML = Math.acosh(fun3);
			break;
		case "asin":
			let fun4 = history.innerHTML;
			history.innerHTML = `asin (${fun1})`;
			result.innerHTML = Math.asin(fun1);
			break;
	}
}

	// Factorial Function
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

	// Logerithm Function
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

function Power(value){
	document.getElementById("equal").disabled = true;
	if(value == "x^2"){
		result.innerHTML = Math.pow(history.innerHTML,2);
		history.innerHTML = `${history.innerHTML}<sup>2</sup>`;
	}
	else if(value == "10^x"){
		result.innerHTML = Math.pow(10,history.innerHTML);
		history.innerHTML = `10<sup>${history.innerHTML}</sup>`;
	}
	else if(value == "x^0.5"){
		result.innerHTML = Math.pow(history.innerHTML,0.5);
		history.innerHTML = `<sup>2</sup>√${history.innerHTML}`;
	}
	else if(value == "e^x"){
		result.innerHTML = Math.pow(e,history.innerHTML);
		history.innerHTML = `e<sup>${history.innerHTML}</sup>`;
	}
	else{
		result.innerHTML = Math.pow(history.innerHTML,-1);
		history.innerHTML = `1/${history.innerHTML}`;
	}
}
