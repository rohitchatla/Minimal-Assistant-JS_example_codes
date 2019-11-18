//neural network - recognizing the non-exact data
//machine learning
//heuristics search


//conversation bot

function start(invar, outvar){
	if (invar == ""){
		outvar("Please Write Something..");
	}

	if (invar == "How are you?"){
		outvar("I am fine..");
	}	
	else if(invar == "whats up"){
		outvar("good good");
	}
	else if(invar == "open score"){
		outvar("hurray:[hip,hip]");
	}
	else if(invar == "bye"){
		outvar("Bye!");
	}
}