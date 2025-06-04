// TASK-1
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
// TASK-3
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
