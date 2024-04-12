"use strict";

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP

// // Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// // // // Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovements = function (movements) {
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `<div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

displayMovements(account1.movements);

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map(function (name) {
        return name[0];
      })
      .join("");
  });
};

createUserNames(accounts);

btnLogin.addEventListener('click',function(e){
    e.preventDefault();
    console.log('Login!');
})

const calcPrintBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};

calcPrintBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * 1.2) / 100)
    .filter((int,i,arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`
};

calcDisplaySummary(account1.movements);

const eurToUsd = 1.1;

// const totalDepositsUSD = movements
//   .filter((mov) => mov > 0)
//   .map((mov) => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

// const movementsUsd = movements.map(function (mov)   {
//   return mov * eurToUsd;
// });

const movementsUsd = movements.map((mov) => mov * eurToUsd);

console.log(movements);
console.log(movementsUsd);

const movementsUsdFor = [];
for (const mov of movements) movementsUsdFor.push(mov * eurToUsd);

const movementDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1} : You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

// console.log(movements);
// console.log(deposits);

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});
// console.log(withdrawals);

// let juliasData = [9, 16, 6, 8, 3];
// let katesData = [10, 5, 6, 1, 4];
// let allDogs = [...juliasData,...katesData];
// let adultDogs = [];
// function checkDog(dogsJulia,dogsKate) {
//   let correctedJulia = dogsJulia.slice(1, 3);
//   console.log(correctedJulia);
//   console.log(dogsJulia);

//   let allAges = [...correctedJulia, ...dogsKate];
//   console.log(allAges);

//   allAges.forEach(function (age, i) {
//     if (age >= 3) {
//       console.log(`Dog Number ${i + 1} is adult, and is ${age} years old!`);
//       adultDogs.push(age);
//     }
//   });
// }

// checkDog(juliasData,katesData);
// console.log(adultDogs);

// let dogsInHumanAge = [];
// // let calcAverageHumanAge =
// let humanAge ;
// allDogs.forEach((dogAge,i) => {
//   if(dogAge <= 2){
//     console.log(`Dog ${i+1} age in human years = ${ 2 * dogAge}`);
//   }
//   dogsInHumanAge.push(16 + dogAge * 4)
//   console.log(`Dog ${i+1} age in human  years = ${ 16 + dogAge * 4} `);
// })

// console.log(dogsInHumanAge);
// let totalOfAge = 0;

// dogsInHumanAge.forEach((dogAge) => {
//   totalOfAge = totalOfAge + dogAge;
// })

// console.log(totalOfAge)
// let averageHumanAge = totalOfAge/dogsInHumanAge.length;
// console.log(averageHumanAge);
