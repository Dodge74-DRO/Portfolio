function genererGalerie(DataProjets) {
    const portfolio = document.getElementById('containerProjets');

    // Pour chaque projet, on crée un élément HTML pour l'afficher
    DataProjets.forEach(projet => {

        const projectElement = document.createElement('div');
        projectElement.className="col-lg-4 col-md-6 all latest";

        const divPortfolioBox = document.createElement('div');
        divPortfolioBox.className="portfolio_box";
        projectElement.appendChild(divPortfolioBox);

        const divSinglePortfolio = document.createElement('div');
        divSinglePortfolio.className="single_portfolio";

        // Ajout de l'image
        const imgElement = document.createElement('img');
        imgElement.className="img-fluid w-100";
        imgElement.src = "img/portfolio/"+projet.image;
        imgElement.alt = projet.titre;
        divSinglePortfolio.appendChild(imgElement);
        // Ajout d'un événement click pour rediriger vers la page de détails
        imgElement.addEventListener('click', () => {
            sauvegarderPositionScroll(); // Sauvegarde la position de défilement actuelle
            window.location.href = `portfolio-details.html?id=${projet.id}`;
        });
            
        const divOverlay = document.createElement('div');
        divOverlay.className="overlay";
        divSinglePortfolio.appendChild(divOverlay);
        // Ajout d'un événement click pour rediriger vers la page de détails
        divOverlay.addEventListener('click', () => {
            sauvegarderPositionScroll(); // Sauvegarde la position de défilement actuelle
            window.location.href = `portfolio-details.html?id=${projet.id}`;
        });

        const ahref =  document.createElement('div');
        ahref.href = "img/portfolio/"+projet.image;
        ahref.className = "img-gal";
        divSinglePortfolio.appendChild(ahref);

        const divIcon = document.createElement('div');
        divIcon.className="icon";
        ahref.appendChild(divIcon);
        // Ajout d'un événement click pour rediriger vers la page de détails
        divIcon.addEventListener('click', () => {
            sauvegarderPositionScroll(); // Sauvegarde la position de défilement actuelle
            window.location.href = `portfolio-details.html?id=${projet.id}`;
        });
                
        const span = document.createElement('span');
        span.className="lnr lnr-cross";
        divIcon.appendChild(span);

        const divShortInfo = document.createElement('div');
        divShortInfo.className="short_info";

        // Ajout du titre
        const titreElement = document.createElement('h4');
        titreElement.textContent = projet.titre;
        divShortInfo.appendChild(titreElement);

        // Ajout de la description
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = projet.description;
        divShortInfo.appendChild(descriptionElement);

        // Ajout du projet au portfolio
        divPortfolioBox.appendChild(divSinglePortfolio);
        divPortfolioBox.appendChild(divShortInfo);
        portfolio.appendChild(projectElement);
    });
}

// Charger les données du fichier JSON
async function chargerProjets() {
    try {
        const response = await fetch('./datas/projets.json'); // Charger le fichier JSON
        const DataProjets = await response.json(); // Convertir la réponse en JSON
        genererGalerie(DataProjets); // Appeler la fonction pour afficher les projets
    } catch (error) {
        console.error("Erreur lors du chargement des projets : ", error);
    }
}

// Fonction pour sauvegarder la position de défilement dans le sessionStorage
function sauvegarderPositionScroll() {
    sessionStorage.setItem('scrollPosition', window.scrollY);
    sessionStorage.setItem('pageHeight', document.body.scrollHeight);
}

// Appelle la fonction pour générer la galerie
document.addEventListener('DOMContentLoaded', chargerProjets);
