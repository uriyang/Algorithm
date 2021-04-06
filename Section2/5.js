// N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.
function solution(arr) {
  const tempArray = arr.slice().sort((a, b) => a - b);
  const answer = arr.map((item) => tempArray.indexOf(item) + 1);
  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
