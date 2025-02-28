# Étape 1 : Utiliser l'image officielle Node.js
FROM node:18-alpine

# Étape 2 : Définir le dossier de travail dans le container
WORKDIR /app

# Étape 3 : Copier package.json et installer les dépendances
COPY package.json package-lock.json ./

# 🔥 Ajouter cette ligne pour éviter les erreurs de connexion
RUN npm config set fetch-retry-mintimeout 20000 && npm config set fetch-retry-maxtimeout 120000

RUN npm install

# Étape 4 : Copier le reste des fichiers et construire l’application
COPY . .
RUN npm run build

# Étape 5 : Exposer le port 3000 et démarrer Next.js
EXPOSE 3000
CMD ["npm", "run", "start"]
