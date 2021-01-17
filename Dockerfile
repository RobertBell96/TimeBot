FROM node:14
RUN npm install
CMD [ "node", "server.js" ]
