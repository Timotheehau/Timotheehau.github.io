document.getElementById('downloadCV').addEventListener('click', function() {
  const imageElement = document.getElementById('CV-Timo')

  const downloadLink = document.createElement('a')
  downloadLink.href = imageElement.src
  downloadLink.setAttribute('download', 'Alternance-Développeur-Web.webp')
  downloadLink.style.display = 'none'
  document.body.appendChild(downloadLink)

  downloadLink.click()

  document.body.removeChild(downloadLink)
})

document.getElementById('downloadLM').addEventListener('click', function() {
  const imageElement = document.getElementById('lm-Timo')

  const downloadLink = document.createElement('a')
  downloadLink.href = imageElement.src
  downloadLink.setAttribute('download', 'lm-Timothée-Hauser-–-V2.webp')
  downloadLink.style.display = 'none'
  document.body.appendChild(downloadLink)

  downloadLink.click()

  document.body.removeChild(downloadLink)
})
