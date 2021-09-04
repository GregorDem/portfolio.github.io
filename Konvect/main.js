function toReg() {
    document.getElementById('ent').style.display = 'none'
    document.getElementById('reg').style.display = 'flex'
}
function toEnt() {
    document.getElementById('reg').style.display = 'none'
    document.getElementById('ent').style.display = 'flex'
}
let infoAboutUsers = []
function Registration() {
    let user = {
        name: `${document.getElementById("name").value}`,
        secondName: `${document.getElementById("secondName").value}`,
        login: `${document.getElementById("loginR").value}`,
        pasword: `${document.getElementById("paswordR").value}`
    }
}