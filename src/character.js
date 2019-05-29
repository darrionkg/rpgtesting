class Statistics {
  constructor(stats)
  {
    this.level = 1;
    this.strength = this.vitality = this.dexterity = this.intelligence = this.wisdom = 10;
    this.name = "Nameless";
    this.class = "Nobody";
    this.race = "Blob";  
    Object.assign(this, stats);
    this.healthCurrent = this.healthMax = Math.floor(this.vitality * (0.75 + this.level / 4));    
  }
}


export class Character extends Statistics {
  constructor(stats) {    
    super(stats);
    this.created = Date.now();
    this.race = "Human";
  }
}


export class Enemy extends Statistics {
  constructor(stats) {    
    super(stats);
    this.race = "Beast";
    this.class = "Monster";
  }
}