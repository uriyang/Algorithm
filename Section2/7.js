// 지도 정보가 N*N 격자판에 주어집니다. 각 격자에는 그 지역의 높이가 쓰여있습니다. 각 격자 판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다. 봉우리 지역이 몇 개 있는 지 알아내는 프로그램을 작성하세요.
// 격자의 가장자리는 0으로 초기화 되었다고 가정한다.
// 만약 N=5 이고, 격자판의 숫자가 다음과 같다면 봉우리의 개수는 10개입니다.
function makeNewArray(arr, n) {
  let tempArray = new Array(n);
  const fillArray = Array.from(Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    tempArray[i] = new Array();
    if (i === 0 || i === n - 1) {
      tempArray[i].push(...fillArray);
    } else {
      tempArray[i] = [0, ...arr[i - 1], 0];
    }
  }
  return tempArray;
}

function solution(inputArr) {
  const n = inputArr.length;
  let answer = 0;

  const arr = makeNewArray(inputArr, n + 2);
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      const val = arr[i][j];
      if (
        val > arr[i - 1][j] &&
        val > arr[i][j - 1] &&
        val > arr[i + 1][j] &&
        val > arr[i][j + 1]
      ) {
        answer++;
      }
    }
  }
  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
