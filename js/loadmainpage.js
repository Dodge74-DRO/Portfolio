// restaurer la position dans la page (avant visu page détail d'un projet
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
// envoi d'un mail avec la messagerie par défaut
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Empêche la soumission du formulaire

        var subject = document.getElementById('subject').value;
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        // Construire l'URL mailto
        var mailtoLink = 'mailto:contact@dodge74.fr'
            + '?subject=' + encodeURIComponent(subject)
            + '&body=' + encodeURIComponent('Nom: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);

        // Rediriger vers l'URL mailto
        window.location.href = mailtoLink;
    });
});