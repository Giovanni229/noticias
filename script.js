const botaoabir= doccument.queryselector(".header-mobile > button")
const botaofechar=documnet.queryselector(".header.mobile nav button")

const body = document.queryselector("body")
const nav = document.queryselector(".header-mobile nav")

botaoabrir.addeventlistener('click', abrirmenu)
botaofechar.addeventlistener('click',fecharmenu)
 
function abrirmenu(){
    body.classlist.add("escurecer")
    nav.classlist.add("abrir")
}

function fechrmenu() {
    body.classlist.remove("escurecer")
    nav.classlist.remove("abrir")
}