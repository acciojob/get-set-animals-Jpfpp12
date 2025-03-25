//complete this code
class Animal {
  constructor(species) {
    this.species = species;
  }
  get species() {
    return this._species;
  }
  set species(value) {
    this._species = value;
  }
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}
}

class Dog extends Animal { 
	 constructor() {
    super('Dog');
  }
  bark() {
    console.log('woof');
  }

	
}

class Cat extends Animal {
	super('Cat'); 
  }
  purr() {
    console.log('purr');
  }

}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
