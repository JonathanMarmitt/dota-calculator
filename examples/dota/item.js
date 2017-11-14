class Item{
	constructor(name, damage = 0, atackSpeed = 0, intelligente = 0, strentgh = 0, agility = 0, critical = 0){
		this.name = name;
		this.damage = damage;
		this.atackSpeed = atackSpeed;
		this.intelligente = intelligente;
		this.strentgh = strentgh;
		this.agility = agility;
		this.critical = critical;

		//this.id = 
	}
}

items = [
	new Item('Daedalus', 60, 0, 0, 0, 0, 2.25),
	new Item('Battle Fury', 55),
	new Item('Demon Edge', 25),
	new Item('Divine Rapier', 250),
	new Item('Desolator', 60, 0, 0, 0, 0, 1.5),
	new Item('Butterfly', 50, 1.25, 0, 0, 25, 0),
	new Item('Skadi', 0, 0, 25, 25, 25, 0)
]