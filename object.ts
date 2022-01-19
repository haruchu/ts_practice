const person: {
  name: string;
  age: number;
} = {
  name: 'haru',
  age: 98
};

console.log(person);

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const p1 = new Person('haru', 98);
console.log(p1)