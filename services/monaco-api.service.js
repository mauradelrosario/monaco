/**
 * Récupère la liste de tous les lieux monégasque
 * Fait une requête GET sur l'endpoint suivant : "https://www.visitmonaco.com/api/fr/Lieu/GetWithoutContent"
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
export async function getAllPlaces() {
  const url = 'https://www.visitmonaco.com/api/fr/Lieu/GetWithoutContent';
  return fetch(url)
  .then(response => response.json())
  .then(data => {
    const placesFormatted = Object.keys(data).map(function(key) {
      let places = {
        Labels: {},
        GoogleData: {},
        Categories: []
      };

      places.Labels.fr = data[key].NomLieu !== null ? data[key].NomLieu.fr : null;
      places.GoogleData.Position = data[key].GoogleData !== null ? data[key].GoogleData.Position : null;
      places.Categories[0] = {
        CodeCategorie: null,
        Labels: {}
      }

      if (data[key].Categories !== [] || data[key].Categories !== null ) {
        places.Categories[0].CodeCategorie = data[key].Categories[0].CodeCategorie;
        places.Categories[0].Labels.fr = data[key].Categories[0].Labels !== null ? data[key].Categories[0].Labels.fr : null;  
      }

  
      return places;
    });
  
    return placesFormatted;
    });
}