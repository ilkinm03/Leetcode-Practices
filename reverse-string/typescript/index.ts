function reverseString(s: string[]): void {
    let i = 0,
        j = s.length - 1;
    while (i < j) {
        const temp = s[j];
        s[j] = s[i]
        s[i] = temp;
        i++;
        j--;
    }
}

const case1 = ["h","e","l","l","o"];
const case2 = ["H","a","n","n","a","h"];

reverseString(case1);
reverseString(case2);

console.log(case1);
console.log(case2);