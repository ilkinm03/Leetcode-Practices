class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (
      val === undefined ? 0 : val
    );
    this.next = (
      next === undefined ? null : next
    );
  }
}


function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  let first = head;
  let second = head.next;
  while (second) {
    const temp = second.next;
    second.next = first;
    first = second;
    second = temp;
  }
  head.next = null;
  return first;
}

function arrayToLinkedList(arr: number[]) {
  if (!arr.length) return null;
  const listNode = new ListNode(arr[0]);
  let head = listNode;
  for (let i = 1; i < arr.length; i++) {
    head.next = new ListNode(arr[i]);
    head = head.next;
  }
  return listNode;
}

const case1 = arrayToLinkedList([1, 2, 3, 4, 5]);
const case2 = arrayToLinkedList([1, 2]);
const case3 = arrayToLinkedList([]);

console.log(reverseList(case1));
console.log(reverseList(case2));
console.log(reverseList(case3));
