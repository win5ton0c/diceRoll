let dice = document.getElementById('myRoll');
let myH2 = document.getElementById('myH2');

let output = 0;


dice.onclick = function(){
    output = Math.floor(Math.random() * 6) + 1;
    //console.log(output)
    myH2.textContent = output;
    

}

