const buttons = document.querySelectorAll('.button'); // target by className
//console.log(buttons);

const body = document.querySelector('body'); // target by tag

buttons.forEach((btn) => {
    btn.addEventListener('mouseover', (e) => {
        body.style.backgroundColor = e.target.id; // in id we give color name as a id so directly give id as a bgcolor
        changeColorName();
    })
})

// Check if the mouseover element is not a button
body.addEventListener('mouseover', (e) => {
    if (!e.target.classList.contains('button')) {
        // Outside area of the button is mouseover
        body.style.backgroundColor = 'orange';
        changeColorName();
    }
});

// give any random color when click on body
function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    // Random value between 0 and 255 for blue

    return `rgb(${red}, ${green}, ${blue})`;
}
body.addEventListener(('click'), (e) => {
    body.style.backgroundColor = getRandomColor();
    changeColorName();
})

// change colorName
function changeColorName() {
    const colorName = document.querySelector('#changeColorName');
    const currColor = body.style.backgroundColor.toString();
    colorName.textContent = `current color : ${currColor}`;
}

// give any random color when click on body
// function getRandomColor() {
//     let letters = '0123456789ABCDEF'
//     let color = '#';
//     for (let i = 0; i < 6; i++)
//         color += letters[Math.floor(Math.random() * 16)];
//     return color;
// }

// buttons.forEach((btn) => {
//     // console.log(btn);
//     btn.addEventListener('click', function (e) {
//         body.style.backgroundColor = e.target.id;

//         // console.log(e.target);
//         // console.log(e);
//         // console.log(e.target.id); // so we get on which btn clicked.

//         // switch (e.target.id) {
//         //     case 'grey':
//         //         body.style.backgroundColor = e.target.id;
//         //         break;
//         //     case 'white':
//         //         body.style.backgroundColor = e.target.id;
//         //         break;
//         //     case 'blue':
//         //         body.style.backgroundColor = e.target.id;
//         //         break;
//         //     case 'yellow':
//         //         body.style.backgroundColor = e.target.id;
//         //         break;
//         //     default:
//         //         body.style.backgroundColor = red;
//         //         break;
//         //}
//     })
// })