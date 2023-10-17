let btn = document .getElementById('btn');
let output = document.getElementById('outputtext');

let number = [Math.floor(Math.random() * 25)]

btn.addEventListener('click', function (){
    let input = document.getElementById('userInput').value;
        if (input == number){
            output.innerHTML = 'Congrats, you guessed correctly! :)';
            output.style.color = "green";
        } else if (input < number) {
            output.innerHTML = "You guessed too low. Try guessing higher!";
            output.style.color = "blue";
        }; 
        
        if (input > number) {
            output.innerHTML = "You guessed too high. Try guessing lower!";
            output.style.color = "red";
        };

        
})