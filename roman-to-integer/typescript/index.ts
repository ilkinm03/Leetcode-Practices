function romanToInt(s: string): number {
    const ROMAN_NUMS = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    let i = 0,
        j = i + 1
    let int = 0;
    while (i < s.length) {
        if (ROMAN_NUMS[s[i]] < ROMAN_NUMS[s[j]]){
            int -= ROMAN_NUMS[s[i]];
        } else {
            int += ROMAN_NUMS[s[i]];
        }
        i++;
        j++;
    }
    return int;
};

const case1 = romanToInt("III");
const case2 = romanToInt("LVIII");
const case3 = romanToInt("MCMXCIV");

console.log(case1);
console.log(case2);
console.log(case3);
