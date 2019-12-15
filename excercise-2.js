/**
 * @author Rokop, Luke (lrokop14@gmail.com)
 * @version 0.0.1
 * @summary Excercise 2 || created 12-2-19
 *@todo
 */
 "use strict";
const PROMPT = require ('readline-sync');

let policyNum, lastName, firstName, birthDate, premiumDue, accidentNum, age, total;
const BASE = 100;
const YEAR = 2019;
const AGE_15 = 15
const AGE_30 = 30
const AGE_45 = 45
const AGE_46 = 46
const AGE_59 = 59
const AGE_60 = 60
const ADD_1 = 20
const ADD_2 = 10
const ADD_3 = 30
const ADD_FAULT = 50

function main(){
	setFirstName();
	setLastName();
	setBirthDate();
	setPolicyNum();
	setAge();
	setPremiumDue();
	setAccidentNum();
	setTotal();
}

main();

function setFirstName(){
	firstName = PROMPT.question (`\nWhat is your first name? `)
}

function setLastName (){
	lastName = PROMPT.question (`\nWhat is your last name? `)
}

function setBirthDate(){
	birthDate = PROMPT.question (`\nWhat is your Birth Date?`)
}

function setPolicyNum(){
	policyNum = PROMPT.question (`\nWhat is your policy number?`)
}

function setAge(){
	age = PROMPT.question (`\nWhat is your age?`)
}

function setPremiumDue(){
	premiumDue = PROMPT.question (`\nWhat is your premium due date?`)
}

function setAccidentNum(){
	accidentNum = PROMPT.question (`\nHow many at fault accidents have you had in the last three years?`)
}
function setTotal(){
	if(age > AGE_15 && age < AGE_30){
		total = BASE + ADD_1 + (ADD_FAULT * accidentNum)
	}else if( age > AGE_30 && age < AGE_45){
		total = BASE + ADD_2 + (ADD_FAULT * accidentNum)
	}else if(age > AGE_46 && age < AGE_59){
		total = BASE + (ADD_FAULT * accidentNum)
	}else if(age >= AGE_60){
		total = base + ADD_3(ADD_FAULT * accidentNum)
	}else{
		console.log(`tough luck buckaroo, you're too young to drive.`)
	}
	console.log(`${firstName} ${lastName} your total is ${total}`)
}