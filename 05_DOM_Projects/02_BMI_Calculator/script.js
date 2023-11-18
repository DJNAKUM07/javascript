const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
     e.preventDefault(); // stop sending data on server!

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = "Enter Valide height";
        results.style.color = 'red';
    }
    else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Enter Valide weight";
        results.style.color = 'red';
    } else {
       const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span> <br/>`;
        results.style.color = 'white';

        if (bmi < 18.6) {
           results.innerHTML += `<span style="color: yellow;">Under Weight</span>` 
        }
        else if (bmi >= 18.6 && bmi < 24.9) {
           results.innerHTML += `<span style="color : green">Normal Range</span>` 
        }
        else {
           results.innerHTML += `<span style ="color : red">OverWeight</span>` 
        }
    }
})