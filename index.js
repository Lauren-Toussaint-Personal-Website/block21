class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;

    }

    getDescription() {
        return `This car is ${this.make}, ${this.model}, year ${this.year} `;
    }
}


class ElectricCar extends Car {
    constructor(make, model, year, range) {
        super(make, model, year);
        this.range = range;

    }

    getElectrified() {
        return `${super.getDescription()}, and can also travel approximately ${this.range}  miles per electric charge.`;


    }
}

console.log(new ElectricCar('Tesla', 'Model S', 2019, 300).getElectrified());

