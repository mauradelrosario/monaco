# Test technique

C'est votre premier jour dans votre nouvelle mission au sein de la DSN (Direction des Services Numériques). Vous découvrez un nouveau projet mais aussi une nouvelle ville. Monaco. Afin d'apprendre à connaître cette nouvelle ville, vous décider d'aller visiter les différents site important sur votre pause déjeuner. Pour cela vous allez développer un programme qui vous aidera à déterminer le site le plus proche de votre bureau.

## Objectif

L'objectif de ce test est de récupérer la liste des endroits à visiter à Monaco et de calculer le lieu le plus proche par rapport à nos bureaux.

## Implémentation à réaliser

Pour cela vous devez compléter les corps des fonction présent dans les fichier `monaco-api.service.js` et `monaco.service.js`.

Dans le fichier `monaco-api.service.js`, vous devez implémenter la fonction suivantes:

- `getAllPlaces` qui doit récupérer la liste de tous les lieux de Monaco à visiter fourni par l'endpoint public `https://www.visitmonaco.com/api/fr/Lieu/GetWithoutContent`.

Pour plus d'information sur l'API public du site `www.visitmonaco.com`, voici la documentation : https://www.visitmonaco.com/fr/27301/documentation-api

Dans le fichier `monaco.service.js`, vous devez implémenter les fonctions suivantes:

- `getPlaceList` qui, à partir de la liste de tous les lieux à visiter, filtre ces derniers en fonction d'une liste de type de lieux. Nous vous avons fourni une liste des types de lieux présent dans le fichier `index.js`. Pour plus d'information sur les type de lieux, veuillez consulter l'endpoint suivant: https://www.visitmonaco.com/api/fr/Lieu/GetAllTypes
- `getNearestPlace` qui récupère le lieux parmi la liste des lieux filtré qui se trouve le plus proche de nos locaux. Cette position est défini dans le fichier `index.js`

## Contraintes

Nous vous demandons donc d'implémenter le corps de ces fonctions avec les contraintes suivantes:

- Ne pas modifier la signature de ces méthodes
- Si vous avez besoin de découper votre code en plusieurs fonction, vous devrez implémenter ces méthodes dans le fichier `utils.js`
- Ne pas modifier les variables `placeListType` et `originPosition` présent dans `index.js`

## Comment tester

Pour tester votre implémentation, vous êtes libre d'écrire le code que vous voulez dans `index.js` et de lancer la commande suivante :

`npm run start`

Nous utiliserons une moulinette de correction sur les fichiers contenu dans le dossier `services`. Donc peut importe le contenu du fichier `index.js` que vous rendrez.

## Bonus

Votre première visite du lieu le plus proche vous a donné envie de visiter tous les lieux sur Monaco. Nous vous demandons donc d'implémenter dans le fichier `monaco.service.js`:

- `getDateToVisitAllPlace` qui calcul la date du dernier jour de vos visites. Sachant que vous avez les contraintes suivantes:
  - Vous ne visitez que les jours ouvrés
  - Vous visitez 2 lieux par jours
  - Lors des mois de Juillet et Aout, vous ne pouvez visiter qu'un seul lieu dû à l'activité touristique plus importante
    Vous devez retourner une chaine de caractère au format suivant `dd/MM/yyyy`
