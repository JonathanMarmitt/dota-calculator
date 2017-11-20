bestHeroes = new Array();
configs = {};
numItems = 0;
to = null;

$(document).ready(function(){
	$('#clickit').click(function(){
		numItems =  $('#numItems').val();
		var popSize = $('#populationSize').val();
		var generations = $('#numGenerations').val();
		var mutability = ($('#mutabilityPercent').val()%100)/100;
		var popDie = ($('#populationDieOff').val()%100)/100;

		console.log(numItems + " " + popSize + " " + generations + " " + mutability + " " + popDie);
		
		toggleBtnOff();

		configs = {'populationSize':popSize,
                   'generations':generations,
                   'mutability':mutability,
                   'populationDieOff':popDie,
                   'heroIndex': 0};

		callEnvironment(0, configs, numItems);
	});
});

function toggleBtnOn(){
	btn = $('#clickit').html("Gerar").removeClass('disabled');
}

function toggleBtnOff(){
	btn = $('#clickit').html("Gerando...").addClass("disabled")
}

function callEnvironment(heroIndex, configs, numItems){
	if(heroes[heroIndex] != undefined){
		Environment.name = "Enviroiment for hero "+heroes[heroIndex].name;
		Environment.configure(configs);
		Environment.Individual.chromosomeLength = numItems;
		Environment.heroIndex = heroIndex;
		Environment.init();
		console.log(Environment.name, heroIndex);

		$('#hero').html(heroes[heroIndex].name);
	}
}

/**
 * Responsável pelo debug
 */
function simulate(generation, hero){
	if(hero){
		$("#simulation").append("Hero "+hero.name+" hitted "+hero.calculateHit().toFixed(2)+" - items: "+hero.getItemsText()+"<br>");
	}
	else
		$("#simulation").append("<b>Geração: "+generation+"</b><br>");
}

/**
 * Aqui é calculado o fitness de cada indivíduo, conceitualmente presente em todo algoritmo genético
 * No nosso caso, o fitness é o dano de um hit do herói
 */
Environment.fitnessFunction = function(individual, draw){
	fitness = 0;

	// Faz um clone do objeto que representa o herói
	original = heroes[Environment.heroIndex];
	let hero = Object.assign(Object.create(original), original);

	// Atribui a quantidade de itens definida
	for(var i = 0; i < individual.chromosomeLength; i++){
		item = items[individual.chromosome[i]];

		hero.addItem(item);
	}

	dmg = hero.calculateHit();

	// Representação visual
	simulate(null, hero);

	// guarda a melhor combinacao do hero
	if(! bestHeroes[Environment.heroIndex] ){
		// cria se nao existe
		bestHeroes[Environment.heroIndex] = {};
		bestHeroes[Environment.heroIndex].dmg = dmg;
		bestHeroes[Environment.heroIndex].hero = hero;
	}
	else
	{
		//substitui se o novo individuo e melhor
		if(bestHeroes[Environment.heroIndex].dmg < dmg)
		{
			bestHeroes[Environment.heroIndex].hero = hero;
			bestHeroes[Environment.heroIndex].dmg = dmg;
		}
	}

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

            // O novo individuo sera composto de metade dos itens do individo atual, e outra metade do próximo
            var newGuy = new Environment.Individual();
            newGuy.chromosome = this.chromosome.slice(0,Math.floor(this.chromosomeLength)).concat(mate.chromosome.slice(Math.floor(this.chromosomeLength)));

            /**
             * Esta parte é a mutação do individuo, que pode ocorrer mais de uma vez para o mesmo
             * Um item aleatório é escolhido para ser substituido, que é substituido também por um item aleatório
             */
            while (Math.random() < mutability){
                var mutateIndex = Math.floor(Math.random() * this.chromosomeLength); 
                newGuy.chromosome[mutateIndex] = parseInt(Math.random() * items.length);
            }

            return newGuy;
    }
    
    // Aqui os itens são definidos para cada herói, aleatoriamente
    for (var i = 0; i < this.chromosomeLength; i++){
        this.chromosome.push(parseInt(Math.random() * items.length));
    }
}

/**
 * This is a function callback that is called before every generation's fitness 
 * is computed. Required for iterative mode functionality.
 */ 
Environment.beforeGeneration = function(generation) {
	simulate(generation);
}

/**
 * This is a function callback that is called after every generation's fitness is computed. 
 * Required for iterative mode functionality.
 */
Environment.afterGeneration = function(generation) {
	Environment.fitnessFunction(Environment.inhabitants[0],true);
	to = setTimeout("Environment.generation()",100);

	$('#generation').html(generation);

	if(generation == ($('#numGenerations').val() - 1))
		endEnviroiment();
};

function endEnviroiment(){
	let h = bestHeroes[Environment.heroIndex];
	$("#best-ones").append("Hero: "+h.hero.name+" Best hit: "+h.dmg.toFixed(2)+" Items: "+h.hero.getItemsText()+"<br>");

	callEnvironment(Environment.heroIndex+1, configs, numItems);
	clearInterval(to);

	if(Environment.heroIndex == (heroes.length - 1))
		endAll();
}

function endAll(){
	toggleBtnOn();
	$('#generation').html("");
	$('#hero').html("");
}