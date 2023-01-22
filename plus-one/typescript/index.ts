function plusOne(digits: number[]): number[] {
    let l = digits.length;
    while (l > 0) {
        l--;
        if (digits[l] === 9) {
            digits[l] = 0
        } else {
            digits[l]++;
            return digits;
        }
    }
    return [1].concat(digits);
};

const case1 = plusOne([1, 2, 3]);
const case2 = plusOne([4, 3, 2, 1]);
const case3 = plusOne([9]);

console.log(case1);
console.log(case2);
console.log(case3);