let counter = 0;
const decrease = document.getElementById('DECREASE');
const increase = document.getElementById('INCREASE');
const reset = document.getElementById('RESET');
let number = document.getElementById('counter')

decrease.addEventListener('click', function(){
    counter--;
    number.textContent = counter;
})

increase.addEventListener('click', function(){
    counter++;
    number.textContent = counter;
})

reset.addEventListener('click', function(){
    counter = 0;
    number.textContent = counter;
})

