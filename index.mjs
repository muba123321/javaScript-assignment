// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4);
console.log(isSum50 === 50);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.

const isDivisibleBy5 = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0  && n4 % 5 === 0;
 const isN1GreaterN4 = n1 > n4;

// var substraction = (n1-n2);

// var multiplication = substraction * n3;

// var finalDivision = multiplication % n4;

 let finalDivision = ((n1-n2)*n3) % n4;

const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;


 const isLessOrEqual25 = n1 <= 25 || n2 <= 25 || n3 <= 25 || n4 <= 25;

   


// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(isUnique);

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(`this is the isValid calculated ${isValid}`);
console.log(`This is first solution ${isDivisibleBy5}`);
console.log (`This is second solution ${isN1GreaterN4}`);
console.log(`this is the final division ${finalDivision}`);

console.log(`this is the first isOver25 calculated ${isOver25}`);
console.log(`this is the second isLessOrEqual25 calculated ${isLessOrEqual25}`);

console.log(`this is the isUnique calculated ${isUnique}`);


// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);




// Part 2: Practical Math
const total = 1500;
const fuel55 = 30;
const fuel60 = 28;
const fuel75 = 23;
const budget = 175;
const costPerG = 3;

const gallonsNeeded55 = total / fuel55; 
const gallonsNeeded60 = total / fuel60; 
const gallonsNeeded75 = total / fuel75; 

const budget55 = costPerG * gallonsNeeded55;
const lessThanOrEqualBudget55 = budget55 <= budget;
const budget60 = costPerG * gallonsNeeded60;
const lessThanOtEqualBudget60 = budget60 <= budget;
const budget75 = costPerG * gallonsNeeded75;
const lessThanOrEqualBudget75 = budget75 <= budget;

const time55 = total / 55;
const time60 = total / 60;
const time75 = total / 75;
// i dont see anything after this line
// do u see it now? mobarc

console.log(`Traveling at 55 miles an hour, the trip would take ${time55} hours, you would need ${gallonsNeeded55} gallons, which would cost $${budget55}. It is ${lessThanOrEqualBudget55} that we can afford that.`)

console.log(`Traveling at 60 miles an hour, the trip would take ${time60} hours, you would need ${gallonsNeeded60} gallons, which would cost $${budget60}. It is ${lessThanOtEqualBudget60} that we can afford that.`);
console.log(`Traveling at 75 miles an hour, the trip would take ${time75} hours, you would need ${gallonsNeeded75} gallons, which would cost $${budget75}. It is ${lessThanOrEqualBudget75} that we can afford that.`);


