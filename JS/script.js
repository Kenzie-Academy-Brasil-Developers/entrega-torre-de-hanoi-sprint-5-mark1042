const sectionTorres = document.getElementById('sectionTorres')
let torreSelecionada
let discoSelecionado


function createTowers() {
    for (let i = 0; i < 3; i++) {      
        const div = document.createElement('div')
        div.classList.add('torres')
        div.id = `torre${i+1}`
        div.addEventListener('click', function(e){
            torreSelecionada = e.currentTarget;
            if (torreSelecionada.lastChild < discoSelecionado.clientWidth){
                moveDisk(torreSelecionada, discoSelecionado);
            }
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
            discoSelecionado = e.currentTarget;
        })
    }
}
createDisk()

function moveDisk(torre, disco){
    torre.appendChild(disco);
}