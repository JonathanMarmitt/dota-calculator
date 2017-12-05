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
			else if(this.mainAttribute == 'I') damage += i.intelligence;
			else if(this.mainAttribute == 'S') damage += i.strength;
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
	new Hero('Huskar', 100, 106, 1.2, 'S'),
	new Hero('Slark', 80, 86, 1.6, 'A'),
	new Hero('Brewmaster', 95, 112, 1.2, 'S'),
	new Hero('Ancient', 70, 86, 0.8, 'I'),
	new Hero('Doom', 112, 114, 1.0, 'S'),
	new Hero('Alchemist', 99, 108, 1.17, 'S'),
	new Hero('Luna', 127, 133, 2.26, 'A'),
	new Hero('Pudge', 145, 152, 1.52, 'S'),
	new Hero('Lion', 121, 127, 1.51, 'I'),
	new Hero('Wraith King', 145, 147, 1.81, 'S'),
	new Hero('Sven', 146, 148, 1.65, 'S'),
	new Hero('Necrophos', 111, 115, 1.47, 'I'),
	new Hero('Void', 123, 129, 1.90, 'A'),
	new Hero('Juggernaut', 110, 114, 2.10, 'A'),
	new Hero('Witch Doctor', 122, 132, 1.49, 'I'),
	new Hero('Lich', 121, 131, 1.64, 'I'),
	new Hero('Tidehunter', 128, 134, 1.53, 'S'),
	new Hero('Sand King', 118, 134, 1.71, 'S'),
	new Hero('Chaos Knight', 151, 181, 1.70, 'S'),
	new Hero('Jakiro', 160, 168, 1.54, 'I'),
	new Hero('Viper', 141, 143, 2.63, 'A'),
	new Hero('Phanton Lancer', 118, 140, 2.15, 'A'),
	new Hero('Zeus', 107, 115, 1.40, 'I'),
	new Hero('Luna', 127, 133, 1.5, 'A'),
	new Hero('Dragon Knight', 166,	172, 2.02, 'S'),
	new Hero('Dazzle', 122, 140, 1.62, 'I'),
	new Hero('Bane', 120, 126, 1.81, 'I'),
	new Hero('Shadow Field', 106, 112, 2.11, 'A'),
	new Hero('Kunkka', 133, 143, 1.49, 'S'),
	new Hero('Legion Comander', 130, 134, 1.59, 'S'),
	new Hero('Drow Ranger', 194, 205, 3.04, 'A'),
	new Hero('Tiny', 214, 220, .20, 'S'),
	new Hero('Phanton Assassin', 121, 123, 1.99, 'A'),
	new Hero('Axe', 124, 128, 1.73, 'S'),
	new Hero('Lina', 118, 136, 1.60, 'I'),
	new Hero('Oracle', 110, 116, 1.79, 'I')
]