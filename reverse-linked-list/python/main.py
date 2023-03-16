from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        raise NotImplemented


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

print(case1, case2, case3)
