function longestCommonPrefix(strs: string[]): string {
    if (!strs[0] || strs.length === 1) return strs[0] || "";
    let i: number = 0;
    while(strs[0][i] && strs.every(str => str[i] === strs[0][i])) {
        i++;
    }
    return strs[0].substring(0, i);
}

const case1 = longestCommonPrefix(["flower","flow","flight"]);
const case2 = longestCommonPrefix(["dog","racecar","car"]);

console.log(case1);
console.log(case2);