// N개의 수로 이루어진 수열이 주어집니다.
// 이 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그 램을 작성하세요.
// 만약 N=5, M=5이고 수열이 다음과 같다면
// 13123
// 합이 5이하가 되는 연속부분수열은 {1}, {3}, {1}, {2}, {3}, {1, 3}, {3, 1}, {1, 2}, {2, 3}, {1, 3, 1}로 총 10가지입니다.
function checkSum(sum, m) {
  return sum <= m ? true : false;
}

function solution(m, arr) {
  let answer = 0;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let sum = arr[i];
    answer += checkSum(sum, m);

    for (let j = i + 1; j < len; j++) {
      sum += arr[j];
      if (!checkSum(sum, m)) break;
      answer++;
    }
  }
  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
