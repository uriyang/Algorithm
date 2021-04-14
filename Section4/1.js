// N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력 하는 프로그램을 작성하세요. 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다. 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.
function solution(n, arr) {
  let answer = null;
  arr.reduce((pre, curr) => {
    const sum = curr
      .toString()
      .split("")
      .reduce((pre, curr) => {
        return Number(pre) + Number(curr);
      }, 0);

    if (pre < sum) {
      answer = Number(curr);
    } else if (pre === sum) {
      answer = answer < curr ? curr : answer;
    }

    return sum;
  }, 0);
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
