let texts = ['text1', 'text2', 'ТЕКСТ3']

let slider = document.querySelector('#slider');
const leftControl = document.querySelector('#left');
const rightControl = document.querySelector('#right');

slider.textContent = texts[0]
rightControl.addEventListener('click', (e) => {
    e.preventDefault();

})

let i = 0

rightControl.addEventListener('click', () => {
    e.preventDefault();
    i++;
    if (i === texts.length) {
        i = 0;
    }
    slider.TextContent = img_1

})

leftControl.addEventListener('click', () => {
    e.preventDefault();
    i--;
    if (i < 0) {
        i = text.lenght - 1;
    }
    slider.TextContent = img_2

})

img.src = img_1
img.src = img_2
