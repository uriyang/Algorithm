// N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요. 정렬하는 방법은 버블정렬입니다.
function solution(arr) {
  let answer = arr;
  arr.sort((a, b) => a > b);
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
