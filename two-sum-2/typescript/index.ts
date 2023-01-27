function twoSum(numbers: number[], target: number): number[] {
    let i = 0,
        j = numbers.length - 1;
    while (
        numbers[j] > target
        && numbers[j] !== numbers[j - 1]
        && numbers[i] + numbers[j] !== target
        ) j--;
    while (numbers[i] + numbers[j] !== target) {
        if (numbers[i] + numbers[j] > target) j--;
        else i++;
    }
    return [i + 1, j + 1];
}

const case1 = twoSum([2, 3, 4], 6);
const case2 = twoSum([-1, 0], -1);
const case3 = twoSum([-1, -1, 1, 1, 1, 1, 1, 1, 1, 1,], -2)

console.log(case1);
console.log(case2);
console.log(case3);