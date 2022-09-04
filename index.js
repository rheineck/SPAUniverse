import { Router } from './router.js'

const background = document.querySelector('.bkg')
const home = document.querySelector('.homeLink')
const universe = document.querySelector('.universeLink')
const exploration = document.querySelector('.explorationLink')
const router = new Router()
router.add('/', "/pages/home.html")
router.add('/exploration', "/pages/exploration.html")
router.add('/universe', "/pages/universe.html")
// router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

home.addEventListener('click', function() {
    background.classList.add('home')
    background.classList.remove('universe')
    background.classList.remove('exploration')
    home.classList.add('active')
    universe.classList.remove('active')
    exploration.classList.remove('active')
})

universe.addEventListener('click', function() {
    background.classList.remove('home')
    background.classList.add('universe')
    background.classList.remove('exploration')
    home.classList.remove('active')
    universe.classList.add('active')
    exploration.classList.remove('active')
})

exploration.addEventListener('click', function() {
    background.classList.remove('home')
    background.classList.remove('universe')
    background.classList.add('exploration')
    home.classList.remove('active')
    universe.classList.remove('active')
    exploration.classList.add('active')
})