function lengthOfLastWord(s: string): number {
    return s
        .replace(/\s/g, "")
        .match(/\b(\w+)$/)[0]
        .length || 0;
}

const case1 = lengthOfLastWord("Hello World");
const case2 = lengthOfLastWord("   fly me   to   the moon  ");
const case3 = lengthOfLastWord("luffy is still joyboy");

console.log(case1);
console.log(case2);
console.log(case3);