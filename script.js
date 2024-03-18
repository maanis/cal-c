let tog = document.querySelector(".toggle")
console.log(tog);
var check = 0
tog.addEventListener('click', () => {
    document.body.classList.toggle('darkmode')

    let tog_btn = document.querySelector(".toggle-circle")

    if (check == 0) {
        tog_btn.style.transform = "translatex(18px)";
        check = 1
    } else {
        tog_btn.style.transform = "translatex(0)";
        check = 0
    }
})

scr = document.querySelector("#screen")

btn = document.querySelectorAll("button")

btns = Array.from(btn)
var str = ""
btns.forEach(e => {
    e.addEventListener('click', (ev) => {
        console.log(ev.target.innerHTML);

        if (ev.target.innerHTML == "=") {
            if (scr.value.startsWith("+") || scr.value.startsWith("-") || scr.value.startsWith("*") || scr.value.startsWith("/") || scr.value.startsWith("%")) {
                str = "ye kya kar ra bhai😩"
                scr.value = str
            } else {
                str = eval(str)
                scr.value = str
            }
        }

        else if (ev.target.innerHTML == "AC") {
            str = ""
            scr.value = str
        }

        else if (ev.target.innerHTML == "") {
            str = str.substring(0, str.length - 1)
            scr.value = str
        }

        else {
            str += ev.target.innerHTML
            scr.value = str


        }
    })
});