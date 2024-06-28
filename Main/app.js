document.addEventListener('DOMContentLoaded', (event) => {
    // Fonction pour créer un lien de téléchargement et déclencher le téléchargement
    function downloadFile(fileUrl, fileName) {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Gestion du téléchargement du CV et de la lettre de motivation
    const downloadCVButton = document.getElementById('downloadCV');
    const downloadLMButton = document.getElementById('downloadLM');
    const cvImage = document.getElementById('CV-Timo');
    const lmImage = document.getElementById('lm-Timo');

    if (downloadCVButton && cvImage) {
        downloadCVButton.addEventListener('click', () => {
            downloadFile(cvImage.src, 'Alternance-Développeur-Web.webp');
        });
    }

    if (downloadLMButton && lmImage) {
        downloadLMButton.addEventListener('click', () => {
            downloadFile(lmImage.src, 'lm-Timothée-Hauser-–-V2.webp');
        });
    }

    // Ajoutez des écouteurs d'événements pour les éléments h1
    const h1File1 = document.getElementById('downloadWord1');
    const h1File2 = document.getElementById('downloadPowerpoint1');

    if (h1File1) {
        h1File1.addEventListener('click', () => {
            downloadFile('../veilles/Veille_Techno_1.docx', 'Veille_Techno_1.docx');
        });
    }

    if (h1File2) {
        h1File2.addEventListener('click', () => {
            downloadFile('../veilles/Veille_Technologique.pptx', 'Veille_Technologique.pptx');
        });
    }

    // Gestion des clics sur les projets
    const buttons = document.querySelectorAll('.event');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const link = button.querySelector('a').getAttribute('href');
            window.location.href = link;
        });
    });

    // Gestion du bouton "Go Back" pour la page de CV et de projets
    const goBackButton = document.getElementById('goBackbutton');
    const goBackButtonProjet = document.getElementById('goBackButton');
    const goBackImg = document.getElementById('goBack');

    if (goBackImg) {
        goBackImg.addEventListener('click', () => {
            window.location.href = '../Main/Card.html';
        });
    }

    if (goBackButton) {
        goBackButton.addEventListener('click', () => {
            window.location.href = '../Main/Card.html';
        });
    }

    if (goBackButtonProjet) {
        goBackButtonProjet.addEventListener('click', () => {
            window.location.href = 'Card.html';
        });
    }

    // Event listener for pressing the Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            if (goBackButton && goBackButton.style.display !== 'none') {
                goBackButton.click();
            } else if (goBackButtonProjet && goBackButtonProjet.style.display !== 'none') {
                goBackButtonProjet.click();
            } else if (goBackImg && goBackImg.style.display !== 'none') {
                goBackImg.click();
            }
        }
    });
});
