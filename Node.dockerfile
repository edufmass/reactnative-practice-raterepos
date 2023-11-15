# develop stage
FROM node:18-bullseye as dev-stage

ARG user
ARG uid
ARG gid

EXPOSE 3000
EXPOSE 8081

RUN apt clean && apt update && apt install python build-essential -y
RUN npm install -g npm@10.2.3 && npm install -g @expo/ngrok@^4.1.0 #&& npm install -g expo-cli

USER $user

WORKDIR /app