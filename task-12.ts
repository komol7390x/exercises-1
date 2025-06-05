// TASK-1 easy
function validateBrackets(str: string): boolean {
  const arr: string[] = [];
  const obj: { [key: string]: string } = {
    "]": "[",
    "}": "{",
    ")": "(",
  };

    for (let key of str) {
    if (key == "(" || key == "{" || key == "[") {
      arr.push(key);
    } else {
      const last = arr.pop();
      if (last != obj[key]) {
        return false;
      }
    }
  }
  return arr.length == 0;
}
// console.log(validateBrackets("()[]{}"));
// console.log(validateBrackets("([)]"));
// console.log(validateBrackets("{[]}"));
// --------------------------------------------------------
// TASK-2   -HARD
class ListNode {
    value: number;
    next: ListNode | null;
  
    constructor(value: number) {
      this.value = value;
      this.next = null;
    }
  }
  function reverseLinkedList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let current: ListNode | null = head;
  
    while (current !== null) {
      const nextNode: ListNode | null = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }
    return prev;
  }
  const node1 = new ListNode(1);
  const node2 = new ListNode(2);
  const node3 = new ListNode(3);
  node1.next = node2;
  node2.next = node3;
  function printList(head: ListNode | null): void {
    let current = head;
    let output = "";
    while (current !== null) {
      output += current.value + " → ";
      current = current.next;
    }
    console.log(output + "null");
  }
  // console.log("Oldingi tartib:");
  // printList(node1);
  const reversed = reverseLinkedList(node1);
  // console.log("Teskari tartib:");
  // printList(reversed);
  // --------------------------------------------------------
// TASK-3 easy
function longestConsecutive(nums: number[]): number {
    let arr:number[]=[]
    const max1:number = Math.max(...nums);
    const min1: number = Math.min(...nums);
    for (let i = min1; i <= max1; i++){
        if (!(nums.includes(i))) {
            return arr.length
        }
        arr.push(i)
    }
    return arr.length
}
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));//4
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));//8
// --------------------------------------------------------
// TASK-4 easy
class LRUCache {
  count: number
  object2: Map<number, number>
  constructor(count: number) {
    this.count = count;
    this.object2 = new Map()
  }
  get(num: number) {
    if (!this.object2.has(num)) {
      return -1
    }
    let val: any = this.object2.get(num);
    this.object2.delete(num);
    this.object2.set(num, val)
    return val
  }
  put(key: number, value: number) {
    if (this.object2.has(key)) {
      this.object2.set(key, value);
    }
    this.object2.set(key, value);
    if (this.object2.size > this.count) {
      let del: any = this.object2.keys().next().value;
      this.object2.delete(del)
    }
  }
  print() {
    console.log(this.object2);
  }
}
const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
// cache.print()
cache.get(1); // 1
cache.put(3, 3); // Removes key 2
cache.get(2); // -1
// cache.print()
// --------------------------------------------------------
// TASK-5 HARD
class TreeNode {
  value: number;
  left: number | null| object;
  right: number | null;
  constructor(value:number) {
    this.value = value,
    this.left = null,
    this.right = null
  }
}
function insertIntoBST(root:object, value:number) {
  if (root === null) {
    return new TreeNode(value);
  }
  if (value < root.value) {
    root.left = insertIntoBST(root.left, value);
  } else {
    root.right = insertIntoBST(root.right, value);
  }

  return root;
}
let root = new TreeNode(10);
insertIntoBST(root, 5);
insertIntoBST(root, 15);
insertIntoBST(root, 8);

// console.log(JSON.stringify(root, null, 2));
// --------------------------------------------------------
// TASK-6 easy
function mergeIntervals(intervals: number[][]): number[][] {
  if (intervals.length == 0) return [];
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  const arr = [];
  let check=intervals[0]
  for (let i = 1; i < intervals.length; i++) {
    const next = intervals[i];
    if (check[1] < next[0]) {
      arr.push(next);
      check=next
    } else {
      arr.push([check[0],next[1]])
    }
  }
  return arr
}
// console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]));
// console.log(mergeIntervals([[1, 4], [4, 5]])) // [[1, 5]]
// --------------------------------------------------------
// TASK-7 easy
function moveIndex(arr: number[]): number[] {
  let last: number | undefined = arr.pop();
  for (let i = arr.length-1; i <=0; i--) {
    arr[i] = arr[i-1];
  }
  if (last !== undefined) {
    arr.unshift(last);
  }
  return arr;
}
function rotateArray(nums: number[], k: number): number[] {
  if (nums.length == 0) {
    return []
  }
  for (let i = 0; i < k; i++){
    nums=moveIndex(nums);
  }
  return nums
}
// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));// [5, 6, 7, 1, 2, 3, 4]
// console.log(rotateArray([-1, -100, 3, 99], 2));// [3, 99, -1, -100]
// --------------------------------------------------------
// TASK-8 easy
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let arr = nums1.concat(nums2);
  let len=arr.length
  let res = arr.reduce((acc, item) => acc += item) / len;
  console.log(res);
}
// findMedianSortedArrays([1, 3], [2]);      // 2.0
// findMedianSortedArrays([1, 2], [3, 4]);  // 2.5
// --------------------------------------------------------
// TASK-9 easy
class Queue {
  public res: number;
  public arr:number[]=[]
  enqueue(value: number): void {
    this.arr.push(value)
  }
  dequeue(): number | null {
    if (this.arr.length == 0) {
      return null
    }
    this.res = this.arr.pop()
    return this.res
  }
}
const que = new Queue();
que.enqueue(1);
que.enqueue(2);
// console.log(que.dequeue());// 1
// console.log(que.dequeue());// 2
// --------------------------------------------------------
// TASK-10


function rotateArray1(nums: number[], k: number): number[] {
  let res = nums.splice((nums.length-k));
  nums=res.concat(nums);
  return nums
}

rotateArray1([1, 2, 3, 4, 5, 6, 7], 3); // [5, 6, 7, 1, 2, 3, 4]
rotateArray1([-1, -100, 3, 99], 2);     // [3, 99, -1, -100]