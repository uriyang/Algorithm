// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력 하는 프로그램을 작성하세요.

// 조건
// 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.

// 출력
// 첫 줄에 대문자로 통일된 문자열이 출력된다.

function solution(s) {
  let answer = s.toUpperCase();

  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));
