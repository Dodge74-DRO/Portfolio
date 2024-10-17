function initMap() {
  // Position à afficher sur la carte (Lac d'Annecy)
  const location = { lat: 45.89874980495466, lng: 6.127440260779592 };

  // Création de la carte centrée sur la position donnée
  const map = new google.maps.Map(document.getElementById('mapBox'), {
    zoom: 13,          // Niveau de zoom
    center: location    // Coordonnées du centre de la carte
  });

  // Création d'une InfoWindow
  const infowindow = new google.maps.InfoWindow(); // Initialisation de l'InfoWindow

  // Ajout d'un marqueur à la position
  const marker = new google.maps.Marker({
    position: location, // Position du marqueur
    map: map,           // La carte où afficher le marqueur
    title: "Mon adresse" // Titre du marqueur
  });

  // Ajouter un événement de survol pour afficher l'InfoWindow
  marker.addListener('mouseover', function() {
    infowindow.setContent("<h3>Annecy</h3><p>Palais de l'Île</p>"); // Aperçu au survol
    infowindow.open(map, marker);
  });

  // Fermer l'InfoWindow lors du survol
    marker.addListener('mouseout', function() {
    infowindow.close();
  });
}
