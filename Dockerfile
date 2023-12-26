FROM node:20.10.0
WORKDIR /app
COPY package*.json .
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "run", "start"]