function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()

    msg.innerText = `Agora são ${hora} horas!`
    if (hora >= 5 && hora <= 12){
        img.src = "dia.png"
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 13 && hora <= 17){
        img.src = "tarde.png"
        document.body.style.background = '#b9846f'
    } else {
        img.src = "noite.png"
        document.body.style.background = '#515154'
    }
}
