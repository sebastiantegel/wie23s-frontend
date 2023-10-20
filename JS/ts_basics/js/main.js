var firstname = "Sebastian";
firstname = "17";
console.log(firstname);
var age = 44;
var numbers = [1, 1, 2, 3, 5, 8];
numbers.push(13);
var Person = /** @class */ (function () {
    function Person(name, age, isMarried) {
        this.name = name;
        this.age = age;
        this.isMarried = isMarried;
    }
    return Person;
}());
var family = [new Person("Sebastian", 44, true)];
family.push(new Person("Hanna", 44, true));
// family.push({ name: "Alvar", isMarried: false, age: 13 });
console.log(family);
function removePerson(person) {
    return 4711;
}
var myNumber = removePerson(family[0]);
