let towers = [  [],
                [],
                []]
const sectionTorres = document.getElementById('sectionTorres')

function createTowers() {
    for (let i = 0; i < 3; i++) {      
        const div = document.createElement('div')
        div.classList.add('torres')
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

        towers[0].push(disk)
    }
}
createDisk()

function moveDisk () {
    const disk = document.querySelectorAll('.torre1')
    console.log(disk)
}
moveDisk()

