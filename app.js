let boxes = document.querySelectorAll(".box");
let resetbut = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let msg = document.querySelector(".msg");
let msgs = document.querySelector("#msgs");

let turnO = true;
const winpatterns = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
];
const resetgame = () => {
    turnO = true;
    enableboxes();
    msg.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
    if(turnO){
box.innerText = "O";
turnO = false;
    }
    else{
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;
   
    checkWinner();
    
});
});
const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const showwinner = (winner) => {
    msgs.innerText = 'Congratulations! , you won the Game' ;
msg.classList.remove("hide");
disableboxes();
};
const checkWinner  = () =>{
    for(let arr of winpatterns){
        
    let pos1val = boxes[arr[0]].innerText;
    let pos2val = boxes[arr[1]].innerText;
    let pos3val = boxes[arr[2]].innerText;
      if(pos1val !="" && pos2val!="" && pos3val!=""){
        if(pos1val === pos2val && pos2val === pos3val){
            showwinner(pos1val);
        }
      }  
    }
};
newbtn.addEventListener("click", resetgame);
resetbut.addEventListener("click", resetgame);