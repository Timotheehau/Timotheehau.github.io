var menu = document.getElementById('mySidenav')
var openBtn = document.getElementById('openBtn')
var closeBtn = document.getElementById('closeBtn')
var goUp = document.createElement('goUp')
const CV = document.getElementById('CV')
const LM = document.getElementById('LM')

goUp.id = 'goUp'
goUp.innerHTML = '&#8593'

goUp.style.position = 'fixed'
goUp.style.bottom = '20px' // Ajustez la position verticale selon vos besoins
goUp.style.right = '20px' // Ajustez la position horizontale selon vos besoins
goUp.style.fontSize = '24px' // Ajustez la taille de la flèche selon vos besoins
goUp.style.cursor = 'pointer' // Changez le curseur pour indiquer qu'il est cliquable
goUp.style.backgroundColor = 'orange' // Changez la couleur d'arrière-plan de la flèche
goUp.style.color = 'white' // Changez la couleur du texte de la flèche
goUp.style.padding = '10px' // Ajoutez un peu d'espace autour du texte de la flèche
goUp.style.borderRadius = '50%'

openBtn.onclick = openNav
closeBtn.onclick = closeNav
var footer = document.getElementById('footer')
footer.parentNode.insertBefore(goUp, footer.nextSibling)


function openNav() {
    menu.classList.add('active')
}

function closeNav() {
    menu.classList.remove('active')
}

CV.addEventListener('click', () => {
    window.location.href = 'Alternance-Développeur-Web.webp'
})

LM.addEventListener('click', () => {
    window.location.href = 'lm-Timothée-Hauser-–-V2.webp'
})

openBtn.addEventListener('click', () => {
    menu.style.display = 'block'
    openBtn.style.display = 'none'
    
})
closeBtn.addEventListener('click', () => {
    menu.style.display = 'none'
    openBtn.style.display = 'block'
})

function goTop() {
    window.scrollTo(0, 0)
}
goUp.addEventListener('click', () => {
    goTop()
})
console.log(goUp, 'goUp')


