const sectionTorres = document.getElementById('sectionTorres')
const buttonRestart = document.getElementById('restartGame')
let torreSelecionada
let discoSelecionado


function createTowers() {
    for (let i = 0; i < 3; i++) {      
        const div = document.createElement('div')
        div.classList.add('torres')
        div.id = `torre${i+1}`
        div.addEventListener('click', function(e){
            torreSelecionada = e.currentTarget;
            moveDisk();
        })
        sectionTorres.appendChild(div)
    } 
}
createTowers()

function createDisk () {
    const torres = document.querySelector('.torres')

    for (let i = 0; i < 5; i++){
        const disk = document.createElement('div')
        torres.parentElement.children[0].appendChild(disk)
        disk.className = `torre1 disco${i+1}`
        disk.id = `disco${i+1}`
        disk.addEventListener('click', function(e){
             discoSelecionado = e.currentTarget.parentElement.lastChild;
        })
    }
}
createDisk()

function moveDisk(){
    if(torreSelecionada.lastChild === null){
        torreSelecionada.appendChild(discoSelecionado);      
    }else if(torreSelecionada.lastChild.clientWidth > discoSelecionado.clientWidth){
        torreSelecionada.appendChild(discoSelecionado);
    }
    verificaWin()
}

function verificaWin () {
    let torre2 = document.getElementById('torre2')
    let torre3 = document.getElementById('torre3')
    if (torre2.childElementCount === 5 || torre3.childElementCount === 5) {
        modalWin()
    }
}
function modalWin () {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.classList.add('modal')

    const h2 = document.createElement('h2')
    div.appendChild(h2)
    h2.innerText = "Torre feita com Sucesso"

    const button = document.createElement('button')
    div.appendChild(button)
    button.innerText = "Ok"
    button.addEventListener('click', resetGame)
    
}
function resetGame () {
    const close = document.querySelector('.modal')
    document.body.removeChild(close)
    sectionTorres.innerHTML = ""
    createTowers()
    createDisk()
}
function restartGame () {
    sectionTorres.innerHTML = ""
    createTowers()
    createDisk()
}

buttonRestart.addEventListener('click', restartGame)
