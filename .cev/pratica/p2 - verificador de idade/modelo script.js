function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique o ano novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //mesma coisa que <img id='foto'> no HTML

        if(fsex[0].checked){
            genero = 'homem'
            if(idade <= 3){
                img.setAttribute('src', 'bebe.png')
            } else if(idade>3 && idade<=14){
                img.setAttribute('src', 'crianca1.png')
            } else if(idade>14 && idade<=17){
                img.setAttribute('src', 'adolescente1.png')
            } else if(idade>=18 && idade<=65){
                img.setAttribute('src', 'adulto1.png')
            } else{
                img.setAttribute('src', 'idoso1.png')
            }
        } else{
            genero = 'mulher'
            if(idade <= 3){
                img.setAttribute('src', 'bebe.png')
            } else if(idade>3 && idade<=14){
                img.setAttribute('src', 'crianca2.png')
            } else if(idade>14 && idade<=17){
                img.setAttribute('src', 'adolescente2.png')
            } else if(idade>=18 && idade<=65){
                img.setAttribute('src', 'adulto2.png')
            } else{
                img.setAttribute('src', 'idoso2.png')
            }
        }
        //res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}