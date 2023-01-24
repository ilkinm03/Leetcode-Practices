function mySqrt(x: number): number {
    if (x < 2) return x;
    let l = 0,
        r = x;
    while(l < r) {
        const mid = Math.floor((l + r) / 2);
        if (x === Math.pow(mid, 2)) return mid;
        if (x < Math.pow(mid, 2)) r = mid;
        else l = mid + 1;
    }
    return l - 1;
};

const case1 = mySqrt(4);
const case2 = mySqrt(8);

console.log(case1);
console.log(case2);