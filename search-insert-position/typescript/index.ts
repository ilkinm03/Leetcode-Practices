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