// N개의 정수가 입력되면 당신은 입력된 값을 정렬해야 한다.
// 음의 정수는 앞쪽에 양의정수는 뒷쪽에 있어야 한다. 또한 양의정수와 음의정수의 순서에는 변함이 없어야 한다.

function solution(arr) {
  let minus = [];
  let plus = [];

  for (const el of arr) {
    el < 0 ? minus.push(el) : plus.push(el);
  }

  return [...minus, ...plus];
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
