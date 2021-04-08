// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
// 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력 하는 프로그램을 작성하세요.
// 단 회문을 검사할 때 대소문자를 구분하지 않습니다.

// function solution(arr) {
//   arr = arr.toLowerCase();
//   const len = arr.length;
//   let answer = "YES";

//   for (let i = 0; i < Math.floor(len / 2); i++) {
//     const text1 = arr[i];
//     const text2 = arr[len - 1 - i];

//     if (text1 !== text2) {
//       answer = "NO";
//       break;
//     }
//   }
//   return answer;
// }

function solution(s) {
  s = s.toLowerCase();
  return s.split("").reverse().join("") === s ? "YES" : "NO";
}

let str = "goooG";
console.log(solution(str));
