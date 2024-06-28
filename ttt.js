let boxes = document.querySelectorAll(".box");
let turnO = true; 

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],       
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click",() => {
    if(turnO){
      box.innerText = 'O';
      box.style.color = "black";
      turnO = false;
    }
    else{
      box.innerText = 'X';
      box.style.color = "red";
      turnO = true;
    }
    box.disabled = true;
    let isWinner = checkWinner();
  })
});

const checkWinner = () => {
  for(let pattern of winPatterns){
    let pos1val = boxes[pattern[0]].innerText; 
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

   if(pos1val !="" && pos2val !="" && pos3val !=""){
    if(pos1val === pos2val && pos2val === pos3val){
      displayWinner(pos1val);
      return true;
    }
   }
  }
}

let hideClass = document.querySelector(".hide");
const displayWinner = (winner) => {
    resetBtn.style.display = "none";
    let display = document.querySelector(".msg");
    display.innerText = `Congrats,Winner is ${winner}`;
    hideClass.classList.remove("hide");
    disabled();
}  

const disabled = () => {
  for(let box of boxes){
    box.disabled = true;
  }
} 

//for reset button
const clearAll = () => {
  for(let box of boxes){
    box.innerText = "";
    box.disabled = false;
    turnO = true;
  }
}
//Reset Btn
let resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click",clearAll);

//for new game button  
const startNewGame = () => {
  for(let box of boxes){
    box.innerText = "";
    box.disabled = false;
    turnO = true;
    resetBtn.style.display = "block";
    hideClass.classList.add("hide");    
}
}   
//new game btn
let newGameBtn = document.querySelector(".newGame");
newGameBtn.addEventListener("click",startNewGame);


