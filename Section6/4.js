// 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
// 만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.
function solution(s) {
  let stack = [];
  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      const rt = stack.pop();
      const lt = stack.pop();
      stack.push(eval(lt + x + rt));
    }
  }
  return stack[0];
}

let str = "352+*9-";
console.log(solution(str));
