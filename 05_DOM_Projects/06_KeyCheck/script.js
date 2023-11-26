const table = document.querySelector('table');

window.addEventListener('keydown', (e) => {
    const tr = document.createElement('tr');
    tr.innerHTML = 
        `<td>${e.key === " " ? "space" : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>`
    
    table.appendChild(tr);
})