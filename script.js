let turn = document.getElementById("turn");
let boxes = document.querySelectorAll("#main div"), X_or_O = 0;
let full = document.querySelector("#main");
let mainGuy = document.querySelector(".title");
console.log(full);
console.log(mainGuy);

function selectWinnerBoxes(b1, b2, b3){
    b1.classList.add("win");
    b2.classList.add("win");
    b3.classList.add("win"); 
    turn.innerHTML = b1.innerHTML + " Won, Congrats!"
    // fuller = full.innerHTML = b1.innerHTML;
    // full.classList.add("fully");
};

function getWinner(){
    // selecting all of the boxes in the main div
    // const box1 = document.getElementById('box1'),
    //     box2 = document.getElementById('box2'),
    //     box3 = document.getElementById('box3'),
    //     box4 = document.getElementById('box4'),
    //     box5 = document.getElementById('box5'),
    //     box6 = document.getElementById('box6'),
    //     box7 = document.getElementById('box7'),
    //     box8 = document.getElementById('box8'),
    //     box9 = document.getElementById('box9');

// HORIZONTAL WINS
// FIRST GAME
    if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML){
        selectWinnerBoxes(box1, box2, box3);
    } if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML){
        selectWinnerBoxes(box4, box5, box6);
    } if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML) {
        selectWinnerBoxes(box7, box8, box9);
    } 

// HORIZONTAL WINS
// SECOND GAME
    if (box10.innerHTML !== "" && box10.innerHTML === box11.innerHTML && box10.innerHTML === box12.innerHTML) {
        selectWinnerBoxes(box10, box11, box12);
    } if (box13.innerHTML !== "" && box13.innerHTML === box14.innerHTML && box13.innerHTML === box15.innerHTML) {
        selectWinnerBoxes(box13, box14, box15);
    } if (box16.innerHTML !== "" && box16.innerHTML === box17.innerHTML && box16.innerHTML === box18.innerHTML) {
        selectWinnerBoxes(box16, box17, box18);
    } 

    // HORIZONTAL WINS
    // THIRD GAME
    if (box19.innerHTML !== "" && box19.innerHTML === box20.innerHTML && box19.innerHTML === box21.innerHTML) {
        selectWinnerBoxes(box19, box20, box21);
    } if (box22.innerHTML !== "" && box22.innerHTML === box23.innerHTML && box22.innerHTML === box24.innerHTML) {
        selectWinnerBoxes(box22, box23, box24);
    } if (box25.innerHTML !== "" && box25.innerHTML === box26.innerHTML && box25.innerHTML === box27.innerHTML) {
        selectWinnerBoxes(box25, box26, box27);
    } 

    // VERTICAL WINS
    // FIRST GAME
    if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) {
        selectWinnerBoxes(box1, box4, box7);
    } if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) {
        selectWinnerBoxes(box2, box5, box8);
    } if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML) {
        selectWinnerBoxes(box3, box6, box9);
    }
    // VERTICAL WINS
    // SECOND GAME
    if (box10.innerHTML !== "" && box10.innerHTML === box13.innerHTML && box10.innerHTML === box16.innerHTML) {
        selectWinnerBoxes(box10, box13, box16);
    } if (box11.innerHTML !== "" && box11.innerHTML === box14.innerHTML && box11.innerHTML === box17.innerHTML) {
        selectWinnerBoxes(box11, box14, box17);
    } if (box12.innerHTML !== "" && box12.innerHTML === box15.innerHTML && box12.innerHTML === box18.innerHTML) {
        selectWinnerBoxes(box12, box15, box18);
    }

    // VERTICAL WINS
    // THIRD GAME
    if (box19.innerHTML !== "" && box19.innerHTML === box22.innerHTML && box19.innerHTML === box25.innerHTML) {
        selectWinnerBoxes(box19, box22, box25);
    } if (box20.innerHTML !== "" && box20.innerHTML === box23.innerHTML && box20.innerHTML === box26.innerHTML) {
        selectWinnerBoxes(box20, box23, box26);
    } if (box21.innerHTML !== "" && box21.innerHTML === box24.innerHTML && box21.innerHTML === box27.innerHTML) {
        selectWinnerBoxes(box21, box24, box27);
    }


    // DIAGONAL WINS
    // FIRST GAME
    if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML) {
        selectWinnerBoxes(box1, box5, box9);
    } if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML) {
        selectWinnerBoxes(box3, box5, box7);
    }

    // DIAGONAL WINS
    // SECOND GAME
    if (box10.innerHTML !== "" && box10.innerHTML === box14.innerHTML && box10.innerHTML === box18.innerHTML) {
        selectWinnerBoxes(box10, box14, box18);
    } if (box12.innerHTML !== "" && box12.innerHTML === box14.innerHTML && box12.innerHTML === box16.innerHTML) {
        selectWinnerBoxes(box12, box14, box16);
    }

    // DIAGONAL WINS
    // THIRD GAME
    if (box19.innerHTML !== "" && box19.innerHTML === box23.innerHTML && box19.innerHTML === box27.innerHTML) {
        selectWinnerBoxes(box19, box23, box27);
    } if (box21.innerHTML !== "" && box21.innerHTML === box23.innerHTML && box21.innerHTML === box25.innerHTML) {
        selectWinnerBoxes(box21, box23, box25);
    }
};


for(let i=0; i < boxes.length; i++){
    boxes[i].addEventListener("click", switcheroo);
    console.log(boxes[i]);
}

function switcheroo(){
    if(this.innerHTML !== "X" && this.innerHTML !== "O"){

        if (X_or_O %2 === 0){
            console.log(X_or_O);
            this.innerHTML = "X";
            turn.innerHTML = "O's turn!"
            getWinner();
            X_or_O += 1;
        }else{
            console.log(X_or_O);
            this.innerHTML = "O";
            turn.innerHTML = "X's turn!"
            getWinner();
            X_or_O += 1;
        };
    }
}

const newGame = document.querySelector("button");
newGame.addEventListener("click", replay);

function replay(){
    window.location.reload();
}

// anime({
//     targets: mainGuy,
   
// });