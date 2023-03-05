class Solution:
    def add_binary(self, a: str, b: str) -> str:
        res = ""
        carry = 0
        a, b = a[::-1], b[::-1]
        for i in range(max(len(a), len(b))):
            digit_a = ord(a[i]) - ord("0") if i < len(a) else 0
            digit_b = ord(b[i]) - ord("0") if i < len(b) else 0
            total = digit_a + digit_b + carry
            char = str(total % 2)
            res = char + res
            carry = total // 2
        if carry:
            res = "1" + res
        return res


case_1 = Solution().add_binary("11", "1")
case_2 = Solution().add_binary("1010", "1011")

print(case_1)
print(case_2)
