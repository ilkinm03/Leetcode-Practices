function climbStairs(n: number): number {
    if (n === 1) return 1;
    const arr = new Uint32Array(n);
    arr[0] = 1;
    arr[1] = 2;
    for (let i = 2; i < n; i++)
        arr[i] = arr[i - 2] + arr[i - 1];
    return arr[n - 1];
}

const case1 = climbStairs(2);
const case2 = climbStairs(3);

console.log(case1);
console.log(case2);