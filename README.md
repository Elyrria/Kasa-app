# Kasa App

## Comment lancer le projet ?

### Depuis le dossier frontend

#### Avec npm

Faites la commande `npm install` pour installer les dépendances puis `npm start` pour lancer le projet.

# Kasa App - Créez une application web de location immobilière avec React

## Scénario :

En tant que développeur Front-End en freelance, l'agence de location immobilière me recrute pour développer leur nouvelle plateforme web. Le site de Kasa a été codé il ya 10 ans en ASP.NET avec un code legacy important. la CTO a donc lancé une refonte totale pour passer à une stack complète en JavaScrip avec NodeJS et React.

### Mes objectifs :

-  Configurer la navigation entre les pages de l'application avec React Router ;
*  Développer des éléments de l'interface d'un site web grâce à des composants React ;
*  Mettre en œuvre des animations CSS ;
*  Développer une interface web avec Sass ;
*  Initialiser une application avec Create React App.
### Description : 

#### Contraintes techniques :

Dans le cadre de ce projet, j'ai dû respecter les directives de codage de Kasa, qui comprenaient à la fois des contraintes fonctionnelles et techniques. J'ai été autorisé à utiliser uniquement une seule bibliothèque externe, à savoir React-Router. De plus, il m'a été demandé de développer toute l'interface en SASS. Pour cela, j'ai découpé les éléments en composants modulables et réutilisables, et j'ai mis en place une structure logique des différents fichiers. L'utilisation de React-Router m'a permis de mettre en place les différentes routes de navigation de l'application.

##### Découpage en composants modulaires et réutilisables :

-   Un composant par fichier ;
*   Structure logique des différents fichiers ;
*   Utilisation des props entre les composants ;
*   Utilisation du state dans les composants quand c'est nécessaire ;
*   Gestion des événements ;
*   Listes.

##### Recat Routeur :

-   Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement :
*   Il existe une page par route.
*   La page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées.
*   La logique du routeur est réunie dans un seul fichier.

##### Générales :

-   Le code ne doit pas produire d'erreur ou de warning dans la console.
*   Styling: Tout le style CSS doit être codé en utilisant Sass.
*   Pas de librairie React externe

#### Contraintes fonctionnelles :

-   Pour le défilement des photos dans la galerie (composant Gallery) :
    Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image.
    Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image.
    S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" ainsi que la numérotation n'apparaissent pas.
    La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.

-   Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page.
    Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
    Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.
