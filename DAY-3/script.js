var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;

//adding listener
input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

// taking initial value
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;


function myResult(){

// when we change the input and output type vale we need to updata the 
// inputTypeValue and resultTypeValue

	inputTypeValue = inputType.value;
	resultTypeValue = resultType.value;


// now compare the input and resultType value and add formula

	if(inputTypeValue === "meter" && resultTypeValue==="kilometer")
	{
		//meter to kilometer conversion
		result.value = Number(input.value) * 0.001;
	}
	else if(inputTypeValue === "meter" && resultTypeValue==="Centimeter")
	{
		//meter to Centimeter conversion 
		result.value = Number(input.value) * 100;

	}
	else if(inputTypeValue === "meter" && resultTypeValue==="meter")
	{
		//meter to meter conversion 
		result.value = input.value
	}



	if(inputTypeValue === "kilometer" && resultTypeValue==="meter")
	{
		//kilometer to meter conversion
		result.value = Number(input.value) * 1000;
	}
	else if(inputTypeValue === "kilometer" && resultTypeValue==="Centimeter")
	{
		//kilometer to Centimeter conversion
		result.value = Number(input.value) * 100000;
	}
	else if(inputTypeValue === "kilometre" && resultTypeValue==="kilometer")
	{
		// kilometer to kilometer conversion 
		result.value = input.value
	}

	if(inputTypeValue === "Centimeter" && resultTypeValue==="kilometer")
	{
		//Centimeter to kilometer conversion 
		result.value = Number(input.value) * 0.00001;
	}
	else if(inputTypeValue === "Centimeter" && resultTypeValue==="meter")
	{
		//Centimeter to meter conversion
		result.value = Number(input.value) * 0.01;
	}
	else if(inputTypeValue === "Centimeter" && resultTypeValue==="Centimeter"){
		//Centimeter to Centimeter conversion 
		result.value = input.value
	}
}

