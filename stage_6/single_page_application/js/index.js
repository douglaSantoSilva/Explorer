import  Router  from "./router.js"
import { backgroundChange } from "./backgroundChange.js"

const navStyle01 = document.querySelector('nav :nth-child(1)')
const navStyle02 = document.querySelector('nav :nth-child(2)')
const navStyle03 = document.querySelector('nav :nth-child(3)')
const bodyPage = document.querySelector('body')

const router = new Router()
const backgroundChanges = backgroundChange({bodyPage})

router.add("/", "./pages/home.html")
router.add("/index.html", "./pages/home.html")
router.add("/theUniverse", "./pages/universe.html")
router.add("/exploration", "./pages/exploration.html")
router.add(404, "./pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

navStyle01.addEventListener('click', backgroundChanges.home)
navStyle02.addEventListener('click', backgroundChanges.universe)
navStyle03.addEventListener('click', backgroundChanges.exploration)

