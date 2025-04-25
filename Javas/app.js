let boxes = document.querySelectorAll('.box');
let messge = document.querySelector('#msg');
let msgContainer = document.querySelector('.msg-container');
let resetbtn = document.querySelector('#reset-btn');
let turn = true;


let count = 0; 

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

];

boxes.forEach((khoka)=>{
    khoka.addEventListener('click',()=>{
        if(turn === true){
            khoka.innerText="X"
            khoka.classList.add('neonTextX');
            turn = false;
        }
        else{
            khoka.innerText="O";
            khoka.classList.add('neonTextO');
            turn = true;
        }

        khoka.disabled = true;
        count++;
        let isWinner = checkWinner();

      if(count === 9 && !isWinner){
        gameDarw();
      }
        
       
    });

});


const checkWinner = () =>{

    for(let logic of winPattern){
        let post1val = boxes[logic[0]].innerText;
        let post2val = boxes[logic[1]].innerText;
        let post3val = boxes[logic[2]].innerText;

        if(post1val !="" && post2val !="" && post3val !=""){
            if(post1val === post2val && post2val === post3val){
               showWinner(post1val);
               return true;
            }    
        } 
    }

}

const gameDarw = () =>{

    messge.innerText = `Sorry The Game Is Draw😢😢`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}

const showWinner = (winner) =>{

    messge.innerText = `Congratulations 🎉🎉,The Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();


}

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;

    }

}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText = "";
    }
    
}

const resetGame = () =>{

    turn = true;
    count = 0;
    msgContainer.classList.add('hide');
    enableBoxes();


}



resetbtn.addEventListener('click',resetGame)

window.onload = function() {
    animateSequence();
    animateRandom();
};

function animateSequence() {
    var a = document.getElementsByClassName('sequence');
    for (var i = 0; i < a.length; i++) {
        var $this = a[i];
        var letter = $this.innerHTML;
        letter = letter.trim();
        var str = '';
        var delay = 100;
        for (l = 0; l < letter.length; l++) {
            if (letter[l] != ' ') {
                str += '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[l] + '</span>';
                delay += 150;
            } else
                str += letter[l];
        }
        $this.innerHTML = str;
    }
}

function animateRandom() {
    var a = document.getElementsByClassName('random');
    for (var i = 0; i < a.length; i++) {
        var $this = a[i];
        var letter = $this.innerHTML;
        letter = letter.trim();
        var delay = 70;
        var delayArray = new Array;
        var randLetter = new Array;
        for (j = 0; j < letter.length; j++) {
            while (1) {
                var random = getRandomInt(0, (letter.length - 1));
                if (delayArray.indexOf(random) == -1)
                    break;
            }
            delayArray[j] = random;
        }
        for (l = 0; l < delayArray.length; l++) {
            var str = '';
            var index = delayArray[l];
            if (letter[index] != ' ') {
                str = '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[index] + '</span>';
                randLetter[index] = str;
            } else
                randLetter[index] = letter[index];
            delay += 80;
        }
        randLetter = randLetter.join("");
        $this.innerHTML = randLetter;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}