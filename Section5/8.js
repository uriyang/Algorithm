// S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하 세요. 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.
function check(t, s) {
  let count = 0;
  let flag = true;
  let hash = s;

  function ck() {
    [...t].forEach((el) => {
      if (hash.has(el)) {
        const val = hash.get(el);
        val > 0 ? hash.set(el, val - 1) : hash.delete(el);
      } else {
        flag = false;
      }
    });

    if (flag) {
      count++;
      ck();
    }
  }
  if (flag) ck();
  return count;
}

function solution(s, t) {
  let answer = 0;
  let sH = new Map();

  for (let x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }

  answer = check(t, sH);
  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
