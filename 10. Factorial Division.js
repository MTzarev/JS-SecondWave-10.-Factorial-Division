function factorialDivision(num1, num2) {

    let factorial = 1;
    let factorial2=1;

    for (let i = num1; i > 0; i--) {
        factorial *= i;
    }
    for (let j = num2; j>0; j--){
        factorial2*=j;
    }
    console.log((factorial / factorial2).toFixed(2));

}
factorialDivision(6, 2);
