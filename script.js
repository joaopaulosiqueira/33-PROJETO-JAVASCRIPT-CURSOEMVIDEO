function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verefique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10){
                // Criança
                img.setAttribute('src', 'jovem.jpg')
                if (img && img.style) {
                    img.style.height = '250px'
                    img.style.width = '250px'
                }
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem.jpg')
                if (img && img.style) {
                    img.style.height = '250px'
                    img.style.width = '250px'
                }
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'jovem.jpg')
                if (img && img.style) {
                    img.style.height = '250px'
                    img.style.width = '250px'
                }
            } else {
                // Idoso
                img.setAttribute('src', 'jovem.jpg')
                if (img && img.style) {
                    img.style.height = '250px'
                    img.style.width = '250px'
                }
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10){
                // Criança
                img.setAttribute('src', 'jovem2.jpg')
                if (img && img.style) {
                    img.style.height = '250px'
                    img.style.width = '250px'
                }
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem2.jpg')
                if (img && img.style) {
                    img.style.height = '250px'
                    img.style.width = '250px'
                }
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'jovem2.jpg')
                if (img && img.style) {
                    img.style.height = '250px'
                    img.style.width = '250px'
                }
            } else {
                // Idoso
                img.setAttribute('src', 'jovem2.jpg')
                if (img && img.style) {
                    img.style.height = '250px'
                    img.style.width = '250px'
                }
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}