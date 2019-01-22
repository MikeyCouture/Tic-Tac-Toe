let turn = document.getElementById("turn");
let boxes = document.querySelectorAll("#main div"), X_or_O = 0;
let full = document.querySelectorAll("mainContainer container");
let mainGuy = document.querySelector(".title");
let conOne = box1.parentElement;
const body = document.querySelector("body");
const text = document.querySelector(".title");
const walk = 20;
// let conOne = document.querySelectorAll("box"); 
// console.log(full);
// console.log(conOne);


// passing the three winning boxes into this function
function selectWinnerBoxes(b1, b2, b3){
    b1.classList.add("win");
    b2.classList.add("win");
    b3.classList.add("win"); 
    turn.innerHTML = b1.innerHTML + " Won, Congrats!"

    let conOne = b1.parentElement;

    // adding a specific colour to the background if X or O wins
    if (b1.innerHTML === "X"){
        conOne.classList.add("ultimateTest");
    }else{
        conOne.classList.add("ultimateTestTwo");
    };

    function timer() {
        setTimeout(() => {
            swal({
                title: turn.innerHTML = b1.innerHTML + " Won, Congrats!",
                icon: "success",
                button: "Fun Times",
            });
        }, 500);
    };

    // If three main boxes have the same colour (aka same game winner), then that user wins!

    // HORIZONTAL WINS
    // FIRST ROW
    if (box1.parentElement.classList.contains("ultimateTest") && box10.parentElement.classList.contains("ultimateTest") && box19.parentElement.classList.contains("ultimateTest")) {
        console.log("X WINS");
        timer();

    }

    if (box1.parentElement.classList.contains("ultimateTestTwo") && box10.parentElement.classList.contains("ultimateTestTwo") && box19.parentElement.classList.contains("ultimateTestTwo")) {

        console.log("O WINS");
        timer();
    }

    // HORIZONTAL WINS
    // SECOND ROW
    if (box28.parentElement.classList.contains("ultimateTest") && box37.parentElement.classList.contains("ultimateTest") && box46.parentElement.classList.contains("ultimateTest")) {
        console.log("X WINS");
        timer();
    }

    if (box28.parentElement.classList.contains("ultimateTestTwo") && box37.parentElement.classList.contains("ultimateTestTwo") && box46.parentElement.classList.contains("ultimateTestTwo")) {

        console.log("O WINS");
        timer();
    }

    // HORIZONTAL WINS
    // THIRD ROW
    if (box55.parentElement.classList.contains("ultimateTest") && box64.parentElement.classList.contains("ultimateTest") && box73.parentElement.classList.contains("ultimateTest")) {
        console.log("X WINS");
        timer();
    }

    if (box55.parentElement.classList.contains("ultimateTestTwo") && box64.parentElement.classList.contains("ultimateTestTwo") && box73.parentElement.classList.contains("ultimateTestTwo")) {

        console.log("O WINS");
        timer();timer();
    }

    // HORIZONTAL WINS ABOVE
    // VERTICAL WINS BELOW

    // VERTICAL WINS
    // FIRST COLUMN
    if (box1.parentElement.classList.contains("ultimateTest") && box28.parentElement.classList.contains("ultimateTest") && box55.parentElement.classList.contains("ultimateTest")) {
        console.log("X WINS");
        timer();timer();
    }

    if (box1.parentElement.classList.contains("ultimateTestTwo") && box28.parentElement.classList.contains("ultimateTestTwo") && box55.parentElement.classList.contains("ultimateTestTwo")) {

        console.log("O WINS");
        timer();
    }

    // VERTICAL WINS
    // SECOND COLUMN
    if (box10.parentElement.classList.contains("ultimateTest") && box37.parentElement.classList.contains("ultimateTest") && box64.parentElement.classList.contains("ultimateTest")) {
        console.log("X WINS");
        timer();
    }

    if (box10.parentElement.classList.contains("ultimateTestTwo") && box37.parentElement.classList.contains("ultimateTestTwo") && box64.parentElement.classList.contains("ultimateTestTwo")) {

        console.log("O WINS");
        timer();
    }

    // VERTICAL WINS
    // THIRD COLUMN
    if (box19.parentElement.classList.contains("ultimateTest") && box46.parentElement.classList.contains("ultimateTest") && box73.parentElement.classList.contains("ultimateTest")) {
        console.log("X WINS");
        timer();
    }

    if (box19.parentElement.classList.contains("ultimateTestTwo") && box46.parentElement.classList.contains("ultimateTestTwo") && box73.parentElement.classList.contains("ultimateTestTwo")) {

        console.log("O WINS");
        timer();
    }

    // VERTICAL WINS ABOVE
    // DIAGONAL WINS BELOW

    if (box1.parentElement.classList.contains("ultimateTest") && box37.parentElement.classList.contains("ultimateTest") && box73.parentElement.classList.contains("ultimateTest")) {
        console.log("X WINS");
        timer();
    }

    if (box1.parentElement.classList.contains("ultimateTestTwo") && box37.parentElement.classList.contains("ultimateTestTwo") && box73.parentElement.classList.contains("ultimateTestTwo")) {

        console.log("O WINS");
        timer();
    }

    if (box19.parentElement.classList.contains("ultimateTest") && box37.parentElement.classList.contains("ultimateTest") && box55.parentElement.classList.contains("ultimateTest")) {
        console.log("X WINS");
        timer();
    }

    if (box19.parentElement.classList.contains("ultimateTestTwo") && box37.parentElement.classList.contains("ultimateTestTwo") && box55.parentElement.classList.contains("ultimateTestTwo")) {
        console.log("O WINS");
        timer();
    }
};



