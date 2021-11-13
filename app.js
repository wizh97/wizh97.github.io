let mydiv = document.querySelector("#mydiv")
let mybtn = document.querySelector("#btn")


mybtn.addEventListener('click', () => {
    mydiv.innerHTML = '<h1>have a nice day</h1>'
    mydiv.style.color = 'green'
})