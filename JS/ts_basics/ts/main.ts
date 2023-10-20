let firstname: string = "Sebastian";

firstname = "17";

console.log(firstname);

const age: number = 44;

const numbers: number[] = [1, 1, 2, 3, 5, 8];
numbers.push(13);

class Person {
  name: string;
  age: number;
  isMarried: boolean;

  constructor(name: string, age: number, isMarried: boolean) {
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
  }
}

const family: Person[] = [new Person("Sebastian", 44, true)];
family.push(new Person("Hanna", 44, true));
// family.push({ name: "Alvar", isMarried: false, age: 13 });
console.log(family);

function removePerson(person: Person): number {
  return 4711;
}

const myNumber: number = removePerson(family[0]);
