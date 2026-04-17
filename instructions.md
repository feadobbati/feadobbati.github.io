# Contexte

Je crée un template de site web très simple à déployer sur GitHub pour mes collègues de recherche.  
Le site doit leur permettre de :

1. Se présenter.
2. Afficher leurs publications.
3. Regrouper leurs liens importants.

Le site doit être une version beaucoup plus simple de mon site personnel :  
https://vikvador.github.io

# Structure du projet

## Fichiers

- `index.html` doit se trouver à la racine du projet.
- Tous les autres fichiers peuvent être placés dans un dossier `page/`.

## Dossier `data/`

Le dossier `data/` doit contenir :

- `profile.json` : toutes les informations liées à la présentation personnelle.
- `publication.json` : toutes les publications à afficher sur le site.
- `bkg.png` : image de fond du site.
- `pp.png` : photo de profil.
- `cv.pdf` : CV académique à afficher en ligne.

# Ce que tu dois faire

1. Créer les fichiers JSON avec les champs nécessaires.
2. Générer un site web sans onglets, contrairement à mon site personnel.
3. Reprendre uniquement une version simplifiée du design de la page "about" :
   - une colonne gauche avec l’image de fond,
   - la photo de profil,
   - le prénom et le nom,
   - une courte phrase décrivant le poste ou la fonction,
   - les liens vers GitHub, LinkedIn, ORCID, Google Scholar et l’email.
4. Créer une colonne droite avec :
   - une bio sous forme de paragraphe,
   - un lien vers le CV académique,
   - une liste de cards pour les publications.

# Design des publications

Chaque card de publication doit contenir :

- le titre en premier,
- les auteurs en dessous,
- la conférence ou la revue de publication,
- un numéro en haut à droite au format `#X`, correspondant au rang de la publication,
- deux boutons en bas :
  - `Paper`
  - `GitHub`

# Règles de fonctionnement

1. Si le lien du paper ou du GitHub n’est pas fourni, le bouton correspondant doit être désactivé.
2. Tous les champs à compléter dans les JSON doivent utiliser des valeurs de template.
3. Pour les publications, ajoute une fausse publication d’exemple afin de montrer le format attendu.

# Objectif

Produis un template propre, minimaliste et facile à remplir par un collègue.
