//UC1 Check Employee Attendance
console.log("******Attendance Use case******");
const IS_ABSENT=0
//gives a random value between 0 and 1
let empCheck=Math.floor(Math.random()*10)%2;
if(empCheck==IS_ABSENT)
{
    console.log("Employee is Absent");
}
else
{
    console.log("Employee is Present");
}

//UC-3 function that returns the emp hrs based on full time and part time
console.log("***UC2 calculate daily emp wage based on part time and full time and absent***")
console.log("***Refactored UC-2 for UC-3 Function that returns the emp hrs based on full time and part time***");
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HRS=4;
const FULL_TIME_HRS=8;
const WAGE_PER_HR=20;
empCheck=Math.floor(Math.random()*10)%3;
function getWorkinghours(empCheck){
switch(empCheck)
{
    case IS_PART_TIME:
        console.log("Part Time")
        empHrs=PART_TIME_HRS;
        break;
    case IS_FULL_TIME:
        console.log("Full Time")
        empHrs=FULL_TIME_HRS;
         break;
    default:
        console.log("Absent")
        empHrs=0;
        break;
   
}
}
let empHrs1=0;
let empWage1=0;
empHrs1=getWorkinghours(empCheck);
empWage1=empHrs*WAGE_PER_HR;
console.log("Emp Wage : "+empWage1);