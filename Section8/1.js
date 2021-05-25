// 자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지를 출력하는 프로그램을 작성하세요.
function solution(n) {
  function print(i) {
    if (i > n) return;
    console.log(i++);
    print(i);
  }
  print(1);
}

solution(3);
