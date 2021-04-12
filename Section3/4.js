// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출 력하는 프로그램을 작성하세요.
function solution(s, t) {
  let answer = [];
  const tempText = s.split(t);

  for (let text in tempText) {
    const char = tempText[text];
    const divide = Math.ceil(char.length / 2);
    for (let i in char) {
      answer.push(++i <= divide ? i : char.length - i + 1);
    }
    if (char.length) answer.push(0);
  }
  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
