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

crystalis = new Item('Crystalis', 25, 0, 0, 0, 0, 1.75);
battlefury = new Item('Battle Fury', 55);
demonEdge = new Item('Demon Edge', 25);
divineRapier = new Item('Divine Rapier', 250);
bloodCharge = new Item('Blood Charge', 75, 0, 0, 0, 0, 1.5);
butterfly = new Item('Butterfly', 50, 1.25, 0, 0, 25, 0);
skady = new Item('Skady', 0, 0, 25, 25, 25, 0);

items = { crystalis, butterfly, demonEdge, divineRapier, bloodCharge, butterfly, skady };