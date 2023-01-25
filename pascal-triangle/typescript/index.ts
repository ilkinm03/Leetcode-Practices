function generate(numRows: number): number[][] {
    if (numRows === 1) return [[1]];
    const triangleArr = new Array(numRows);
    triangleArr[0] = new Uint32Array([1]);
    triangleArr[1] = new Uint32Array([1, 1]);
    for (let i = 2; i < numRows; i++) {
        const newRowArr = new Uint32Array(i + 1);
        for (let j = 1; j <= numRows; j++) {
            if (triangleArr[i - 1]) {
                newRowArr[0] = 1;
                newRowArr[newRowArr.length - 1] = 1;
                newRowArr[j] = triangleArr[i - 1][j - 1] + triangleArr[i - 1][j]
            }
            triangleArr[i] = newRowArr;
        }
    }
    return triangleArr;
}

const case1 = generate(5);
const case2 = generate(1);

console.log(case1);
console.log(case2);