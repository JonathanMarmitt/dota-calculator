/**
  Sera uma populacao para cada hero diferente, e a ideia é que para cada populacao, seja encontrato
  a melhor combinacao.

  Populacao inicial: um hero com 6 itens sorteados aleatoriamente = um individuo
  
 */

$(document).ready(function(){
	$('#clickit').click(function(){
		numItems =  $('#numItems').val(); // isso vai representar quantos itens cada heroi vai ter
		var popSize = $('#populationSize').val();
		var generations = $('#numGenerations').val();
		var mutability = ($('#mutabilityPercent').val()%100)/100;
		var popDie = ($('#populationDieOff').val()%100)/100;

		console.log(numItems + " " + popSize + " " + generations + " " + mutability + " " + popDie);
		
		// para cara hero, executa o ambiente uma vez
		var heroIndex;
		for(i = 0; i < Object.keys(heroes).length; i++){
			heroIndex = i;

			Environment.name = "Enviroiment for hero "+heroes[heroIndex].name;
			Environment.configure({'populationSize':popSize,
				                   'generations':generations,
				                   'mutability':mutability,
				                   'populationDieOff':popDie });
			Environment.Individual.chromosomeLength = numItems;
			Environment.init();
		}
	});
});

//FIXME
//Environment.inhabitants = usar o heroi em questao, e sortear itens pra ele, sendo essa a populacao inicial

// function drawMap(generation){
// 	var ctx = document.getElementById('gacanvas');	
// 	ctx = ctx.getContext('2d');
// 	ctx.clearRect(0,0,mapSize+50,mapSize);
// 	ctx.beginPath();
// 	ctx.rect(0,0,mapSize,mapSize);
// 	ctx.stroke();
// 	ctx.fillText(generation,200,20);
// }

// function distanceTo(pointA, pointB){
// 	return Math.sqrt(Math.pow(pointB[0]-pointA[0],2) + Math.pow(pointB[1]-pointA[1],2));
// }

/**
 * This is a function that must be overriden. It takes in an individual as it's argument and returns the 
 * fitness of that individual. Required.
 */
Environment.fitnessFunction = function(individual, draw){
	fitness = 0;

	for(var i = 0; i < individual.chromosomeLength; i++){
		console.log(i)
		//var x = individual.chromosome[i];
		//var y = individual.chromosome[i+1];
		//distanceToMid = distanceTo([x,y], circleMid);
		//fitness += Math.abs(circleRadius-distanceToMid);
		
		hero = heroes[heroIndex];
		item = items[individual.chromosome[i]];

		hero.addItem(item);
	}

	dmg = hero.calculateHit();
	console.log(dmg);

	return dmg;
}

/**
 * This argument is capitalized and it refers to the Object of the individual that this Genetic Algorithm 
 * is going to use. There can only be one Individual object. The individual object must have the following 
 * variables: chromosome, chromosomeLength; and it must have the function mate that returns another individual.
 * Specify my individual - including chromosome length, mate, and init
 */
Environment.Individual = function(){
        this.fitness = 0;
        this.chromosomeLength = numItems;
        this.chromosome = new Array();
        this.mate = function(mutability, mate){
                if (!mate.chromosome){
                        throw "Mate does not have a chromosome";
                }

                var newGuy = new Environment.Individual();
                newGuy.chromosome = this.chromosome.slice(0,Math.floor(this.chromosomeLength)).concat(mate.chromosome.slice(Math.floor(this.chromosomeLength)));
                // chromosome: metade dos cromossomos do individuo atual e metade do proximo individuo

                //FIXME: ver como aplicar mutacao
                // while (Math.random() < mutability){
                //     var mutateIndex = Math.floor(Math.random()*this.chromosomeLength); //a random gene will be mutated;                     
                //     newGuy.chromosome[mutateIndex] = Math.random()*mapSize;

                // }

                return newGuy;
        }
        
        // aqui gera o individuo, tem que sortear os itens pra cada...
        for (var i = 0; i < this.chromosomeLength; i++){
            this.chromosome.push(parseInt(Math.random() * items.length)); //sorteia um item aleatorio
        }
        console.log(this.chromosome);
}

/**
 * This is a function callback that is called before every generation's fitness 
 * is computed. Required for iterative mode functionality.
 */ 
Environment.beforeGeneration = function(generation) {
	// drawMap(generation);
}

/**
 * This is a function callback that is called after every generation's fitness is computed. 
 * Required for iterative mode functionality.
 */
Environment.afterGeneration = function(generation) {
	Environment.fitnessFunction(Environment.inhabitants[0],true);
	setTimeout("Environment.generation()",100);
};