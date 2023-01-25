function rotate(nums: number[], k: number): void {
    const rotation = k > nums.length ? k % nums.length : k;
    const subArr = nums.splice(-rotation);
    nums.unshift(...subArr)
};

const case1 = [1,2,3,4,5,6,7]
const case2 = [-1,-100,3,99];

rotate(case1, 3)
rotate(case2, 2);

console.log(case1);
console.log(case2)
