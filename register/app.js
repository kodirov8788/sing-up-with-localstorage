
let form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let email = e.target[0].value
    let password = e.target[1].value
    let repassword = e.target[2].value

    let user = localStorage.getItem("users")
    if (!user) {
        localStorage.setItem("users", JSON.stringify([]))
    }
    let usersGroup = JSON.parse(localStorage.getItem("users"))
    // console.log(usersGroup)
    let isUser = usersGroup?.some(user => user.email === email)

    // create new user
    if (isUser) return alert("bunday user mavjud")


    if (password === repassword) {
        let user = {
            email,
            password,
        }
        usersGroup.push(user)
    } else {
        alert("error")
    }
    let StringBox = JSON.stringify(usersGroup)
    localStorage.setItem("users", StringBox)


})