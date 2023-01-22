function isPalindrome(x: number): boolean {
    const numStr = x.toString();
    const ptr = numStr.length
    for (let i = 0; i < ptr; i++) {
        if (numStr[i] !== numStr[ptr - i - 1]) {
            return false;
        }
    }
    return true;
};

const case1 = isPalindrome(121);
const case2 = isPalindrome(-121);
const case3  = isPalindrome(10);

console.log(case1);
console.log(case2);
console.log(case3);