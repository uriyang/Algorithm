// 현수는 1년 과정의 수업계획을 짜야 합니다.
// 수업중에는 필수과목이 있습니다. 이 필수과목은 반드시 이수해야 하며, 그 순서도 정해져 있습니다.
// 필수과목순서가 주어지면 현수가 짠 N개의 수업설계가 잘된 것이면 “YES", 잘못된 것이면 ”NO“를 출력하는 프로그램을 작성하세요.
function solution(need, plan) {
  let queue = need.split("");
  for (let x of plan) {
    if (queue[0] === x) queue.shift();
  }
  return !queue.length ? "YES" : "NO";
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
