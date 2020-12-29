
function balancedBraces(str) {
  if(!str) {
    throw TypeError("Input string cannot be empty")
  }
  
  let symbols = {
    '{' : '}',
    "[" : ']',
    '(' : ')',
  }   
  
  let openingBrackets = [ '{', '[', '(' ];
  let closingBrackets = [ '}', ']', ')' ]; 

  let stack = [];
  
  for(let i = 0; i < str.length; i++) {
    if(openingBrackets.includes(str[i])) {
      stack.push(str[i]);
    } else if ( closingBrackets.includes(str[i])) {
        let popped = stack.pop();
        if(str[i] === symbols[popped])
            continue;
        else
            return false;
    }
  }
  if(stack.pop())
    return false;
  else
    return true;
}

module.exports = {
  balancedBraces,
}; 
