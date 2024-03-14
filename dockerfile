FROM node:18.17.0-alpine
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3001
CMD ["node", "dist/app.js"]