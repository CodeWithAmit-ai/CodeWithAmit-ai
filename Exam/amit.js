let boxes=document.querySelectorAll(".box");
let restart=document.querySelector("#restart-btn");
let msg=document.querySelector("#msg");
let showMsg=document.querySelector(".show-msg");
let newBtn=document.querySelector("#New-btn");
let turn0=true;
let winPattern=[
  [0,1,2],
  [0,4,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
  ];
boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    if(turn0){
      turn0=false;
      box.innerText="X";
      box.style.color="#533B4D";
    }
    else{
      box.innerText="0";
     box.style.color="#F564A9"; 
      turn0=true;
    }
    box.disabled=true;
    checkWinner();
    
  });
});
const resetGame=()=>{
  turn0=true;
  anabledBoxes();
  showMsg.classList.add("hide");
}
const disabledBoxes=()=>{
  for(box of boxes){
    box.disabled=true;
  }
}
const anabledBoxes=()=>{
  for(box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}
const showDraw = () => {
  msg.innerText = "It's a draw!";
  showMsg.classList.remove("hide");
  disableBoxes();
};
const showWinner=(winner)=>{
  msg.innerText=`Congretulation,${winner} is the winner`;
  showMsg.classList.remove("hide");
  disabledBoxes();
}
const checkWinner=(winner)=>{
  let winnerFound=false;
  for(let pattern of winPattern){
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;
    if(pos1val!==""&&pos2val!==""&&pos3val!==""){
      if(pos1val===pos2val&&pos2val===pos3val){
      showWinner(pos1val);
      winnerFound = true;
      return;
      }
    }
  }

let allFilled = true;
  for (let box of boxes) {
    if (box.innerText === "") {
      allFilled = false;
      break;
    }
  }

  if (!winnerFound && allFilled) {
    showDraw();
  }
};

newBtn.addEventListener("click",resetGame);
restart.addEventListener("click",resetGame);