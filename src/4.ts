class Key {
  #signature;

  constructor() {
    this.#signature = Math.random();
  }

  getSignature() {
    return this.#signature;
  }
}

class Person {
  #key;

  constructor(key) {
    this.#key = key.getSignature();
  }

  getKey() {
    return this.#key;
  }
}

abstract class House {
  door: boolean = false;
  key: Key;
  tenants: String[];

  comeIn(person) {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  abstract openDoor(key: Key);
}

class MyHouse extends House {
  key: Key;

  constructor(key) {
    super();
    this.key = key;
  }

  openDoor(key) {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('The door is now open!');
    } else {
      console.log('The key does not match. The door remains closed.');
    }
  }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

// console.log(house.door);

house.comeIn(person); // подія, яка спрацює, якщо двері відчинені

console.log(house.tenants[0] === person); // повинно бути true

export {};
