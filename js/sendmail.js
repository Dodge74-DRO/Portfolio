function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Construire le mailto link
    const mailToLink = `mailto:contact@dodge74.fr?subject=${encodeURIComponent(subject)}&body=Nom: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;

    // Ouvrir le client de messagerie
    window.location.href = mailToLink;
    return false; // Empêche l'envoi traditionnel du formulaire
}