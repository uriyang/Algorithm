// 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.
function solution(s) {
  let answer = "";
  let count = 0;

  for (let x of s) {
    if (x === "(") {
      count++;
    } else if (x === ")") {
      count--;
    } else if (count === 0) {
      answer += x;
    }
  }
  return answer;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
