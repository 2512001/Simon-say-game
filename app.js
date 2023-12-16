let level = 0;
const colors = ["c1", "c2", "c3", "c4"];
let started = false;
let gamesequence = [];
let usersequence = [];
let heading3 = document.querySelector("h3");
let score = 0;
let heighestscore = 0;
let hs =document.getElementById("highScoreMessage");
let startbnt1 = document.getElementById("btn");
let startbnt2 = false;

function start() {
  heading3.style.color = ""; 
  document.body.style.backgroundColor = "";
  

}
btn.addEventListener("click", function () {
  startbnt = true;
  console.log("button is clicked ");
  this.style.backgroundColor = "green";
  setTimeout(() => {
    if (!started) {
      started = true;
      hs.style.display = "none";
      console.log("Game is started");
      levelup();
    }
  }, 1000);
});

function levelup() {
  usersequence = [];
  level++;
  score += 2;
  if(score > heighestscore)
  {
    heighestscore = score ;
  }
  heading3.innerHTML = `Level ${level}`;
  let rndcolor = Math.floor(Math.random() * 4);
  let selectedColor = colors[rndcolor];
  gamesequence.push(selectedColor);
  console.log("Game sequence: " + gamesequence);
  let btn = document.querySelector(`.${selectedColor}`);
  removeclass(btn);
}

function checkans(indx) {
  if (usersequence[indx] === gamesequence[indx]) {
    if (usersequence.length === gamesequence.length) {
      console.log("Correct sequence");
      setTimeout(levelup, 1000);
    }
  } else {
    console.log("Wrong answer");
    heading3.innerHTML = `Game over! Your score is ${score}. Press any key to start the game.`;
    hs.style.display = "inline-block";
    hs.innerHTML =`Heighest Score is : ${heighestscore}`;
    restart();
  }
}

function removeclass(btn) {
  btn.classList.add("color");
  setTimeout(() => {
    btn.classList.remove("color");
  }, 200);
}

function buttonclick() {
  let btn = this;
  let userColor = btn.getAttribute("id");
  usersequence.push(userColor);
  console.log("User sequence: " + usersequence);
  removeclass(btn);
  checkans(usersequence.length - 1);
}

let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn) {
  btn.addEventListener("click", buttonclick);
}

function restart() {
  level = 0;
  score = 0;
  gamesequence = [];
  started = false;
  startbnt2 = false;
  startbnt1.style.backgroundColor = "rgb(255, 92, 92)";
  heading3.style.color = "white";
  document.body.style.backgroundColor = "rgba(227, 23, 23, 0.89)";

  setTimeout(start , 500);
}
