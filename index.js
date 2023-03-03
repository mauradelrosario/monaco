
import { getAllPlaces } from './services/monaco-api.service.js';
import monacoService from './services/monaco.service.js';

// Liste des types de lieu désirés
const placeListType = [
  5, //Quartier
  14, //Monuments
  16, //Musées
  17, //Parc-Jardin
  20, //Ports
  22, //Salle de spectacle
  24, //Site sportif
  26, //Théatre
  33, //Accès
  35, //Promenade
  399, //Eglise
  27655, //Casino
];

//Position de référence pour la recherche du lieu le plus proche.
const originPosition = { Lat: 43.727965, Lng: 7.413102 };


monacoService.getPlaceList(placeListType)
.then(placeListFiltered => {
  const count = Object.keys(placeListFiltered).length;
  console.log('Places filtered by type:', count);
  
  let nearestPlace = monacoService.getNearestPlace(placeListFiltered, originPosition);
  console.log(nearestPlace);
});

console.log(
  `Veuillez rechercher le lieu le plus proche de la position suivante : Lat ${originPosition.Lat} Lng ${originPosition.Lng}. Pour plus d'information, lisez le README.md`
);
