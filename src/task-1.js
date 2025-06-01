"use strict";
function validateBrackets(str) {
    const arr = [];
    const obj = {
        "]": "[",
        "}": "{",
        ")": "(",
    };
    for (let key of str) {
        console.log(arr);
        if (key == "(" || key == "{" || key == "[") {
            arr.push(key);
        }
        else {
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
// TASK-2
class ListNode {
    value;
    next;
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
        const nextNode = current.next;
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
function printList(head) {
    let current = head;
    let output = "";
    while (current !== null) {
        output += current.value + " → ";
        current = current.next;
    }
    console.log(output + "null");
}
//   console.log("Oldingi tartib:");
//   printList(node1);
const reversed = reverseLinkedList(node1);
//   console.log("Teskari tartib:");
//   printList(reversed);
// --------------------------------------------------------
// TASK-3
function longestConsecutive(nums) {
    let arr = [];
    const max1 = Math.max(...nums);
    const min1 = Math.min(...nums);
    for (let i = min1; i <= max1; i++) {
        if (!(nums.includes(i))) {
            return arr.length;
        }
        arr.push(i);
    }
    return arr.length;
}
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));//4
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));//8
// --------------------------------------------------------
// TASK-4
class LRUCache {
    capacity;
    cashe;
    constructor(capacity) {
        this.capacity = capacity;
        this.cashe = new Map();
    }
    get(key) {
        if (!this.cashe.has(key)) {
            return -1;
        }
        const value = this.cashe.get(key);
        this.cashe.delete(key);
        this.cashe.set(key, value);
        return value;
    }
    put(key, value) {
        if (this.cashe.has(key)) {
            this.cashe.delete(key);
        }
        this.cashe.set(key, value);
        if (this.cashe.size > this.capacity) {
            const firstKey = this.cashe.keys().next().value;
            this.cashe.delete(firstKey);
        }
    }
    print() {
        console.log("Kesh: ", (this.cashe));
    }
}
const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
cache.print();
cache.get(1); // 1
cache.put(3, 3); // Removes key 2
cache.get(2); // -1
