// 학급 회장을 뽑는데 후보로 기호 A, B, C, D, E 후보가 등록을 했습니다.
// 투표용지에는 반 학생들이 자기가 선택한 후보의 기호(알파벳)가 쓰여져 있으며 선생님은 그 기호를 발표하고 있습니다.
// 선생님의 발표가 끝난 후 어떤 기호의 후보가 학급 회장이 되었는지 출력하는 프로그램을 작 성하세요. 반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정합니다.
function solution(s) {
  let answer;
  let max = 0;
  let result = new Map();
  for (let x of s) {
    result.has(x) ? result.set(x, result.get(x) + 1) : result.set(x, 1);
  }
  for (let [key, val] of result) {
    if (max < val) {
      max = val;
      answer = key;
    }
  }
  // let max = 0;
  // let count = 0;
  // s = s.split("").sort();
  // s.reduce((pre, acc) => {
  //   if (pre != acc) {
  //     count = 1;
  //   } else if (max < ++count) {
  //     max = count;
  //     answer = acc;
  //   }
  //   return acc;
  // }, "");
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
