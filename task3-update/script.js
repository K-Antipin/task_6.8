let i = 0;
let color = ['red','yellow','green'];
document.querySelector('.trafficLight').addEventListener('click', (event) => {
    event.target.children[i].style.background = 'black';
    i = i == 0 ? 2 : --i;
    event.target.children[i].style.background = color[i];
});