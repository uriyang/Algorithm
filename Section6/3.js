// board 배열은 2차원 배열로 크기는 5 x 5 이상 30 x 30 이하입니다.
// board의 각 칸에는 0 이상 100 이하인 정수가 담겨있습니다.
// 0은 빈 칸을 나타냅니다.
// 1 ~ 100의 각 숫자는 각기 다른 인형의 모양을 의미하며 같은 숫자는 같은 모양의 인형을 나 타냅니다.
// moves 배열의 크기는 1 이상 1,000 이하입니다.
// moves 배열 각 원소들의 값은 1 이상이며 board 배열의 가로 크기 이하인 자연수입니다.
function checkStack(pre, curr) {
  return pre === curr;
}

function solution(board, moves) {
  let answer = 0;
  let stack = [];

  moves.forEach((item) => {
    const pos = item - 1;

    for (let i = 0; i < board.length; i++) {
      const val = board[i][pos];
      if (val !== 0) {
        board[i][pos] = 0;
        checkStack(stack[stack.length - 1], val)
          ? stack.pop()
          : stack.push(val);
        break;
      }
    }
  });

  return stack.length;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));

// 풀이 정답은 4라고 나오는데, 3이 맞는듯..
// [4,3,1,1,3,2,0,4]의 순서대로 쌓여야 하는데, 중간에 1/1이 사라진 다음에 3/3이 중복되어 또 사라져야 함
