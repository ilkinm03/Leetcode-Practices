var solution = function (isBadVersion: any) {
    return function (n: number): number {
        let left: number = 0,
            right: number = n;
        while (left < right) {
            const mid: number = left + Math.floor((right - left) / 2);
            if (isBadVersion(mid)) right = mid;
            else left = mid + 1;
        }
        return left;
    };
};