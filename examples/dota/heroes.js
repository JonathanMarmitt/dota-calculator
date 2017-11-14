class Hero {
	constructor(name, minDamage, maxDamage, atackSpeed, mainAttribute){
		this.name = name;
		this.minDamage = minDamage;
		this.maxDamage = maxDamage;
		this.atackSpeed = atackSpeed;
		this.mainAttribute = mainAttribute;

		this.itens = [];
	}

	addItem(item){
		this.itens.push(item);
	}

	getItems(){
		return this.itens;
	}

	calculateHit()
	{
		let damage = Math.floor(Math.random() * (this.maxDamage - this.minDamage + 1) + this.minDamage);
		let as = this.atackSpeed;
		// primeiro calcula todo dano, depois multiplica pelo as
		this.getItems().map((i) => {
			damage += i.damage;
			as += i.atackSpeed;

			if(this.mainAttribute == 'A') damage += i.agility;
			if(this.mainAttribute == 'I') damage += i.intelligente;
			if(this.mainAttribute == 'S') damage += i.strength;
		})

		//console.log("Damage:"+damage+" AS: "+as);

		return damage * as;
	}
}

huskar = new Hero('Huskar', 100, 106, 1.2);
slark = new Hero('Slark', 80, 86, 1.6);
brewmaster = new Hero('Brewmaster', 95, 112, 1.2);
ancient = new Hero('Ancient', 70, 86, 0.8);
doom = new Hero('Doom', 112, 114, 1.0);

heroes = {
	huskar, slark, brewmaster, ancient, doom
}