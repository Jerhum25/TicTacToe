const grid = document.querySelector(".grid");
const boxes = document.querySelectorAll(".box");
const reset = document.querySelector("button.reset");
const player = document.querySelector(".player");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");
const box7 = document.querySelector(".box7");
const box8 = document.querySelector(".box8");
const box9 = document.querySelector(".box9");
console.log(box1);

player.textContent = "A joueur 1 de jouer";

boxes.forEach((box) => {
  box.addEventListener("click", boxClick);
});

function boxClick(e) {
  if (player.textContent === "A joueur 1 de jouer")
    if (e.target.textContent !== "") {
      alert("Cette case n'est pas libre");
    } else {
      e.target.textContent = "X";
      player.textContent = "A joueur 2 de jouer";
    }
  else if (player.textContent === "A joueur 2 de jouer")
    if (e.target.textContent !== "") {
      alert("Cette case n'est pas libre");
    } else {
      e.target.textContent = "O";
      player.textContent = "A joueur 1 de jouer";
    }
  setTimeout(() => {
    if (
      (box1.textContent === "X" &&
        box2.textContent === "X" &&
        box3.textContent === "X") ||
      (box4.textContent === "X" &&
        box5.textContent === "X" &&
        box6.textContent === "X") ||
      (box7.textContent === "X" &&
        box8.textContent === "X" &&
        box9.textContent === "X") ||
      (box1.textContent === "X" &&
        box4.textContent === "X" &&
        box7.textContent === "X") ||
      (box2.textContent === "X" &&
        box5.textContent === "X" &&
        box8.textContent === "X") ||
      (box3.textContent === "X" &&
        box6.textContent === "X" &&
        box9.textContent === "X") ||
      (box1.textContent === "X" &&
        box5.textContent === "X" &&
        box9.textContent === "X") ||
      (box3.textContent === "X" &&
        box5.textContent === "X" &&
        box7.textContent === "X")
    ) {
      player.textContent = "Joueur 1 a gagné la partie";
      setTimeout(() => {
        resetBoxes();
      }, 1500);
    }
  }, 300);
  setTimeout(() => {
    if (
      (box1.textContent === "O" &&
        box2.textContent === "O" &&
        box3.textContent === "O") ||
      (box4.textContent === "O" &&
        box5.textContent === "O" &&
        box6.textContent === "O") ||
      (box7.textContent === "O" &&
        box8.textContent === "O" &&
        box9.textContent === "O") ||
      (box1.textContent === "O" &&
        box4.textContent === "O" &&
        box7.textContent === "O") ||
      (box2.textContent === "O" &&
        box5.textContent === "O" &&
        box8.textContent === "O") ||
      (box3.textContent === "O" &&
        box6.textContent === "O" &&
        box9.textContent === "O") ||
      (box1.textContent === "O" &&
        box5.textContent === "O" &&
        box9.textContent === "O") ||
      (box3.textContent === "O" &&
        box5.textContent === "O" &&
        box7.textContent === "O")
    ) {
      player.textContent = "Joueur 2 a gagné la partie";
      setTimeout(() => {
        resetBoxes();
      }, 1500);
    }
    if (
      box1.textContent !== "" &&
      box2.textContent !== "" &&
      box3.textContent !== "" &&
      box4.textContent !== "" &&
      box5.textContent !== "" &&
      box6.textContent !== "" &&
      box7.textContent !== "" &&
      box8.textContent !== "" &&
      box9.textContent !== ""
    ) {
      player.textContent = "Personne n'a gagné la partie";
    }
  }, 300);
}

reset.addEventListener("click", resetBoxes);
function resetBoxes(e) {
  boxes.forEach((box) => {
    box.textContent = "";
    player.textContent = "A joueur 1 de jouer";
  });
}
