let divTag = document.querySelector('#div');
divTag.innerHTML = '<h2 style="color: white; background-color: blue; text-align: center; padding:  10px">Good Morning</h2>';
let h2Element = document.querySelector ('#msg');
let sayGoodMorning = () => {
    h2Element.textContent = 'Good Morning';
    h2Element.style.backgroundColor = 'red';
    h2Element.style.color = 'white';
};
let sayGoodAfternoon = () => {
    h2Element.textContent = 'Good Afternoon';
    h2Element.style.backgroundColor = 'orange';
    h2Element.style.color = 'white';
};
let sayGoodEvening = () => {
    h2Element.textContent = 'Good Evening';
    h2Element.style.backgroundColor = 'coral';
    h2Element.style.color = 'white';
};
let sayGoodNight = () => {
    h2Element.textContent = 'Good Night';
    h2Element.style.backgroundColor = 'black';
    h2Element.style.color = 'white';
};

// JavaScript Event listeners

let gmButton = document.querySelector('#gm');
gmButton.addEventListener('click',function(){
newDisplayMessage('Good Morning','purple');
});