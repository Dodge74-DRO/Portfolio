const urlParams = new URLSearchParams(window.location.search); // Récupérer l'ID de l'URL
const projectId = urlParams.get('id');

fetch('./datas/projets.json') // Charger la base de données JSON
  .then(response => response.json())
  .then(data => {
    const project = data.find(item => item.id == projectId);     // Rechercher l'élément correspondant à l'ID
    if (project) {     // Vérifier si l'élément est trouvé
    const projectImage = document.getElementById('project-image');  // Mettre à jour l'image
    projectImage.src = "img/portfolio/"+project.image;  // URL de l'image
    projectImage.alt = `Image du projet ${project.titre}`; // attribut alt
    document.getElementById('project-titre').textContent = project.titre; // titre du projet
    // Mettre la description de l'objet du projet
    document.getElementById('project-objet').innerHTML = project.objet.map((item, index) => {
      return `<p key="${index}">${item}</p>`;
    }).join('');
    // Mettre la description des compétences du projet
    document.getElementById('project-competences').innerHTML = project.competences.map((item, index) => {
      return `<p key="${index}">${item}</p>`;
    }).join('');
    // lien vers le site Web
      if (project.website) {
        const websiteLink = document.getElementById('project-website');
        websiteLink.href = project.website;
    // sinon ne pas afficher
      } else {
        const link_website = document.getElementById('link_website');
        link_website.classList.add('display_none')            
      };

    // lien vers le dépôt GitHub
      if (project.source) {
        const sourceLink = document.getElementById('project-source');
        sourceLink.href = project.source;
    // sinon ne pas afficher
      } else {
        const link_source = document.getElementById('link_source');
        link_source.classList.add('display_none')            
      };
    } else {
      // Si aucun projet n'a été trouvé, afficher un message d'erreur
      document.getElementById('project-details').textContent = "Projet non trouvé";
    }
  })
  .catch(error => {
    console.error('Erreur lors du chargement de la base de données JSON:', error);
  });