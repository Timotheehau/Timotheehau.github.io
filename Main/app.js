var menu = document.getElementById('mySidenav')
var openBtn = document.getElementById('openBtn')
var closeBtn = document.getElementById('closeBtn')

openBtn.onclick = openNav
closeBtn.onclick = closeNav

const buttonGoUp = document.getElementById('buttonGoUp')

buttonGoUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

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

document.getElementById('downloadCV').addEventListener('click', function() {
  const imageElement = document.getElementById('CV-Timo')

  // Crée un lien de téléchargement
  const downloadLink = document.createElement('a')
  downloadLink.href = imageElement.src
  downloadLink.setAttribute('download', 'Alternance-Développeur-Web.webp')
  downloadLink.style.display = 'none'
  document.body.appendChild(downloadLink)

  // Déclenche le téléchargement
  downloadLink.click()

  // Nettoie le lien de téléchargement
  document.body.removeChild(downloadLink)
})

document.getElementById('downloadLM').addEventListener('click', function() {
  const imageElement = document.getElementById('lm-Timo')

  // Crée un lien de téléchargement
  const downloadLink = document.createElement('a')
  downloadLink.href = imageElement.src
  downloadLink.setAttribute('download', 'lm-Timothée-Hauser-–-V2.webp')
  downloadLink.style.display = 'none'
  document.body.appendChild(downloadLink)

  // Déclenche le téléchargement
  downloadLink.click()

  // Nettoie le lien de téléchargement
  document.body.removeChild(downloadLink)
})

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault()
  
//     const formData = new FormData(this)
  
//     fetch('/send', {
//       method: 'POST',
//       body: new URLSearchParams(formData),
//     })
//     .then(response => response.text())
//     .then(data => {
//       document.getElementById('successMessage').style.display = 'block'
//       document.getElementById('contactForm').reset()
//     })
//     .catch(error => console.error('Error:', error))
//   })
