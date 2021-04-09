// 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만 듭니다.
// 만약 “tge0a1h205er”에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205 이 됩니다.
function solution(str) {
  let answer = str.replace(/[^0-9]/g, "");
  return Number(answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
