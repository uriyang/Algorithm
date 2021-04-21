// N개의 수로 이루어진 수열이 주어집니다.
// 이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
// 만약 N=8, M=6이고 수열이 다음과 같다면
// 12131112
// 합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다.
function solution(m, arr) {
  let answer = 0;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let sum = arr[i];
    for (let j = i + 1; j < len; j++) {
      sum += arr[j];
      if (sum === m) {
        answer++;
      } else if (sum > m) {
        break;
      }
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
