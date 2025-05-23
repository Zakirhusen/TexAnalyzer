# Step 1: Build the React app
FROM node:16 as build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Step 2: Serve using Nginx
FROM nginx:stable-alpine

# Copy build files to a subdirectory in Nginx root
COPY --from=build /app/build /usr/share/nginx/html/TexAnalyzer

# Copy custom Nginx config
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
