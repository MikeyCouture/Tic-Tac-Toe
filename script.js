let turn = document.getElementById("turn");
let boxes = document.querySelectorAll("#main div"), X_or_O = 0;
let full = document.querySelectorAll("mainContainer container");
let mainGuy = document.querySelector(".title");
let conOne = box1.parentElement;
const body = document.querySelector("body");
const text = document.querySelector(".title");
const walk = 10;
// let conOne = document.querySelectorAll("box"); 
// console.log(full);
// console.log(conOne);

function selectWinnerBoxes(b1, b2, b3){
    b1.classList.add("win");
    b2.classList.add("win");
    b3.classList.add("win"); 
    turn.innerHTML = b1.innerHTML + " Won, Congrats!"

    let conOne = b1.parentElement;

    if (b1.innerHTML === "X"){
        conOne.classList.add("ultimateTest");
    }else{
        conOne.classList.add("ultimateTestTwo");
    };

    if (box1.parentElement.classList.contains("ultimateTest") && box10.parentElement.classList.contains("ultimateTest") && box19.parentElement.classList.contains("ultimateTest")) {
        console.log("X WINS");
    }

    if (box1.parentElement.classList.contains("ultimateTestTwo") && box10.parentElement.classList.contains("ultimateTestTwo") && box19.parentElement.classList.contains("ultimateTestTwo")) {

        console.log("O WINS");
    }
    
};




function getWinner(){


    // HORIZONTAL WINS
    // FIRST GAME
    if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML) {
        selectWinnerBoxes(box1, box2, box3);
    } if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) {
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

    // HORIZONTAL WINS
    // FOURTH GAME
    if (box28.innerHTML !== "" && box28.innerHTML === box29.innerHTML && box28.innerHTML === box30.innerHTML) {
        selectWinnerBoxes(box28, box29, box30);
    } if (box31.innerHTML !== "" && box31.innerHTML === box32.innerHTML && box31.innerHTML === box33.innerHTML) {
        selectWinnerBoxes(box31, box32, box33);
    } if (box34.innerHTML !== "" && box34.innerHTML === box35.innerHTML && box34.innerHTML === box36.innerHTML) {
        selectWinnerBoxes(box34, box35, box36);
    }

    // HORIZONTAL WINS
    // FIFTH GAME
    if (box37.innerHTML !== "" && box37.innerHTML === box38.innerHTML && box37.innerHTML === box39.innerHTML) {
        selectWinnerBoxes(box37, box38, box39);
    } if (box40.innerHTML !== "" && box40.innerHTML === box41.innerHTML && box40.innerHTML === box42.innerHTML) {
        selectWinnerBoxes(box40, box41, box42);
    } if (box43.innerHTML !== "" && box43.innerHTML === box44.innerHTML && box43.innerHTML === box45.innerHTML) {
        selectWinnerBoxes(box43, box44, box45);
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

    // VERTICAL WINS
    // FOURTH GAME
    if (box28.innerHTML !== "" && box28.innerHTML === box31.innerHTML && box28.innerHTML === box34.innerHTML) {
        selectWinnerBoxes(box28, box31, box34);
    } if (box29.innerHTML !== "" && box29.innerHTML === box32.innerHTML && box29.innerHTML === box35.innerHTML) {
        selectWinnerBoxes(box29, box32, box35);
    } if (box30.innerHTML !== "" && box30.innerHTML === box33.innerHTML && box30.innerHTML === box36.innerHTML) {
        selectWinnerBoxes(box30, box33, box36);
    }

    // VERTICAL WINS
    // FIFTH GAME
    if (box37.innerHTML !== "" && box37.innerHTML === box40.innerHTML && box37.innerHTML === box43.innerHTML) {
        selectWinnerBoxes(box37, box40, box43);
    } if (box38.innerHTML !== "" && box38.innerHTML === box41.innerHTML && box38.innerHTML === box44.innerHTML) {
        selectWinnerBoxes(box38, box41, box44);
    } if (box39.innerHTML !== "" && box39.innerHTML === box42.innerHTML && box39.innerHTML === box45.innerHTML) {
        selectWinnerBoxes(box39, box42, box45);
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

    // DIAGONAL WINS
    // FOURTH GAME
    if (box28.innerHTML !== "" && box28.innerHTML === box32.innerHTML && box28.innerHTML === box36.innerHTML) {
        selectWinnerBoxes(box28, box32, box36);
    } if (box30.innerHTML !== "" && box30.innerHTML === box32.innerHTML && box30.innerHTML === box34.innerHTML) {
        selectWinnerBoxes(box30, box32, box34);
    }

    // DIAGONAL WINS
    // FIFTH GAME
    if (box37.innerHTML !== "" && box37.innerHTML === box41.innerHTML && box37.innerHTML === box45.innerHTML) {
        selectWinnerBoxes(box37, box41, box45);
    } if (box39.innerHTML !== "" && box39.innerHTML === box41.innerHTML && box39.innerHTML === box43.innerHTML) {
        selectWinnerBoxes(box39, box41, box43);
    }
};




for(let i=0; i < boxes.length; i++){
    boxes[i].addEventListener("click", switcheroo);
    // console.log(boxes[i]);
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

function shadow(e){
    // console.log(e);
    const { offsetWidth: width, offsetHeight: height } = body;
    let x = e.offsetX;
    let y = e.offsetY;
    
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    // console.log(x, y);

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    // console.log(xWalk, yWalk);

    text.style.textShadow = `${xWalk}px ${yWalk}px 0 #b66e56, ${xWalk * -1}px ${yWalk}px 0 #313167`;

}

const newGame = document.querySelector("button");
newGame.addEventListener("click", replay);
body.addEventListener("mousemove", shadow);

function replay(){
    window.location.reload();
}

// anime({
//     targets: mainGuy,
   
// });