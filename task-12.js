// TASK-1 easy
function validateBrackets(str) {
    var arr = [];
    var obj = {
        "]": "[",
        "}": "{",
        ")": "(",
    };
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var key = str_1[_i];
        if (key == "(" || key == "{" || key == "[") {
            arr.push(key);
        }
        else {
            var last = arr.pop();
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
var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
        this.next = null;
    }
    return ListNode;
}());
function reverseLinkedList(head) {
    var prev = null;
    var current = head;
    while (current !== null) {
        var nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    return prev;
}
var node1 = new ListNode(1);
var node2 = new ListNode(2);
var node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;
function printList(head) {
    var current = head;
    var output = "";
    while (current !== null) {
        output += current.value + " → ";
        current = current.next;
    }
    console.log(output + "null");
}
// console.log("Oldingi tartib:");
// printList(node1);
var reversed = reverseLinkedList(node1);
// console.log("Teskari tartib:");
// printList(reversed);
// --------------------------------------------------------
// TASK-3 easy
function longestConsecutive(nums) {
    var arr = [];
    var max1 = Math.max.apply(Math, nums);
    var min1 = Math.min.apply(Math, nums);
    for (var i = min1; i <= max1; i++) {
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
// TASK-4 easy
var LRUCache = /** @class */ (function () {
    function LRUCache(count) {
        this.count = count;
        this.object2 = new Map();
    }
    LRUCache.prototype.get = function (num) {
        if (!this.object2.has(num)) {
            return -1;
        }
        var val = this.object2.get(num);
        this.object2.delete(num);
        this.object2.set(num, val);
        return val;
    };
    LRUCache.prototype.put = function (key, value) {
        if (this.object2.has(key)) {
            this.object2.set(key, value);
        }
        this.object2.set(key, value);
        if (this.object2.size > this.count) {
            var del = this.object2.keys().next().value;
            this.object2.delete(del);
        }
    };
    LRUCache.prototype.print = function () {
        console.log(this.object2);
    };
    return LRUCache;
}());
var cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
// cache.print()
cache.get(1); // 1
cache.put(3, 3); // Removes key 2
cache.get(2); // -1
// cache.print()
// --------------------------------------------------------
// TASK-5 HARD
var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value,
            this.left = null,
            this.right = null;
    }
    return TreeNode;
}());
function insertIntoBST(root, value) {
    if (root === null) {
        return new TreeNode(value);
    }
    if (value < root.value) {
        root.left = insertIntoBST(root.left, value);
    }
    else {
        root.right = insertIntoBST(root.right, value);
    }
    return root;
}
var root = new TreeNode(10);
insertIntoBST(root, 5);
insertIntoBST(root, 15);
insertIntoBST(root, 8);
// console.log(JSON.stringify(root, null, 2));
// --------------------------------------------------------
// TASK-6 easy
function mergeIntervals(intervals) {
    if (intervals.length == 0)
        return [];
    intervals = intervals.sort(function (a, b) { return a[0] - b[0]; });
    var arr = [];
    var check = intervals[0];
    for (var i = 1; i < intervals.length; i++) {
        var next = intervals[i];
        if (check[1] < next[0]) {
            arr.push(next);
            check = next;
        }
        else {
            arr.push([check[0], next[1]]);
        }
    }
    return arr;
}
// console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]));
// console.log(mergeIntervals([[1, 4], [4, 5]])) // [[1, 5]]
// --------------------------------------------------------
// TASK-7 easy
function moveIndex(arr) {
    var last = arr.pop();
    for (var i = arr.length - 1; i <= 0; i--) {
        arr[i] = arr[i - 1];
    }
    if (last !== undefined) {
        arr.unshift(last);
    }
    return arr;
}
function rotateArray(nums, k) {
    if (nums.length == 0) {
        return [];
    }
    for (var i = 0; i < k; i++) {
        nums = moveIndex(nums);
    }
    return nums;
}
// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));// [5, 6, 7, 1, 2, 3, 4]
// console.log(rotateArray([-1, -100, 3, 99], 2));// [3, 99, -1, -100]
// --------------------------------------------------------
// TASK-8 easy
function findMedianSortedArrays(nums1, nums2) {
    var arr = nums1.concat(nums2);
    var len = arr.length;
    var res = arr.reduce(function (acc, item) { return acc += item; }) / len;
    console.log(res);
    return res;
}
// findMedianSortedArrays([1, 3], [2]);      // 2.0
// findMedianSortedArrays([1, 2], [3, 4]);  // 2.5
// --------------------------------------------------------
// TASK-9 easy
var Queue = /** @class */ (function () {
    function Queue() {
        this.arr = [];
    }
    Queue.prototype.enqueue = function (value) {
        this.arr.push(value);
    };
    Queue.prototype.dequeue = function () {
        if (this.arr.length == 0) {
            return null;
        }
        this.res = this.arr.pop();
        return this.res;
    };
    return Queue;
}());
var que = new Queue();
que.enqueue(1);
que.enqueue(2);
// console.log(que.dequeue());// 1
// console.log(que.dequeue());// 2
// --------------------------------------------------------
// TASK-10
function rotateArray1(nums, k) {
    var res = nums.splice((nums.length - k));
    nums = res.concat(nums);
    return nums;
}
rotateArray1([1, 2, 3, 4, 5, 6, 7], 3); // [5, 6, 7, 1, 2, 3, 4]
rotateArray1([-1, -100, 3, 99], 2); // [3, 99, -1, -100]
