# Dashboard utilisateurs (React)

Mini-projet : un tableau de bord pour gérer des utilisateurs, avec un formulaire d'ajout et de modification, un affichage en tableau, des statistiques par rôle et une recherche.

Réalisé par Tajmout Taha 

## Fonctionnalités

- Tableau de bord avec le nombre d'utilisateurs, la répartition par rôle et les 5 derniers ajouts
- Liste complète des utilisateurs avec recherche par nom ou email
- Formulaire d'ajout avec validation (nom obligatoire, email valide et unique)
- Modification et suppression (avec confirmation)
- Sauvegarde dans le navigateur (localStorage) : les données restent après un rechargement
- Navigation entre pages avec React Router

## Stack utilisée

| Outil                                     | Rôle                                 |
|---                                        |---                                   |
| React 18+                                 | Interface et composants              |
| Vite                                      | Outil de développement et de build   |
| React Router (react-router-dom)           | Navigation entre les pages           |
| CSS simple (`App.css`)                    | Mise en forme                        |
| localStorage                              | Stockage des données côté navigateur |

Il n'y a pas de back-end ni de base de données, comme ce n'est pas demandé dans les consignes du test 

## Installation

```bash
git clone <URL-DU-DEPOT>
cd ProjetSeomaniak_React
npm install
npm run dev
```

L'application est disponible sur http://localhost:5173.

## Routes

| Route                   | Page  | Description |
|---                      |---           |---|
| `/`                     | `Dashboard`  | Statistiques et derniers utilisateurs ajoutés |
| `/users`                | `UsersPage`  | Liste complète, recherche, modification et suppression |
| `/users/new`            | `NewUserPage` | Formulaire d'ajout d'un utilisateur |
| `/users/:id/edit`       | `EditUserPage`| Formulaire de modification d'un utilisateur |
| `*`                     | `NotFound`    | Page affichée quand l'adresse n'existe pas |

## Structure du projet

```
dashboard-react/
├── screenshots/            Captures d'écran de l'application
├── src/
│   ├── main.jsx            Point d'entrée (BrowserRouter + UsersProvider)
│   ├── App.jsx             Navbar + définition des routes
│   ├── App.css             Styles
│   ├── components/
│   │   ├── Navbar.jsx      Barre de navigation
│   │   ├── StatsBar.jsx    Cartes de statistiques
│   │   ├── UserForm.jsx    Formulaire (ajout et modification) avec validation
│   │   └── UserTable.jsx   Tableau des utilisateurs
│   ├── pages/
│   │   ├── Dashboard.jsx   Page /
│   │   ├── UsersPage.jsx   Page /users
│   │   ├── NewUserPage.jsx Page /users/new
│   │   └── EditUserPage.jsx Page /users/:id/edit
│   ├── context/
│   │   └── UsersContext.jsx  État global des utilisateurs + localStorage
│   └── utils/
│       ├── constants.js    Liste des rôles
│       └── validate.js     Règles de validation du formulaire
└── package.json
```

## Fonctionnement

- `UsersContext` garde la liste des utilisateurs et fournit `addUser`, `updateUser` et `deleteUser` à toutes les pages. CRUD Operations."
- Les composants (`StatsBar`, `UserForm`, `UserTable`) reçoivent leurs données par props et ne dépendent pas des pages, donc ils sont réutilisables.
- `UserForm` sert à la fois pour l'ajout et la modification.

## Captures d'écran

Les captures sont dans le dossier `screenshots/`.

## Pistes d'amélioration

- Connecter l'application à une vraie API (Node/Express ou Laravel) et une base de données
- Ajouter l'authentification
- Ajouter la pagination et le tri des colonnes
- Ajouter des tests (Vitest et React Testing Library)
