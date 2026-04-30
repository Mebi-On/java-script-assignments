const input = require("prompt-sync")(); 

let numberOfPeople = Number(input("Enter number of people: "));
let pizzaType = input("Enter pizza type: ").toLowerCase(); 
pizzaWahala(numberOfPeople, pizzaType);

function pizzaWahala (numberOfPeople, pizzaType){
	let numberOfSlices = 0;
	let pricePerBox = 0;


	if (pizzaType ==  "sapa size"){
		numberOfSlices = 4;
        	pricePerBox = 2000;
	}

	else if (pizzaType == "small money"){
		numberOfSlices = 6;
		pricePerBox = 2400;
	}

	else if (pizzaType == "big boys"){
		numberOfSlices = 8;
		pricePerBox = 3000;
	}

	else if (pizzaType == "odogwu"){
		numberOfSlices = 12;
		pricePerBox = 4200;
	}
    
	else{
		console.log("Invalid Input");
	}
	
	let numberOfBoxes = Math.floor((numberOfPeople + numberOfSlices - 1) / numberOfSlices);
	let leftOver = (numberOfBoxes * numberOfSlices) - numberOfPeople;
	let price = pricePerBox * numberOfBoxes;


	console.log(`Number of boxes of pizza to buy = ${numberOfBoxes} boxes`);
	console.log(`Number left over slice after serving = ${leftOver} slices`);
	console.log(`Prices = ${price}`);	

} 

               






