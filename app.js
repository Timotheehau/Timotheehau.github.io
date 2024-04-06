var menu = document.getElementById('mySidenav')
var openBtn = document.getElementById('openBtn')
var closeBtn = document.getElementById('closeBtn')

openBtn.onclick = openNav
closeBtn.onclick = closeNav



function openNav() {
    menu.classList.add('active')
}

function closeNav() {
    menu.classList.remove('active')
}

openBtn.addEventListener('click', () => {
    openBtn.style.display = 'none'

})
closeBtn.addEventListener('click', () => {
    openBtn.style.display = 'block'
})


