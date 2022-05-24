const button_container = document.querySelector(".button-container");
const button_array = Array.from(button_container.querySelectorAll("button"));
let user_score = 0;
let computer_score = 0;

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let you = document.getElementById("user-score");
let comp = document.getElementById("computer-score");
let round_result = document.getElementById("result");
let comp_choice = document.getElementById("comp-choice");
let user= document.getElementById("user-choice");
let match = document.getElementById("game");

function computerPlay(){
    let comp_hand = Math.floor(Math.random() * 3) + 1;
    let comp_object = "rock";

    if(comp_hand === 1) {
      comp_object="rock";
    }

    else if(comp_hand=== 2){
      comp_object = "paper";
    }

    else{
      comp_object = "scissors";
    }

    return comp_object;
}


function playRound (computer, user_choice){
    let result;

    if(user_choice === computer){
        result = "Tie!";
    }

    else if(user_choice === "rock" && computer === "paper"){
        result = "You lose!";
    }

    else if(user_choice === "rock" && computer === "scissors"){
        result = "You win!";
    }

    else if(user_choice === "paper" && computer === "rock"){
        result = "You win!";
    }

    else if(user_choice === "paper" && computer === "scissors"){
        result = "You lose!";
    }

    else if(user_choice === "scissors" && computer === "paper"){
        result = "You win!";
    }

    else if(user_choice === "scissors" && computer === "rock"){
        result = "You lose!";
    }

    else{
       
    }
    return result;

}

 


function rock_btn(){
 

    let computer = computerPlay();
    comp_choice.innerHTML = "CPU chose: "  + computer;
    let user_choice = "rock";  
    user.innerHTML = "You chose: " + user_choice; 
    let turn_result = playRound(computer, user_choice);

    if(turn_result === "You lose!"){
        computer_score = computer_score + 1;
    }

    else if (turn_result === "You win!"){
        user_score = user_score + 1;
    }
    round_result.innerHTML = "Round result: " + turn_result;
    you.innerHTML = "You: " + user_score;
    comp.innerHTML = "Computer: " + computer_score;
    if(computer_score === 5 && user_score < 5){
        match.innerHTML = "Game over: You lose!"
        computer_score = 0;
        user_score =0 ;
    }

    else if(user_score === 5 && computer_score <5 ){
        match.innerHTML = "Game over: You win!"
        computer_score = 0;
        user_score =0 ;
    }

    else{
        match.innerHTML = ""

    }
}

function paper_btn(){


    let computer = computerPlay();
    comp_choice.innerHTML = "CPU chose: "  + computer;
    let user_choice = "paper";
    user.innerHTML = "You chose: " + user_choice; 
    let turn_result = playRound(computer, user_choice);

    if(turn_result === "You lose!"){
        computer_score = computer_score + 1;
    }

    else if (turn_result === "You win!"){
        user_score = user_score + 1;
    }

    round_result.innerHTML = "Round result: " + turn_result;
    you.innerHTML = "You: " + user_score;
    comp.innerHTML = "Computer: " + computer_score;

    if(computer_score === 5 && user_score < 5){
        match.innerHTML = "Game over: You lose!"
        computer_score = 0;
        user_score =0 ;
    }

    else if(user_score === 5 && computer_score <5 ){
        match.innerHTML = "Game over: You win!"
        computer_score = 0;
        user_score =0 ;
       
    }

    else{
        match.innerHTML = ""

    }
}


function scissor_btn(){



    let computer = computerPlay();
    comp_choice.innerHTML = "CPU chose: "  + computer;
    let user_choice = "scissors";
    user.innerHTML = "You chose: " + user_choice; 
    let turn_result = playRound(computer, user_choice);

    if(turn_result === "You lose!"){
        computer_score = computer_score + 1;
    }

    else if (turn_result === "You win!"){
        user_score = user_score + 1;
    }

    round_result.innerHTML = "Round result: " + turn_result;
    you.innerHTML = "You: " + user_score;
    comp.innerHTML = "Computer: " + computer_score;


    if(computer_score === 5 && user_score < 5){
        match.innerHTML = "Game over: You lose!"
        computer_score = 0;
        user_score =0 ;
    }

    else if(user_score === 5 && computer_score <5 ){
        match.innerHTML = "Game over: You win!"
        computer_score = 0;
        user_score =0 ;
    }

    else{
        match.innerHTML = ""

    }
       
}


function game(){


    rock.onclick = rock_btn;
    scissors.onclick = scissor_btn;
    paper.onclick = paper_btn;



  }
  
  game();

  
  