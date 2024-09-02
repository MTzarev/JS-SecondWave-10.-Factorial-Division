function newFactorial(num1, num2) {

    function calculateFact(num) {
        let res = 1
        for (let i = num; i > 0; i--) {
            res *= i;
        }
        return res;
    }
let factorial1 = calculateFact(num1);
let factorial2 = calculateFact(num2);
let final = factorial1/factorial2;
    console.log(final.toFixed(2));
}
newFactorial(6, 2);
