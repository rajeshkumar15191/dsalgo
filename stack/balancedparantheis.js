const Stack = require("./../linkedlist/stack");

function balanceSymbol(s) {
  let st = new Stack();
  for (let ch of s) {
    if (ch == "(" || ch == "{" || ch == "[") {
      st.push(ch);
      continue;
    }
    if (st.length == 0) {
      return false;
    }
    let check;
    switch (ch) {
      case ")":
        check = st.pop();
        if (check == "{" || check == "[") {
          return false;
        }
        break;
      case "]":
        console.log("ch--", ch);
        check = st.pop();
        if (check == "{" || check == "(") {
          return false;
        }
        break;
      case "}":
        check = st.peek();
        if (check == "(" || check == "[") {
          return false;
        }
        break;
    }
  }
  return st.length == 0 ? true : false;
}
console.log(balanceSymbol("[]"));
