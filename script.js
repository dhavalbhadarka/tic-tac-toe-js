let boxes = document.querySelectorAll(".box");
let turn0 = true;
let msgContain = document.querySelector('.msg-contain');
let msg = document.querySelector("#msg")

const winPattern = [
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
    box.addEventListener("click", () => {
        
        if(turn0){
            box.innerText = "0";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disabledBox = () => {
    for(box of boxes){
        box.disabled = true;
    }
}
const showWninner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContain.classList.remove("hide");
}
const checkWinner = () => {
    for(let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos3val != "" && pos2val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                disabledBox();
                showWninner(pos1val);
            }
        }
    }
}