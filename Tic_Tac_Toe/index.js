let currentPlayer = "x";

const board = document.getElementById("Tic-tac-toe");
//console.log(board);
let arr = Array(9).fill(null);

board.addEventListener("click", (e) => {
  //console.log(e);
  if (e.target.classList.contains("col")) {
    const id = Number(e.target.id);
    if (arr[id] != null) return;
    arr[id] = currentPlayer;
    console.log(arr);
    e.target.innerHTML = currentPlayer;
    winnerFn();
    currentPlayer = currentPlayer === "x" ? "o" : "x";
  }
});

const winnerFn = () => {
  if (
    (arr[0] === arr[1] && arr[1] === arr[2] && arr[0] !== null) ||
    (arr[3] === arr[4] && arr[4] === arr[5] && arr[3] !== null) ||
    (arr[6] === arr[7] && arr[7] === arr[8] && arr[6] !== null) ||
    (arr[0] === arr[3] && arr[3] === arr[6] && arr[0] !== null) ||
    (arr[1] === arr[4] && arr[4] === arr[7] && arr[1] !== null) ||
    (arr[2] === arr[5] && arr[5] === arr[8] && arr[2] !== null) ||
    (arr[0] === arr[4] && arr[4] === arr[8] && arr[0] !== null) ||
    (arr[2] === arr[4] && arr[4] === arr[6] && arr[2] !== null)
  ) {
    console.log("hello", currentPlayer);
    board.classList.add("winner");
    board.innerText = `Winner is ${currentPlayer}`;
  }

  if (!arr.some((e)=>e==null)) {
    board.innerText = `Its a Draw !!!  Play again`;
  }
};
