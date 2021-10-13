let numb1 = 2;
let numb2 = 5;
let numb3 = 8;
let numb4 = 9;
let numb5 = 17;
let numb6 = 11232137;

function iSItAPrimeNumber(numb) {
    let count = 0;
    for (let i = 2; i <= numb-1; i++){
        
        let divisior = numb % i;
        if (divisior === 0) {
            count = count +1;
        }}
        
        
        if  (count === 0){console.log(numb + " is a prime number");
        } else {
            console.log(numb + " is not a prime number");
        }
    
}

iSItAPrimeNumber(numb1);
iSItAPrimeNumber(numb2);
iSItAPrimeNumber(numb3);
iSItAPrimeNumber(numb4);
iSItAPrimeNumber(numb5);
iSItAPrimeNumber(numb6);