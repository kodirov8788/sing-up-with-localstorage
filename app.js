let form = document.querySelector("form")


form.addEventListener("submit", (e) => {
    e.preventDefault()
    let email = e.target[0].value
    let password = e.target[1].value

    let users = JSON.parse(localStorage.getItem("users"))
    console.log(users)
    if (!users) return alert("bunday user mavjud emas")
    let isUser = users.some(user => user.email === email && user.password === password)
    if (isUser) {
        // let link = document.createElement("a")
        // form.appendChild(link)
        // link.href = "./home/index.html"
        // link.innerText = "home page"
        location.replace("./home/index.html")
    }
})