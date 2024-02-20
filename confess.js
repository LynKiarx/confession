const button = document.querySelector('button');

button.addEventListener('mouseenter',
function(){
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const randomX = Math.ramdom() * maxX;
    const randomY = Math.ramdom() * maxY;

    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';

});