# Beispiel für Node.js Backend + React Frontend:
FROM node:18

WORKDIR /app

# Backend
COPY server ./server
# Frontend
COPY client ./client

# Install Backend
WORKDIR /app/server
RUN npm ci

# Install Frontend
WORKDIR /app/client
RUN npm ci && npm run build

# Start Backend (z.B. Express):
WORKDIR /app/server
CMD ["npm", "start"]
