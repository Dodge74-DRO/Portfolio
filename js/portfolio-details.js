// 1. Récupérer l'ID de l'URL
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('id'); // "7" dans cet exemple
console.log(projectId);

// 2. Charger la base de données JSON
fetch('./datas/projets.json') // Remplacez par le chemin vers votre fichier JSON
  .then(response => response.json())
  .then(data => {
    // 3. Rechercher l'élément correspondant à l'ID
    const project = data.find(item => item.id == projectId);

    // 4. Vérifier si l'élément est trouvé
    if (project) {
    
        console.log(project)
    
      // Mettre à jour l'image
    const projectImage = document.getElementById('project-image');
    projectImage.src = "img/portfolio/"+project.image;  // Met à jour l'URL de l'image
    projectImage.alt = `Image du projet ${project.titre}`; // Met à jour l'attribut alt
    
    // Remplacer le titre et la description
    document.getElementById('project-titre').textContent = project.titre;
    document.getElementById('project-objet').innerHTML = project.objet.map((item, index) => {
      return `<p key="${index}">${item}</p>`;
      }).join('');
      document.getElementById('project-competences').innerHTML = project.competences.map((item, index) => {
        return `<p key="${index}">${item}</p>`;
        }).join('');

    // Mettre à jour le lien vers le site Web
      if (project.website) {
        const websiteLink = document.getElementById('project-website');
        websiteLink.href = project.website;
//        websiteLink.textContent = project.website;
      } else {
        const link_website = document.getElementById('link_website');
        link_website.classList.add('display_none')            
      };

    // Mettre à jour le lien vers le dépôt GitHub
      if (project.source) {
        const sourceLink = document.getElementById('project-source');
        sourceLink.href = project.source;
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