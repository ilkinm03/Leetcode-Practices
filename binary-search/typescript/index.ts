function search(nums: number[], target: number): number {
    let left: number = 0,
        right: number = nums.length - 1;
    while (left <= right) {
        const mid: number = Math.floor((right + left) / 2);
        if (target === nums[mid]) return mid;
        if (target < nums[mid]) right = mid - 1;
        else left = mid + 1;
    }
    return -1;
}

const case1 = search([-1, 0, 3, 5, 9, 12], 9);
const case2 = search([-1, 0, 3, 5, 9, 12], 2);

console.log(case1);
console.log(case2);