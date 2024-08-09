//new date

const hour = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")


const timer = () => {
    const time = new Date()
    hour.textContent = time.getHours();
    minutes.textContent = time.getMinutes();
    seconds.textContent = time.getSeconds();
    if (time.getSeconds() < 10) {
        seconds.textContent = "0" + time.getSeconds();
    }
    if (time.getMinutes() < 10) {
        minutes.textContent = "0" + time.getMinutes();
    }
    if (time.getHours() < 10) {
        hour.textContent = "0" + time.getMinutes();
    }

}

setInterval(() => {
    timer()
}, 1000)
console.log(hour);