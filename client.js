class Employee{
  constructor( name, employeeNumber, annualSalary, reviewRating ){
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  } // end constructor
} // end Employee class

const atticus = new Employee( 'Atticus', '2405', '47000', 3 ); // this creates a new object
const jem = new Employee( 'Jem', '62347', '63500', 4 );
const scout =  new Employee( 'Scout', '6243', '74750', 5 );
const robert =  new Employee( 'Robert', '26835', '66000', 1 );
const mayella =  new Employee( 'Mayella', '89068', '35000', 2 );

const employees = [ atticus, jem, scout, robert, mayella ]; // this is an array of objects

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

/*

Loop over the employees array and do the following:

use each Employee object as the input to the function described below.
console.log the results of each iteration.
*/


function newEmployeeInfo(employee){
  let newEmployeeInfo = {
    name: employee.name,
    bonusPercentage: getBonusPercentage(employee.reviewRating,employee.annualSalary, employee.employeeNumber),
    totalCompensation: parseInt(employee.annualSalary) + (parseInt(employee.annualSalary) * getBonusPercentage(employee.reviewRating,employee.annualSalary, employee.employeeNumber)),
    totalBonus: Math.floor(parseInt(employee.annualSalary) * getBonusPercentage(employee.reviewRating,employee.annualSalary, employee.employeeNumber))  }

    console.log('');
    
    return newEmployeeInfo; 
}

function getBonusPercentage(rating,income,employeeNumber){
  let bonus = 0;



  if(rating == 3){
    bonus = 0.04;
    
  }
  else if(rating == 4){
    bonus = 0.06;
  }
  else if(rating == 5){
    bonus = 0.10;
  }

  if(employeeNumber.length == 4){
    bonus += .05;
  }
  if(income >= 65000 ){
    bonus -= .01
  }

  if(bonus > .13){
    bonus = .13;
  }
  if(bonus < 0){
    bonus = 0;
  }
  return bonus;
}

/*
Put the output on the DOM (visually on the page).
Make the app run only after the user clicks on a button on the page
Then style the output, making it visually appealing
*/

$(function(){
  $('#startButton').on('click',function(){
    for (let employee of employees) {
      let newInfo = newEmployeeInfo(employee);
      console.log(newInfo);
      $(`body`).append(`<h2 class = employee> [Name]: ${newInfo.name} [Bonus Percentage]: ${newInfo.bonusPercentage}  [Total Compensation]: ${newInfo.totalCompensation} [Total Bonus] ${newInfo.totalBonus} </h2>`);
    }
  })
})