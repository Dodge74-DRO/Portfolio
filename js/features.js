function genererFeatures(DataFeatures) {
    const divFeatureInner = document.getElementById('features');
    console.log(divFeatureInner);


    // Pour chaque compétence, on crée un élément HTML pour l'afficher
    DataFeatures.forEach(feature => {

        const divFeatureElement = document.createElement('div');
        divFeatureElement.className = "col-lg-3 col-md-6";

        const divFeatureItem = document.createElement('div');
        divFeatureItem.className = "feature_item";
        console.log(divFeatureItem);

        // Ajout de l'image
        const imgElement = document.createElement('img');
        imgElement.src = feature.image;
        imgElement.alt = feature.titre;
        divFeatureItem.appendChild(imgElement);
        console.log(divFeatureItem);
        // Ajout du titre
        const titreElement = document.createElement('h4');
        titreElement.textContent = feature.titre;
        divFeatureItem.appendChild(titreElement);
        console.log(divFeatureItem);
        // Ajout de la description
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = feature.texte;
        divFeatureItem.appendChild(descriptionElement);
        console.log(divFeatureItem);

        divFeatureElement.appendChild(divFeatureItem);
        console.log(divFeatureElement)

        // Ajout du feature au portfolio
        divFeatureInner.appendChild(divFeatureElement);
        console.log(divFeatureInner);
    });
}

// Charger les données du fichier JSON
async function chargerFeatures() {
    try {
        const response = await fetch('./datas/features.json'); // Charger le fichier JSON
        const DataFeatures = await response.json(); // Convertir la réponse en JSON
        genererFeatures(DataFeatures); // Appeler la fonction pour afficher les compétences
    } catch (error) {
        console.error("Erreur lors du chargement des compétences : ", error);
    }
}

// Appelle la fonction pour générer la galerie
document.addEventListener('DOMContentLoaded', chargerFeatures);
