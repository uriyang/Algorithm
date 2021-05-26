// 10진수 N이 입력되면 2진수로 변환하여 출력하는 프로그램을 작성하세요. 단 재귀함수를 이용 해서 출력해야 합니다.
function solution(n) {
  let answer = "";
  function divide(n) {
    console.log("n: ", n);
    if (n === 0) return;
    else {
      divide(parseInt(n / 2));
      answer += String(n % 2);
    }
  }
  divide(n);
  return answer;
}

console.log(solution(11));
