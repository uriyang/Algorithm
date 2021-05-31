// 이진트리를 전위순회와 후위순회를 연습해보세요.
function solution(n) {
  let answer = "";
  function DFS(v) {
    if (v > n) return;
    else {
      answer += v + " ";
      DFS(v * 2);
      // answer += v + " "; // 중위순회
      DFS(v * 2 + 1);
      // answer += v + " "; // 후위순회
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(7));
