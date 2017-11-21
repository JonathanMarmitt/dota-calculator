class Hero {
	constructor(name, minDamage, maxDamage, atackSpeed, mainAttribute){
		this.name = name;
		this.minDamage = minDamage;
		this.maxDamage = maxDamage;
		this.atackSpeed = atackSpeed;
		this.mainAttribute = mainAttribute;

		this.item1 = null;
		this.item2 = null;
		this.item3 = null;
		this.item4 = null;
		this.item5 = null;
		this.item6 = null;
	}

	addItem(item){
		if(!this.item1) this.item1 = item;
		else if(!this.item2) this.item2 = item;
		else if(!this.item3) this.item3 = item;
		else if(!this.item4) this.item4 = item;
		else if(!this.item5) this.item5 = item;
		else if(!this.item6) this.item6 = item;
	}

	getItems(){
		return [this.item1, this.item2, this.item3, this.item4, this.item5, this.item6].filter((i) => { return i != undefined})
	}

	resetItems(){
		delete this.items;
	}

	calculateHit(){
		let damage = Math.floor(Math.random() * (this.maxDamage - this.minDamage + 1) + this.minDamage);
		let as = this.atackSpeed;
		// primeiro calcula todo dano, depois multiplica pelo as
		this.getItems().map((i) => {
			damage += i.damage;
			as += i.atackSpeed;

			if(this.mainAttribute == 'A') damage += i.agility;
			if(this.mainAttribute == 'I') damage += i.intelligence;
			if(this.mainAttribute == 'S') damage += i.strength;
		})

		return damage * as;
	}

	getItemsText(){
		let str = "";
		this.getItems().map((i) => {
			str += i.name+" ";
		});
		return str;
	}
}

heroes = [
	new Hero('Huskar', 100, 106, 1.2),
	new Hero('Slark', 80, 86, 1.6),
	new Hero('Brewmaster', 95, 112, 1.2),
	new Hero('Ancient', 70, 86, 0.8),
	new Hero('Doom', 112, 114, 1.0),
	new Hero('Sven', 130, 146, 0.8),
]