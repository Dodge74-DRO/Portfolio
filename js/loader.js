function loadHTML(id, filename) {
    fetch(filename)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

// Chargez les fichiers HTML
/** loadHTML('header', 'header.html'); **/
loadHTML('footer', 'footer.html');