import { getAllPlaces } from './monaco-api.service.js';
import { computeDistance} from './utils.js';

/**
 * Recupère le lieu le plus proche à vol d'oiseau par rapport au point définit par @currentPosition
 * @param {[
 *  {
 *    Labels: {
 *      fr: string
 *    },
 *    GoogleData: {
 *      Position: { Lat : number, Lng: number}
 *    },
 *    Categories: [
 *      {
 *        CodeCategorie: number,
 *        Labels: {
 *          fr: string
 *        }
 *      }
 *    ]
 *  }
 * ]} placeList Liste des lieux
 * @param {{ Lat: number, Lng: number}} currentPosition Point
 * @returns {{
 *    Labels: {
 *      fr: string
 *    },
 *    GoogleData: {
 *      Position: { Lat : number, Lng: number}
 *    },
 *    Categories: [
 *      {
 *        CodeCategorie: number,
 *        Labels: {
 *          fr: string
 *        }
 *      }
 *    ]
 *  }} lieu le plus proche de la position @currentPosition
 */
function getNearestPlace(placeList, currentPosition) {
  let shortestDistance = Number.MAX_VALUE;

  let nearestPlace = null

    for (const place of placeList) {
    if (place.GoogleData !== null && place.GoogleData.Position !== null) {
      const distance = computeDistance(currentPosition.Lat, currentPosition.Lng, place.GoogleData.Position.Lat, place.GoogleData.Position.Lng);
      if (distance < shortestDistance) {
        nearestPlace = place;
      }
    }
  }

  return nearestPlace;
}

/**
 * Récupère la liste des lieux monégasque filtré par types de lieu
 * @param {[number]} placeListType liste des ID des type de lieu que l'on souhaite récupérer.
 * @returns {[
 *  {
 *    Labels: {
 *      fr: string
 *    },
 *    GoogleData: {
 *      Position: { Lat : number, Lng: number}
 *    },
 *    Categories: [
 *      {
 *        CodeCategorie: number,
 *        Labels: {
 *          fr: string
 *        }
 *      }
 *    ]
 *  }
 * ]} Liste de tous les lieux monégasque
 */
async function getPlaceList(placeListType) {
  return getAllPlaces()
  .then(places => places.filter(place => placeListType.includes(place.Categories[0].CodeCategorie)))
  .catch(error => {
    console.error(error);
  });
}

// ----------- BONUS ------------

/**
 * Calcule la date à laquel vous aurez visité tous les lieux.
 * Vous avez les contraintes suivante:
 *  - Vous ne visitez que les jours ouvrés
 *  - Vous visitez 2 lieux par jours
 *  - Lors des mois de Juillet et Aout, vous ne pouvez visiter qu'un seul lieu dû à l'activité touristique plus importante
 * @param {[
 *  {
 *    Labels: {
 *      fr: string
 *    },
 *    GoogleData: {
 *      Position: { Lat : number, Lng: number}
 *    },
 *    Categories: [
 *      {
 *        CodeCategorie: number,
 *        Labels: {
 *          fr: string
 *        }
 *      }
 *    ]
 *  }
 * ]} placeList liste des lieux à visiter
 * @param {Date} startDate Date de début des visites
 * @returns {string} Date du dernier jour des visit au format suivant dd/MM/yyyy
 */
function getDateToVisitAllPlace(placeList, startDate) {
  // TODO
}

export default {
  getNearestPlace,
  getPlaceList,
  getDateToVisitAllPlace,
};