// Hard coded all winning combinations
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

    // HORIZONTAL WINS
    // SIXTH GAME
    if (box46.innerHTML !== "" && box46.innerHTML === box47.innerHTML && box46.innerHTML === box48.innerHTML) {
        selectWinnerBoxes(box46, box47, box48);
    } if (box49.innerHTML !== "" && box49.innerHTML === box50.innerHTML && box49.innerHTML === box51.innerHTML) {
        selectWinnerBoxes(box49, box50, box51);
    } if (box52.innerHTML !== "" && box52.innerHTML === box53.innerHTML && box52.innerHTML === box54.innerHTML) {
        selectWinnerBoxes(box52, box53, box54);
    }

    // HORIZONTAL WINS
    // SEVENTH GAME
    if (box55.innerHTML !== "" && box55.innerHTML === box56.innerHTML && box55.innerHTML === box57.innerHTML) {
        selectWinnerBoxes(box55, box56, box57);
    } if (box58.innerHTML !== "" && box58.innerHTML === box59.innerHTML && box58.innerHTML === box60.innerHTML) {
        selectWinnerBoxes(box58, box59, box60);
    } if (box61.innerHTML !== "" && box61.innerHTML === box62.innerHTML && box61.innerHTML === box63.innerHTML) {
        selectWinnerBoxes(box61, box62, box63);
    }

    // HORIZONTAL WINS
    // EIGHTH GAME
    if (box64.innerHTML !== "" && box64.innerHTML === box65.innerHTML && box64.innerHTML === box66.innerHTML) {
        selectWinnerBoxes(box64, box65, box66);
    } if (box67.innerHTML !== "" && box67.innerHTML === box68.innerHTML && box67.innerHTML === box69.innerHTML) {
        selectWinnerBoxes(box67, box68, box69);
    } if (box70.innerHTML !== "" && box70.innerHTML === box71.innerHTML && box70.innerHTML === box72.innerHTML) {
        selectWinnerBoxes(box70, box71, box72);
    }

    // HORIZONTAL WINS
    // NINTH GAME
    if (box73.innerHTML !== "" && box73.innerHTML === box74.innerHTML && box73.innerHTML === box75.innerHTML) {
        selectWinnerBoxes(box73, box74, box75);
    } if (box76.innerHTML !== "" && box76.innerHTML === box77.innerHTML && box76.innerHTML === box78.innerHTML) {
        selectWinnerBoxes(box76, box77, box78);
    } if (box79.innerHTML !== "" && box79.innerHTML === box80.innerHTML && box79.innerHTML === box81.innerHTML) {
        selectWinnerBoxes(box79, box80, box81);
    }

    // HORIZONTAL WINS ABOVE
    // VERTICAL WINS BELOW

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

    // VERTICAL WINS
    // SIXTH GAME
    if (box46.innerHTML !== "" && box46.innerHTML === box49.innerHTML && box46.innerHTML === box52.innerHTML) {
        selectWinnerBoxes(box46, box49, box52);
    } if (box47.innerHTML !== "" && box47.innerHTML === box50.innerHTML && box47.innerHTML === box53.innerHTML) {
        selectWinnerBoxes(box47, box50, box53);
    } if (box48.innerHTML !== "" && box48.innerHTML === box51.innerHTML && box48.innerHTML === box54.innerHTML) {
        selectWinnerBoxes(box48, box51, box54);
    }

    // VERTICAL WINS
    // SEVENTH GAME
    if (box55.innerHTML !== "" && box55.innerHTML === box58.innerHTML && box55.innerHTML === box61.innerHTML) {
        selectWinnerBoxes(box55, box58, box61);
    } if (box56.innerHTML !== "" && box56.innerHTML === box59.innerHTML && box56.innerHTML === box62.innerHTML) {
        selectWinnerBoxes(box56, box59, box62);
    } if (box57.innerHTML !== "" && box57.innerHTML === box60.innerHTML && box57.innerHTML === box63.innerHTML) {
        selectWinnerBoxes(box57, box60, box63);
    }

    // VERTICAL WINS
    // EIGHTH GAME
    if (box64.innerHTML !== "" && box64.innerHTML === box67.innerHTML && box64.innerHTML === box70.innerHTML) {
        selectWinnerBoxes(box64, box67, box70);
    } if (box65.innerHTML !== "" && box65.innerHTML === box68.innerHTML && box65.innerHTML === box71.innerHTML) {
        selectWinnerBoxes(box65, box68, box71);
    } if (box66.innerHTML !== "" && box66.innerHTML === box69.innerHTML && box66.innerHTML === box72.innerHTML) {
        selectWinnerBoxes(box66, box69, box72);
    }

    // VERTICAL WINS
    // NINTH GAME
    if (box73.innerHTML !== "" && box73.innerHTML === box76.innerHTML && box73.innerHTML === box79.innerHTML) {
        selectWinnerBoxes(box73, box76, box79);
    } if (box74.innerHTML !== "" && box74.innerHTML === box77.innerHTML && box74.innerHTML === box80.innerHTML) {
        selectWinnerBoxes(box74, box77, box80);
    } if (box75.innerHTML !== "" && box75.innerHTML === box78.innerHTML && box75.innerHTML === box81.innerHTML) {
        selectWinnerBoxes(box75, box78, box81);
    }

    // VERTICAL WINS ABOVE
    // DIAGONAL WINS BELOW

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

    // DIAGONAL WINS
    // SIXTH GAME
    if (box46.innerHTML !== "" && box46.innerHTML === box50.innerHTML && box46.innerHTML === box54.innerHTML) {
        selectWinnerBoxes(box46, box50, box54);
    } if (box48.innerHTML !== "" && box48.innerHTML === box50.innerHTML && box48.innerHTML === box52.innerHTML) {
        selectWinnerBoxes(box48, box50, box52);
    }

    // DIAGONAL WINS
    // SEVENTH GAME
    if (box55.innerHTML !== "" && box55.innerHTML === box59.innerHTML && box55.innerHTML === box63.innerHTML) {
        selectWinnerBoxes(box55, box59, box63);
    } if (box57.innerHTML !== "" && box57.innerHTML === box59.innerHTML && box57.innerHTML === box61.innerHTML) {
        selectWinnerBoxes(box57, box59, box61);
    }

    // DIAGONAL WINS
    // EIGHTH GAME
    if (box64.innerHTML !== "" && box64.innerHTML === box68.innerHTML && box64.innerHTML === box72.innerHTML) {
        selectWinnerBoxes(box64, box68, box72);
    } if (box66.innerHTML !== "" && box66.innerHTML === box68.innerHTML && box66.innerHTML === box70.innerHTML) {
        selectWinnerBoxes(box66, box68, box70);
    }

    // DIAGONAL WINS
    // NINTH GAME
    if (box73.innerHTML !== "" && box73.innerHTML === box77.innerHTML && box73.innerHTML === box81.innerHTML) {
        selectWinnerBoxes(box73, box77, box81);
    } if (box75.innerHTML !== "" && box75.innerHTML === box77.innerHTML && box75.innerHTML === box79.innerHTML) {
        selectWinnerBoxes(box75, box77, box79);
    }

};



// listening for a click on any indivdual box, then runs switcheroo function
for(let i=0; i < boxes.length; i++){
    boxes[i].addEventListener("click", switcheroo);
    // console.log(boxes[i]);
}

// this function switches between X & O whenever clicked
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

// style function - background shadow on the title will follow the mouse on mousemove
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
};


// reset button
const newGame = document.querySelector("button");
newGame.addEventListener("click", replay);
body.addEventListener("mousemove", shadow);

function replay(){
    window.location.reload();
}

// anime({
//     targets: mainGuy,
   
// });