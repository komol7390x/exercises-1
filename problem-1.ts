function validateBrackets(str: string): boolean {
    const res: string[] = [];
    const obj: { [key: string]: string } = {
      ')': '(',
      ']': '[',
      '}': '{'
    };
  
    for (let char of str) {
      if (char === '(' || char === '[' || char === '{') {
        res.push(char);
      } else {
        const last = res.pop();
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