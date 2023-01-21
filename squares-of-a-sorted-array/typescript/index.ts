function sortedSquares(nums: number[]): number[] {
    let updatedArray = Array(nums.length);
    let l = 0,
        r = nums.length - 1;
    while (l <= r) {
        const left = Math.abs(nums[l]);
        const right = Math.abs(nums[r]);
        if (left <= right) {
            updatedArray[r - l] = right ** 2;
            r--;
        } else {
            updatedArray[r - l] = left ** 2;
            l++;
        }
    }
    return updatedArray;
}

const case1 = sortedSquares([-4,-1,0,3,10]);
const case2 = sortedSquares([-7,-3,2,3,11]);

console.log(case1);
console.log(case2);