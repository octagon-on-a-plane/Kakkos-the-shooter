// PlayerController.js

class Player {
    constructor(id, name, position) {
        this.id = id;
        this.name = name;
        this.position = position;
    }

    move(direction) {
        console.log(`${this.name} is moving ${direction}`);
        // Add movement logic here
    }

    shoot() {
        console.log(`${this.name} is shooting`);
        // Add shooting logic here
    }
}

class PlayerController {
    constructor() {
        this.players = [];
    }

    addPlayer(id, name, position) {
        const player = new Player(id, name, position);
        this.players.push(player);
        console.log(`Player ${name} added.`);
    }

    movePlayer(id, direction) {
        const player = this.players.find(p => p.id === id);
        if (player) {
            player.move(direction);
        }
    }

    playerShoot(id) {
        const player = this.players.find(p => p.id === id);
        if (player) {
            player.shoot();
        }
    }
}

// Example usage
const playerController = new PlayerController();
playerController.addPlayer(1, 'Player1', { x: 0, y: 0 });
playerController.addPlayer(2, 'Player2', { x: 10, y: 10 });

playerController.movePlayer(1, 'up');
playerController.playerShoot(2);

console.log('Player controller script loaded.');
