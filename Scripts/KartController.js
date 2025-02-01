// KartController.js

class Kart {
    constructor(id, name, position) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.speed = 0;
        this.direction = 0; // 0 for straight, -1 for left, 1 for right
    }

    accelerate() {
        this.speed += 1;
        console.log(`${this.name} is accelerating. Speed: ${this.speed}`);
    }

    brake() {
        this.speed = Math.max(0, this.speed - 1);
        console.log(`${this.name} is braking. Speed: ${this.speed}`);
    }

    turn(direction) {
        this.direction = direction;
        console.log(`${this.name} is turning ${direction === -1 ? 'left' : 'right'}`);
    }

    updatePosition() {
        // Update position based on speed and direction
        console.log(`${this.name} position updated.`);
    }
}

class KartController {
    constructor() {
        this.karts = [];
    }

    addKart(id, name, position) {
        const kart = new Kart(id, name, position);
        this.karts.push(kart);
        console.log(`Kart ${name} added.`);
    }

    controlKart(id, action, direction = 0) {
        const kart = this.karts.find(k => k.id === id);
        if (kart) {
            switch(action) {
                case 'accelerate':
                    kart.accelerate();
                    break;
                case 'brake':
                    kart.brake();
                    break;
                case 'turn':
                    kart.turn(direction);
                    break;
                case 'update':
                    kart.updatePosition();
                    break;
                default:
                    console.log('Unknown action');
            }
        }
    }
}

// Example usage
const kartController = new KartController();
kartController.addKart(1, 'Kart1', { x: 0, y: 0 });
kartController.addKart(2, 'Kart2', { x: 10, y: 10 });

kartController.controlKart(1, 'accelerate');
kartController.controlKart(1, 'turn', -1);
kartController.controlKart(2, 'brake');

console.log('Kart controller script loaded.');
