let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissiors_div = document.getElementById('s');

function getcomputerChoice() {
    const choices = ['r', 'p', 's'];
    const randoNUmber = (Math.floor(Math.random() * 3));
    return choices[randoNUmber]
}

function converToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors"
}
function win(user, computer) {
    userScore++;
    const smallUserWord = "user".fontsize(3).sup()
    const smallCompWord = "comp".fontsize(3).sup()
    const userChoice_div = document.getElementById(user)
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_p.innerHTML = ` ${converToWord(user)} ${smallUserWord}  beats ${converToWord(computer)} ${smallCompWord}  You win! &#128540`
    userChoice_div.classList.add('green_glow')
    setTimeout(() => {
        userChoice_div.classList.remove('green_glow')
    }, 300)

}

function lose(user, computer) {
    computerScore++;
    const userChoice_div = document.getElementById(user)
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup()
    const smallCompWord = "comp".fontsize(3).sup()
    result_p.innerHTML = ` ${converToWord(user)} ${smallUserWord}  loses to ${converToWord(computer)} ${smallCompWord}  You lost! &#128542`
    userChoice_div.classList.add('red_glow')
    setTimeout(() => {
        userChoice_div.classList.remove('red_glow')
    }, 300)

}

function draw(user, computer) {

    const userChoice_div = document.getElementById(user)
    const smallUserWord = "user".fontsize(3).sup()
    const smallCompWord = "comp".fontsize(3).sup()
    result_p.innerHTML = ` ${converToWord(user)} ${smallUserWord}  equals to ${converToWord(computer)} ${smallCompWord}  It's a draw!`
    userChoice_div.classList.add('gray_glow')
    setTimeout(() => {
        userChoice_div.classList.remove('gray_glow')
    }, 300)

}

function game(userChoice) {

    const computerChoice = getcomputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;

    }

}

function main() {

    rock_div.addEventListener('click', () => {
        game("r");
    })
    paper_div.addEventListener('click', () => {
        game("p");
    })
    scissiors_div.addEventListener('click', () => {
        game("s");
    })
}
main()