const boxes = document.querySelectorAll("[data-box]");
const playerdata = document.querySelector("[data-player]");
const newgame = document.querySelector("[data-newgame]");
let count;
let conti = true;
function gameinit(){
    playerdata.innerText = "Current Player-X";
    count=1;
    conti=true;
    boxes.forEach(element => {
        element.innerText = "";
        element.classList.remove("color");
    });
}
gameinit();
function renderX(element){
    playerdata.innerText = "Current Player-O";
    element.innerText = 'X';
}
function renderO(element){
    playerdata.innerText = "Current Player-X";
    element.innerText = 'O';
}
function Result(){
    if(conti===false){
        boxes.forEach(element => {
            if(element.classList.contains("color")){
                playerdata.innerText = "Winner Player-"+element.innerText;
                return;
            }
        });
    }
    else{
        playerdata.innerText = "Game Tied!"
    }
}
function newgamefun(){
    newgame.classList.remove("active");
    newgame.innerText = "New Game";
}
function startnewgame(){
    gameinit();
    newgame.classList.add("active");
}
function matchcheck(){
    for(let i=0;i<9;i=i+3){
        if(boxes[i].innerText===boxes[i+1].innerText && boxes[i+1].innerText===boxes[i+2].innerText && boxes[i].innerText!=="" && boxes[i+1].innerText!=="" && boxes[i+2].innerText!==""){
            boxes[i].classList.add("color");
            boxes[i+1].classList.add("color");
            boxes[i+2].classList.add("color");
            return true;
        }
    }
    for(let i=0;i<3;i++){
        if(boxes[i].innerText===boxes[i+3].innerText && boxes[i+3].innerText===boxes[i+6].innerText && boxes[i].innerText!=="" && boxes[i+3].innerText!=="" && boxes[i+6].innerText!==""){
            boxes[i].classList.add("color");
            boxes[i+3].classList.add("color");
            boxes[i+6].classList.add("color");
            return true;
        }
    }
    if(boxes[0].innerText===boxes[4].innerText && boxes[4].innerText===boxes[8].innerText && boxes[0].innerText!=="" && boxes[4].innerText!=="" && boxes[8].innerText!==""){
        boxes[0].classList.add("color");
        boxes[4].classList.add("color");
        boxes[8].classList.add("color");
        return true;
    }
    if(boxes[2].innerText===boxes[4].innerText && boxes[4].innerText===boxes[6].innerText && boxes[2].innerText!=="" && boxes[4].innerText!=="" && boxes[6].innerText!==""){
        boxes[2].classList.add("color");
        boxes[4].classList.add("color");
        boxes[6].classList.add("color");
        return true;
    }
}
boxes.forEach(element => {
    element.addEventListener('click',()=>{
        if(count%2 !== 0 && count!==10 && element.innerText === "" && conti){
            renderX(element);
            count++;
        }
        else if(count!==10 && element.innerText === "" && conti){
            renderO(element);
            count++;
        }
        if(count===10){
            Result();
            newgamefun();
        }
        if(matchcheck() && conti){
            conti=false;
            Result();
            newgamefun();
        }
    })
});