let alcohol = 0, gasoline = 0, diesel = 0, code = 0; 
while (code != 4) { 
	code = parseInt(gets()); 
	switch (code) { 
		case 1: 
			alcohol++; 
			break; 
		case 2: 
			gasoline++; 
			break; 
		case 3: 
			diesel++; 
			break; 
	} 
} 
console.log("MUITO OBRIGADO"); 
console.log("Alcool: " + alcohol); 
console.log("Gasolina: " + gasoline); 
console.log("Diesel: " + diesel);
