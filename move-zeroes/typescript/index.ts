function moveZeroes(nums: number[]): void {
    let i = 0,
        j = 0,
        n = nums.length;
    while (j < n) {
        if (nums[j] !== 0) {
            nums[i] = nums[j];
            i++;
        }
        j++;
    }
    while(i < n) {
        nums[i] = 0;
        i++;
    }
}

const case1 = [0,1,0,3,12];
const case2 = [0];

moveZeroes(case1);
moveZeroes(case2);

console.log(case1);
console.log(case2);