# Angular Project

[![Build Status](https://travis-ci.com/Sydher/angular-project.svg?branch=master)](https://travis-ci.com/Sydher/angular-project)

## Informations sur le projet

*angular-project* est un squelette d'un projet Angular 9.

[![Bulma](https://img.shields.io/badge/Bulma-0.8.0-blue.svg)](https://bulma.io/)
[![PrimeNG](https://img.shields.io/badge/PrimeNG-9.0.0-blue.svg)](https://primefaces.org/primeng/#/)
[![FontAwesome](https://img.shields.io/badge/FontAwesome-5.12.1-blue.svg)](https://fontawesome.com/)

## Configuration de l'environnement de développement

### Installer Yarn

Voir https://classic.yarnpkg.com/fr/docs/install.

### Installer Angular CLI

`yarn global add @angular/cli`

### Utiliser Yarn avec Angular CLI

`ng config -g cli.packageManager yarn`

### Installation des dépendances

`cd angular-project && yarn`

## Développement

### Création de composants

`ng generate component|directive|pipe|service|class|guard|interface|enum|module component-name`

### Serveur local

`ng serve` pour démarrer le serveur, l'application est accessible via `http://localhost:4200/`.

### Tests

`ng test` pour exécuter les tests unitaires via [Karma](https://karma-runner.github.io).

`ng e2e` pour exécuter les tests e2e via [Protractor](http://www.protractortest.org/).

### Analyser le code

`ng lint` pour analyser le code et vérifier le respect des règles.

## Génération des livrables

`ng build` pour générer le code deployable sur un serveur.
Le résultat est disponible dans `dist/`.
