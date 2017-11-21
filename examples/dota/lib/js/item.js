class Item{
	constructor(name, damage = 0, atackSpeed = 0, intelligence = 0, strentgh = 0, agility = 0, critical = 0){
		this.name = name;
		this.damage = damage;
		this.atackSpeed = atackSpeed;
		this.intelligence = intelligence;
		this.strentgh = strentgh;
		this.agility = agility;
		this.critical = critical;

		//this.id = 
	}
}

items = [
	new Item('Daedalus',        80,  0,  0,  0,  0, 1.35),
	new Item('Battle Fury',     45,  0,  0,  0,  0,    0),
	new Item('Demon Edge',      42,  0,  0,  0,  0,    0),
	new Item('Divine Rapier',  330,  0,  0,  0,  0,    0),
	new Item('Desolator',       50,  0,  0,  0,  0,    0),
	new Item('Butterfly',       30, 0.3,  0,  0, 35,    0),
	new Item('Skadi',            0,  0, 25, 25, 25,    0),
	new Item('Abyssal Blade',    0,  0,  0, 10,  0,    0),
	new Item('Mithril Hammer',  24,  0,  0,  0,  0,    0),
	new Item('Maelstrom',       24, 0.25,  0,  0,  0, 0.25),
	new Item('Mjollnir',        24, 0.80,  0,  0,  0, 0.20),
	new Item('Assault Cuirass',  0, 0.30,  0,  0,  0,    0),
	new Item('Satanic',         50,  0,  0, 25,  0,    0),
	new Item('Nullifier',       65,  0,  0,  0,  0,    0),
	new Item('Monkey King Bar',  0, 0.60,  0,  0,  0, 0.75),
	new Item('Echo Sabre',      15, 0.10, 10, 10,  0,    0),
	new Item('Sange and Yasha', 16, 0.16,  0, 16, 16,    0),
	new Item('Ethereal Blade',   0,  0, 10, 10, 40,    0),

]