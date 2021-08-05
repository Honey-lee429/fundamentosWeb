let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let cel = document.querySelector('#tel')
let btn = document.querySelector('.btn').addEventListener("click", validaFormulario)
let mapa = document.querySelector('#maps')

function validaFormulario() {
    if(nome.value.length < 3 || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        alert("Nome e e-mail são obrigatório")
    } else {
        alert("Dados enviados com sucesso")
    }
}

function validaNome() {
    let txt = document.querySelector('.nome')

    if (nome.value.length < 3) {
        txt.innerHTML = 'Nome inválido'
        txt.style.color = 'red'
        nome.style.borderColor = "red"

    } else {
        txt.innerHTML = 'Nome válido'
        txt.style.color = 'green'
        nome.style.borderColor = "black"
    }
}

function validaEmail() {
    let txt = document.querySelector('.email')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txt.innerHTML = "e-mail inválido"
        email.style.border = '2px solid red'
        txt.style.display = 'block'
    } else {
        txt.style.display = 'none'
        email.style.borderColor = "black"
    }
}

function validaCelular() {
    let txt = document.querySelector('.celular')

    if (cel.value.length < 11) {
        txt.innerHTML = 'Número inválido, acrescentar DDD + número sem espaço'
        txt.style.color = 'red'
        txt.style.display = 'block'
    } else {
        txt.style.display = 'none'
    }
}

function zoomMapa() {
    mapa.style.width = '600px'
    mapa.style.height = '400px'
}

function zoomOutMapa() {
    mapa.style.width = '400px'
    mapa.style.height = '300px'
}