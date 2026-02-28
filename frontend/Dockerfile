#--- Step 1: Build Stage -----
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build


#--- Step 2: Prodction Stage -----
#Copy the build(dist) from Stage 1 to the WORKDIR of nginx env
FROM nginx:alpine

WORKDIR /usr/share/nginx/html 

COPY --from=build /app/dist ./

EXPOSE 80
#Vite(after built, ngnix default port is 80)

#By default, nginx runs CMD ["nginx", "-g", "daemon off;"]