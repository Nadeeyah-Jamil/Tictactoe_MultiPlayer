let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".resetbtn");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg-container");
let newbtn=document.querySelector(".newgame");
let turnO=true;
const win_patterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO===true){
          box.style.color="red";
            box.innerText="O";
            turnO=false;
        }
      else{
        box.style.color="yellow";
        box.innerText="X";
        turnO=true;
      }
      box.disabled=true;
      checkwinner();
    });
});
const enable_boxes=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}
const reset_game=()=>{
  enable_boxes();
  msgcontainer.classList.add("hide");
}
const show_winner=(pos1val)=>{
msg.innerText=`Game Over \n Player ${pos1val} won the game`;
msgcontainer.classList.remove("hide");
for(let box of boxes){
  box.disabled=true;
}
}
let hrElement = document.createElement("hr");
newbtn.addEventListener("click",reset_game);
resetbtn.addEventListener("click",reset_game);
const checkwinner=()=>{
  for(let patterns of win_patterns){
  let pos1val=boxes[patterns[0]].innerText;
  let pos2val=boxes[patterns[1]].innerText;
  let pos3val=boxes[patterns[2]].innerText;
  if(pos1val!="" && pos2val!="" && pos3val!=""){
  if(pos1val===pos2val && pos1val===pos3val){
    show_winner(pos1val);
  }
  }
  }
}