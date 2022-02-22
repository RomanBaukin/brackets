module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openBrackets = [];
  const bracketsPair = {};

  bracketsConfig.forEach((item) => {
    openBrackets.push(item[0]);
    bracketsPair[item[1]] = item[0];
  });

  for (let i = 0; i < str.length; i++) {
    const currentSymbol = str[i];

    if (openBrackets.includes(currentSymbol) && Object.keys(bracketsPair).includes(currentSymbol)) {
      if (stack[stack.length - 1] === currentSymbol) {
        stack.pop();
      } else {
        stack.push(currentSymbol);
      }
    } else if (openBrackets.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }
      if (bracketsPair[currentSymbol] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}