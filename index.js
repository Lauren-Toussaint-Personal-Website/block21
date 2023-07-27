class Car {
    constructor(make, model, year) {
        this.make = '';
        this.model = '';
        this.year = '';

    }

    getDescription() {
        return `This car is ${this.make}, ${this.model}, year ${this.year} `;
    }
}


class ElectricCar extends Car {
    constructor(make, model, year, range) {
        super('make: Tesla, model: Model S, year: 2019');
        this.range = 300;

    }

    getElectrified() {
        return `${super.getDescription()}, and can also travel approximately ${this.range}  miles per electric charge.`;


    }
}

console.log(new ElectricCar(`${this.make = 'Tesla', this.model = 'Model S', this.year = 2019}`).getElectrified());

