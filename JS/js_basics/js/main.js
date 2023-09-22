function greeting() {
  alert("Hello world!");
}

const firstName = "Sebastian";
let age = 43;
const isMarried = true;

console.log("firstName:", firstName);
console.log("age:", age);
console.log("isMarried:", isMarried);

// firstName = "Hanna";

// Det nya värdet på age = Det gamla värdet på age + 1
age = age + 1;
console.log("age:", age);

age += 1; // Samma sak som age = age + 1, fast kortare skrivsätt
age++;

console.log("age:", age);

age--;
age -= 1;

console.log("age:", age);

const product = age * 3.14;
console.log("Product:", product);

const quota = product / 2.31;
console.log("quota:", quota);

const modulus = 4 % 2;
console.log(modulus);

// greeting();
