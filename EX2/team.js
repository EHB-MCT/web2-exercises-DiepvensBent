export default class Team {
    constructor() {
        this.teamName = 'First Team';
        this.trainer = 'Ash';
        this.roster = [];
    }
    describe() {
        return `Team ${this.teamName} with trainer ${this.trainer} has the following pokémon: ${[...this.roster]}`;
    }

}