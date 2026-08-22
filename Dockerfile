# Stage 1: Build React application
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build Vite application
RUN npm run build


# Stage 2: Nginx
FROM nginx:alpine

# Remove default Nginx page
RUN rm -rf /usr/share/nginx/html/*

# Copy Vite production build
COPY --from=build /app/dist /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
