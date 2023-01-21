function searchInsert(nums: number[], target: number): number {
    let left: number = 0,
        right: number = nums.length - 1;
    while (left <= right) {
        const mid: number = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        else if (target > nums[mid]) left = mid + 1;
        else right = mid - 1;
    }
    return right + 1;
}

const case1 = searchInsert([1, 3, 5, 6], 5);
const case2 = searchInsert([1, 3, 5, 6], 2);
const case3 = searchInsert([1, 3, 5, 6], 7);

console.log(case1);
console.log(case2);
console.log(case3);