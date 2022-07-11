# Update FROM command from alpine to 16-alpine to fix runtime error issue
FROM node:16-alpine

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

CMD [ "npm", "start" ]