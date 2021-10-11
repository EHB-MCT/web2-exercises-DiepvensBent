export default class Team {
    constructor() {
        this.teamName = 'First Team';
        this.trainer = 'Ash';
        this.roster = [];
    }
    describe() {
        let pokémonNames = [];
        this.roster.forEach(el => pokémonNames.push(el.name));
        return `Team ${this.teamName} with trainer ${this.trainer} has the following pokémon: ${[...pokémonNames]}`;
    }

    addPokemon(p) {
        let message = {
            value: '',
            type: 'ERROR'
        };
        if (this.roster.length == 6) {
            message.value = 'The roster is full!';
            return message;
        }

        if (this.roster.find(el => el.id == p.id)) {
            message.value = 'This pokemon is already part of your roster!';
            return message;
        }

        // Add to roster if succesfull
        this.roster.push(p);
        message.value = `The pokemon ${p.name} has been succesfully added to the team!`;
        message.type = 'SUCCES';
        return message;
    }
}