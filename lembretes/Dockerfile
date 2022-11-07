#escolhemos uma imagem base
FROM node:alpine

#diretório de trabalho (onde a aplicação será instalada)
WORKDIR /app

#copiamos o arquivo package.json, que descreve as dependências do projeto, para "dentro" da imagem
COPY package.json .

#baixamos as dependências com o npm
RUN npm install

#copiamos "todos" os demais arquivos para "dentro" da imagem
COPY . .

CMD ["npm", "start"]

