let main=document.querySelector("main")
let userInput=document.getElementById("userInput");
let form=document.querySelector("form");
let displayNumber=document.querySelector("#displayNumber");
let displayAttempLeft=document.querySelector("#attempLeft");
let message=document.getElementById("message");
let welcomeMessage=document.getElementById("welcomeMessage");
let result=document.getElementById("result");
let content=document.getElementById("content");
let resultDiv=document.getElementById("resultDiv");
let img=document.querySelector("img");

let attempleft;
let randomNumber;
let Username;

function startGame() {
    attempleft=5;
    randomNumber=Math.round(Math.random()*100+1);
    Username=prompt("Enter Your Name");
    if (Username==null || Username=='') {
        Username=prompt("Please Enter Your Name");
        startGame();
    }
    welcomeMessage.innerHTML=`Welcome ${Username}`; 
}
startGame();


form.addEventListener("submit",(event)=>{
    
    let number=parseInt(userInput.value)
   //console.log((number+" "+randomNumber));
   if(validateNumber(number)){
    checkNumber(number);
   }
   userInput.value="";
   event.preventDefault();
})

function validateNumber(number) {
    if(number<=0){
        alert("Number should greater then 0.");
    }else if(number>100){
        alert("Number should less then 100.")
    }
    else if(isNaN(number)){
        alert("Invaild Input!! Please Enter valid Number");
    }else{
        return true;
    }
    return false;  

}

function checkNumber(number) {
    if(number>randomNumber){
        message.innerHTML=`Your guessed number is greater then the actual number.`;
        countattemp(number);
    }else if(number<randomNumber){
        message.innerHTML=`Your guessed number is less then the actual number.`;
        countattemp(number);
    }else if(number==randomNumber){
        resultDiv.innerHTML=` <h2>Dear ${Username}</h2>
        <img src="./image/Happy-Emoji-Transparent.png" alt="" height=100 weight=100>
        <h3>You guessed it!
        <br> Great job!</h3>
        <h4>You taken ${Math.abs(attempleft-5) attemps.}</h4>
        <button> <a href="./index.html">Play Again</a></button> `;
        content.innerHTML="";
    }
}

function countattemp(number) {
    attempleft--;
    displayAttempLeft.innerHTML=`${attempleft}`;
    displayNumber.innerHTML+=`${number}-`
    if(attempleft==0){
        resultDiv.innerHTML=`<h2>Dear ${Username}</h2>
        <img src="./image/Sad_Face_Emoji.webp" alt="" height=100 weight=100>
        <h3>The number was tricky this time,
        <br> but keep guessing!</h3>
        <h4>Number was ${randomNumber}</h4>
        <button> <a href="./index.html">Play Again</a></button>`;
        content.innerHTML="";
    }else if(attempleft==1){
        displayAttempLeft.innerHTML=`<span style='color:#e26a23;'>Last attemp left</span>`
    }else if(attempleft==2){
        displayAttempLeft.innerHTML=`<span style='color:#e26a23;'>Last two attemps left</span>`
    }else if (attempleft==3) {
        displayAttempLeft.innerHTML=`<span style='color:#e26a23;'>Last three attemps left</span>`
    }else if(attempleft<=5){
        displayAttempLeft.innerHTML=`Attemps left :: ${attempleft}`
    }
}
