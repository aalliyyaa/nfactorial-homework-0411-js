// // create object

// let user ={}
// user.name = prompt ('what is your name?')
// user.age = prompt ('what is your age?')
// user.sex = prompt ('are you male or female')

// console.log(user);

// task01

let amount = +prompt('How many apples do you have?', '')
if (isNaN(amount)){
    alert ('Its not a number')}

else {alert ('Wow, can you share')}

// task02

let a = +prompt('a?', '');

switch(a){
    case 0:  
    alert( '0');
    break;
    case 1: 
    alert( '1');
    break;
    case 2: 
    alert( '2,3' );
    break;
    case 3: 
    alert( '2,3' );
    default:
    console.log('thats all');
}

// task03
let sum =0;

for(let i=1; i<101;i++){
    if (i%2==0){
        sum+=i
    }
}
console.log (sum)

// task04

let i=0;
while(i<3){
    alert( `number ${i}!` );
    i++;
}

