const controleAjuste = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controleAjuste.forEach((e)=>{
    e.addEventListener("click", (ev)=>{
        manipulaDados(ev.target.dataset.controle, ev.target.parentNode)
        atualizaEstatistica(ev.target.dataset.peca)
    })
})

function manipulaDados (operador, controleAjuste){

    const peca =  controleAjuste.querySelector("[data-contador]");
 
    if(operador === "+") { 
         peca.value++}
    else{
        peca.value--}
}

function atualizaEstatistica(peca) {
    console.log(pecas[peca])
    estatistica.forEach( (e)=>{
        e.textContent = parseInt(e.textContent) + pecas[peca][e.dataset.estatistica]
    } )

}



