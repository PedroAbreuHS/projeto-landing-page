var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("setaesquerda")
var setaDireta = window.document.getElementById("setadireita")

function rolarParaDireita() {
    leonardo.style ="display:none"
    bruna.style ="display:flex"
    setaDireta.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top: 55px"
}

function rolarParaEsquerda() {
    leonardo.style ="display:flex"
    bruna.style ="display:none"
    setaDireta.style = "display:flex; margin-top: 55px"
    setaEsquerda.style = "display:none"
}