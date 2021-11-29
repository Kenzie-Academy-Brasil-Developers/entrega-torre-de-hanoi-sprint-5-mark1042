let towers = [  [],
                [],
                []]
const sectionTorres = document.getElementById('sectionTorres')


function createTowers() {
    for (let i = 0; i < 3; i++) {      
        const div = document.createElement('div')
        div.classList.add('torres')
        div.id = `torre${i+1}`
        div.addEventListener('click', function(e){
            torreSelecionada = e.currentTarget;
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
        disk.className = `disco${i+1}`
        disk.id = `disco${i+1}`
        disk.style.marginBottom = "2px";
        disk.addEventListener('click', function(e){
            discoSelecionado = e.currentTarget;
            console.log(e.currentTarget);
        })
        towers[0].push(disk)
    }
}
createDisk()

let discoSelecionado = document.getElementById("disco5");
let torreSelecionada = document.getElementById("torre1");

function moveDisk(){
    torreSelecionada.appendChild(discoSelecionado);
}

//moveDisk()

