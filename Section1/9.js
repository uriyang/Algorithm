// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.

// 조건
// 첫 번째 줄에 문자열이 입력된다.

// 출력
// 첫 번째 줄에 바뀐 단어를 출력한다.

function solution(s) {
  let answer = "";
  answer = s.replace(/A/g, "#");
  return answer;
}

let str = "BANANA";
console.log(solution(str));
