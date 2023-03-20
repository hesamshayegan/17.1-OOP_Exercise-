class Vehicle {
    constructor(make,model,year) {
    this.make = make
    this.model = model
    this.year = year
}

honk() {
    return ('Beep!')
}

toString() {
    console.log(`The vehicle is ${this.make}, its model is ${this.model} and is made in ${this.year}`)
}

}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);

class Car extends Vehicle {
    constructor(make,model,year,numWheels) {
    super(make,model,year,numWheels)
    this.numWheels = 4
    
    }
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);

class Motorcycle extends Vehicle {
    constructor(make,model,year,numWheels) {
    super(make,model,year,numWheels)
    this.numWheels = 2
    }
revEngine() {
    console.log('VROOM!')
    } 
}

class Garage {
    constructor(capacity) {
    this.capacity = capacity
    this.vehicles = [];
    }


add (newVehicle) {
    if (!(newVehicle instanceof Vehicle)) {
    return ("Only vehicles are allowed in here!")
    }
    else if (this.vehicles.length >= this.capacity) {
   return ("Sorry, we’re full.")
    }
    else {
    this.vehicles.push(newVehicle)
    return ("Vehicle added")    
    }    
}

}

let garage = new Garage(2);