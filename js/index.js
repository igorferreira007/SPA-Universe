import { Router } from "./router.js"

const buttons = document.querySelectorAll('nav a')
const body = document.querySelector('body')

const router = new Router()

router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => {
  router.handle()
  btnActive()
}
window.route = () => {
  router.route()
  btnActive()
}

btnActive()

function btnActive() {
  const pathname = window.location.pathname

  buttons.forEach(button => {
    button.classList.remove('active')
    if (button.getAttribute('href') == pathname) {
      button.classList.add('active')
      changeBackground()
    }
  })
}

//Verifica qual a rota atual e atualiza o plano de fundo
function changeBackground() {
  if (window.location.pathname == "/") {
    body.style.background = "url(../assets/bg-home.png) no-repeat"
  } else if (window.location.pathname == "/universe") {
    body.style.background = "url(../assets/bg-universe.png) no-repeat"
  } else if (window.location.pathname == "/exploration") {
    body.style.background = "url(../assets/bg-exploration.png) no-repeat"
  }
  body.style.backgroundSize = "cover"
  body.style.backgroundAttachment = "fixed"
}
