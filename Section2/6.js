// N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합 니다.
function solution(arr) {
  const len = arr.length;
  let answer = 0;
  let sum3 = 0,
    sum4 = 0;
  for (let i = 0; i < len; i++) {
    let sum = 0,
      sum2 = 0;
    for (let j = 0; j < len; j++) {
      sum += arr[i][j];
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum, sum2);
    sum3 += arr[i][i];
    sum4 += arr[i][len - i - 1];
  }
  answer = Math.max(answer, sum3, sum4);
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
