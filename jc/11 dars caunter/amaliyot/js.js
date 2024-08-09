let wrapper = document.querySelector(".wrapper");
let count = 0;


function plus() {
    count++;
    a();

}
function reset() {
    count=0;
    a();    
}

function a() {
    const span_p = document.querySelector("p")
    span_p.textContent = count;
}

function led(){
    const raqamElement = document.querySelector(".raqam");
    const span_p = document.querySelector(".raqam p");

    if (raqamElement.style.backgroundColor === "white") {
        raqamElement.style.backgroundColor = "black";
        span_p.style.color = "white";
    } else {
        raqamElement.style.backgroundColor = "white";
        span_p.style.color = "black";
    }
}


wrapper.innerHTML = `
<button class="raqam"><p>${count}</p></button>
<div class="tugma">
    <button class=" button_1" onclick="led()"></button>
    <button class=" button_1" onclick="reset()"></button>
</div>
<button class="count" onclick="plus()"></button>

`;
a();