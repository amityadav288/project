let har = document.getElementById("har")
let min = document.getElementById("min")
let sec = document.getElementById("sec")

function updateTime() {
    let time = new Date()
    har.innerHTML = time.getHours() < 10 ? "0" + time.getHours() : time.getHours()
    min.innerHTML = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()
    sec.innerHTML = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds()
}

setInterval(() => {
    updateTime()
}, 1000);




