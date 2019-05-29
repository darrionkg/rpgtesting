export class Combat {
  constructor(combattants) {
    this.combattants = combattants;
    this.currentTurn = 0;
    this.turnOrder = [...combattants];
    this.turnOrder.sort((a, b) => b.dexterity-a.dexterity);
  }

  // Combat.prototype.getNextTurn = function() {
    
  // }

}