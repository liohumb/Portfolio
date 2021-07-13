// VARIABLEs NAVBAR
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
const modalViews = document.querySelectorAll('.cv_detail'),
       modalBtns = document.querySelectorAll('.services_button'),
      modalCloses = document.querySelectorAll('.cv_detail-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
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