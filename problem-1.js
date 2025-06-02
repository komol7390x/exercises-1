function validateBrackets(str) {
    var res = [];
    var obj = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (char === '(' || char === '[' || char === '{') {
            res.push(char);
        }
        else {
            var last = res.pop();
            if (last !== obj[char]) {
                return false;
            }
        }
    }
    return res.length === 0;
}
console.log(validateBrackets("()"));
console.log(validateBrackets("()[]{}"));
console.log(validateBrackets("(]"));
console.log(validateBrackets("([)]"));
console.log(validateBrackets("{[]}"));
