const wrapper = document.querySelector(".wrapper");
let count = 1;

function plus() {
    count++;
    a();
}

function minus() {
    count > 1 ? count-- : count;
    a();
}

function reset() {
    count == 0
}
function a() {
    const span = document.querySelector("span")
    span.textContent = count;
    if (count === 9) {
        alert('sdksf')
    }
}

wrapper.innerHTML = `
 <button onclick="minus()">-</button>
 <span>${count}</span>
 <button onclick="plus()">+</button>
 
 `;
