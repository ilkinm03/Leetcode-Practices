from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def reverse_list(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head
        first = head
        second = head.next
        while second:
            temp = second.next
            second.next = first
            first = second
            second = temp
        head.next = None
        return first


def array_to_linked_list(arr: [int]):
    if not len(arr):
        return None
    list_node = ListNode(arr[0])
    head = list_node
    for i in range(len(arr)):
        head.next = ListNode(arr[i])
        head = head.next
    return list_node


case1 = array_to_linked_list([1, 2, 3, 4, 5])
case2 = array_to_linked_list([1, 2])
case3 = array_to_linked_list([])

print(Solution().reverse_list(case1))
print(Solution().reverse_list(case2))
print(Solution().reverse_list(case3))
