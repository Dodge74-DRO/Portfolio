window.addEventListener('load', function() {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    const savedPageHeight = sessionStorage.getItem('pageHeight');
    
    if (scrollPosition && savedPageHeight) {
        // Fonction pour vérifier si le contenu est complètement chargé
        function checkContentLoaded() {
            if (document.body.scrollHeight >= savedPageHeight) {
                // Le contenu est chargé, restaurer la position de défilement
                window.scrollTo(0, parseInt(scrollPosition));
                // Effacer les valeurs sauvegardées
                sessionStorage.removeItem('scrollPosition');
                sessionStorage.removeItem('pageHeight');
            } else {
                // Attendre un peu et revérifier
                setTimeout(checkContentLoaded, 200);
            }
        }

        // Commencer la vérification
        checkContentLoaded();
    }
});