module.exports = function check(str, bracketsConfig) {
  // your solution
  
  let brackets = {
    status: true,
    lastChar: null,
    data: str.split(''),
    prviusChars: [], 
    bracket: {
      ')': '(',
      ']': '[',
      '}': '{',
      '|': '|',
    }
  }
  console.log(brackets.data)
  brackets.data.forEach(thisChar => {
    if (brackets.bracket[thisChar] === brackets.lastChar) {
      brackets.lastChar = brackets.prviusChars.shift()
    } else if ((thisChar === '(') || (thisChar === '[') || (thisChar === '{' || thisChar === '|')) {
      brackets.prviusChars.unshift(brackets.lastChar)
      brackets.lastChar = thisChar
    } else if (brackets.bracket[thisChar] != brackets.lastChar) {
      brackets.status = false
    }
  });
  if ((brackets.status === false) || (brackets.lastChar != null)) {
    return false
  }
  return true
}
