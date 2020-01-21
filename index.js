
let hacker1 = 'Caio';
let hacker2 = 'Raissa';
let strCompare = hacker1.length;


//ITERATION 1: Names and Input
console.log("The driver's name is", hacker1);
console.log("The navigator's name is", hacker2);


hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();

if(strCompare<hacker2.length){
    strCompare = hacker2.length;
}

for(let i=0; i<(strCompare); i++){
    if (hacker1[i]<hacker2[i]){
        console.log(hacker1[i] + ' vem ANTES que ' + hacker2[i]);
        console.log(hacker1, ' vem ANTES que ', hacker2);
        break;
    } else if (hacker1[i]>hacker2[i]){
        console.log(hacker1[i] + ' vem DEPOIS que ' + hacker2[i]);
        console.log(hacker2, ' vem ANTES que ', hacker1);
        break;
    } else if(hacker1[i]===undefined){
        console.log(hacker1, ' vem ANTES que ', hacker2);
        break;
    } else if (hacker2[i]===undefined){
        console.log(hacker2, ' vem ANTES que ', hacker1);
        break;
    } else {
        console.log(hacker1[i], hacker2[i]);
    }
}
