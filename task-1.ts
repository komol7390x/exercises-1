function validateBrackets(str: string): boolean {
  const arr: string[] = [];
  const obj: { [key: string]: string } = {
    "]": "[",
    "}": "{",
    ")": "(",
  };

    for (let key of str) {
      console.log(arr);
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
console.log(validateBrackets("()[]{}"));
// console.log(validateBrackets("([)]"));
// console.log(validateBrackets("{[]}"));
