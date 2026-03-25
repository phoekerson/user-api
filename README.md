# User API

API REST pour la gestion d'utilisateurs.

## Installation
```bash
npm install
```

## Démarrage
```bash
npm start
```

## Tests
```bash
npm test
npm run test:coverage
```

## Linting
```bash
npm run lint
```

## Endpoints

| Méthode | Route            | Description              |
|---------|------------------|--------------------------|
| GET     | /api/users       | Liste tous les utilisateurs |
| GET     | /api/users/:id   | Récupère un utilisateur  |
| POST    | /api/users       | Crée un utilisateur      |