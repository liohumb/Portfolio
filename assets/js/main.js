// VARIABLES NAVBAR
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
// AFFICHER MENU
if (navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
// MASQUER MENU
if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
// VARIABLE BOUTTON MENU
const navLink = document.querySelectorAll('.nav_link')
// MASQUER MENU LORS DU CLICK (HOME, COMPETENCES, CONTACT)
function linkAction() {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//TITRE HOME
class TextScramble {
    constructor(el) {
      this.el = el
      this.chars = '!<>-_\\/[]{}—=+*^?#________'
      this.update = this.update.bind(this)
    }

setText(newText) {
  const oldText = this.el.innerText
  const length = Math.max(oldText.length, newText.length)
  const promise = new Promise((resolve) => this.resolve = resolve)

  this.queue = []

  for (let i = 0; i < length; i++) {
    const from = oldText[i] || ''
    const to = newText[i] || ''
    const start = Math.floor(Math.random() * 60)
    const end = start + Math.floor(Math.random() * 60)
    this.queue.push({ from, to, start, end })
  }

  cancelAnimationFrame(this.frameRequest)

  this.frame = 0
  this.update()

  return promise
}

update() {
  let output = ''
  let complete = 0

  for (let i = 0, n = this.queue.length; i < n; i++) {

    let { from, to, start, end, char } = this.queue[i]
    
    if (this.frame >= end) {
      complete++
      output += to
    } else if (this.frame >= start) {
      if (!char || Math.random() < 0.28) {
        char = this.randomChar()
        this.queue[i].char = char
      }

      output += `<span class="home_title-js">${char}</span>`

    } else {
      output += from
    }
  }

  this.el.innerHTML = output

  if (complete === this.queue.length) {
    this.resolve()
  } else {
    this.frameRequest = requestAnimationFrame(this.update)
    this.frame++
  }
}

randomChar() {
  return this.chars[Math.floor(Math.random() * this.chars.length)]
}

}

const phrases = [
  '_Hello,',
  'my names is',
  'Lio Humb',
  '_and',
  'I would like',
  'to work',
  'for you',
  ':)'
]

const el = document.querySelector('.home_title')
const fx = new TextScramble(el)

let counter = 0

const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 800)
  })

  counter = (counter + 1) % phrases.length

}

next()

// VARIABLES COMPETENCES
const skillsContent = document.getElementsByClassName('skills_content'),
        skillHeader = document.querySelectorAll('.skills_header')
// AFFICHER / MASQUER COMPETENCES
function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close'
    }
    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

// VARIABLES CURRICULUM VITÆ
const cvViews = document.querySelectorAll('.cv_detail'),
       cvBtns = document.querySelectorAll('.services_button'),
     cvCloses = document.querySelectorAll('.cv_detail-close')

let cv = function (cvClick) {
    cvViews[cvClick].classList.add('active-cv')
}

cvBtns.forEach((cvBtn, i) => {
    cvBtn.addEventListener('click', () =>{
        cv(i)
    })
})

cvCloses.forEach((cvClose) => {
    cvClose.addEventListener('click', () =>{
        cvViews.forEach((cvView) =>{
            cvView.classList.remove('active-cv')
        })
    })
})

 // VARIABLES DARK MODE
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sunset'
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moonset' : 'uil-sunset'

// ACTIVATION DARK MODE
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moonset' ? 'add' : 'remove'](iconTheme)
}
// RETOUR LIGHT MODE
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})