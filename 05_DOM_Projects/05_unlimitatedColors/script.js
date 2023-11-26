let IntervalID = null;

document.querySelector('#start').addEventListener('click', () => {
    console.log('started changing color')
    if(!IntervalID)
        IntervalID = setInterval(changeBodyColor, 1000);
})

document.querySelector('#stop').addEventListener('click', () => {
    console.log('stop changing color')
    clearInterval(IntervalID);
    IntervalID = null;
})

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}

function changeBodyColor() {
    let color = getRandomColor();
    console.log('Heelo body',color)
    document.querySelector('body').style.backgroundColor = color;
}