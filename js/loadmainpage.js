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

/* document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        console.log('envoi email')
        e.preventDefault(); // Empêche la soumission normale du formulaire
        
        var subject = document.getElementById('subject').value;
        var encodedSubject = encodeURIComponent(subject);
        var newAction = form.action + '?subject=' + encodedSubject;
        
        form.action = newAction; // Met à jour l'URL de l'action
        form.submit(); // Soumet le formulaire avec la nouvelle action
    });
});*/
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