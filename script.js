const botaoabir= doccument.queryselector("header > button")
const botaofechar=documnet.queryselector("header nav button")

const body = document.queryselector("body")
const nav = document.queryselector("header .mobile ")

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