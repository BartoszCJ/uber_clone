FROM node:22.11.0-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY app ./app
COPY assets ./assets
COPY components ./components
COPY constants ./constants
COPY lib ./lib
COPY types ./types
COPY babel.config.js ./
COPY tsconfig.json ./
COPY app.json ./
COPY global.css ./
COPY metro.config.js ./
COPY nativewind-env.d.ts ./
COPY tailwind.config.js ./


RUN npm install -g @expo/ngrok


EXPOSE 19000 19001 19002



CMD ["npx", "expo", "start", "--tunnel", "-c"]
