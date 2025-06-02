// function validateBrackets(str: string): boolean {
//   const arr: string[] = [];
//   const obj: { [key: string]: string } = {
//     "]": "[",
//     "}": "{",
//     ")": "(",
//   };
//     for (let key of str) {
//       console.log(arr);
//     if (key == "(" || key == "{" || key == "[") {
//       arr.push(key);
//     } else {
//       const last = arr.pop();
//       if (last != obj[key]) {
//         return false;
//       }
//     }
//   }
//   return arr.length == 0;
// }
// console.log(validateBrackets("()[]{}"));
// console.log(validateBrackets("([)]"));
// console.log(validateBrackets("{[]}"));
// --------------------------------------------------------
// TASK-2
// class ListNode {
//     value: number;
//     next: ListNode | null;
//     constructor(value: number) {
//       this.value = value;
//       this.next = null;
//     }
//   }
//   function reverseLinkedList(head: ListNode | null): ListNode | null {
//     let prev: ListNode | null = null;
//     let current: ListNode | null = head;
//     while (current !== null) {
//       const nextNode: ListNode | null = current.next;
//       current.next = prev;
//       prev = current;
//       current = nextNode;
//     }
//     return prev;
//   }
//   const node1 = new ListNode(1);
//   const node2 = new ListNode(2);
//   const node3 = new ListNode(3);
//   node1.next = node2;
//   node2.next = node3;
//   function printList(head: ListNode | null): void {
//     let current = head;
//     let output = "";
//     while (current !== null) {
//       output += current.value + " → ";
//       current = current.next;
//     }
//     console.log(output + "null");
//   }
//   console.log("Oldingi tartib:");
//   printList(node1);
// const reversed = reverseLinkedList(node1);
//   console.log("Teskari tartib:");
//   printList(reversed);
// --------------------------------------------------------
// TASK-3
// function longestConsecutive(nums: number[]): number {
//     let arr:number[]=[]
//     const max1:number = Math.max(...nums);
//     const min1: number = Math.min(...nums);
//     for (let i = min1; i <= max1; i++){
//         if (!(nums.includes(i))) {
//             return arr.length
//         }
//         arr.push(i)
//     }
//     return arr.length
// }
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));//4
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));//8
// --------------------------------------------------------
// TASK-4
// class LRUCache {
//     private capacity: number;
//     private cashe: Map<number, number>;
//   constructor(capacity: number) {
//       this.capacity = capacity;
//       this.cashe=new Map()
//   }
//   get(key: number): number {
//       if (!this.cashe.has(key)) {
//         return -1
//       }
//       const value = this.cashe.get(key)!;
//       this.cashe.delete(key);
//       this.cashe.set(key, value);
//       return value
//   }
//   put(key: number, value: number): void {
//       if (this.cashe.has(key)) {
//         this.cashe.delete(key);
//       }
//       this.cashe.set(key, value);
//       if (this.cashe.size > this.capacity) {
//           const firstKey: number  = this.cashe.keys().next().value;
//           console.log(firstKey);
//                     this.cashe.delete(firstKey)
//       }
//     }
//     print(): void{
//         console.log("Kesh: ",(this.cashe));
//     }
// }
var LRUCache = /** @class */ (function () {
    function LRUCache(count) {
        this.count = count;
        this.map1 = new Map();
    }
    LRUCache.prototype.get = function (num) {
        if (!this.map1.has(num)) {
            return -1;
        }
        var val = this.map1.get(num);
        this.map1["delete"](num);
        this.map1.set(num, val);
        return val;
    };
    LRUCache.prototype.put = function (key, value) {
        if (this.map1.has(key)) {
            this.map1.set(key, value);
        }
        this.map1.set(key, value);
        if (this.map1.size > this.count) {
            var del = this.map1.keys().next().value;
            this.map1["delete"](del);
        }
    };
    LRUCache.prototype.print = function () {
        console.log("Kesh: " + Array.from(Object.entries(this.map1)));
    };
    return LRUCache;
}());
var cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
cache.print();
cache.get(1); // 1
cache.put(3, 3); // Removes key 2
cache.get(2); // -1
