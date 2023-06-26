# Base image
FROM node:18 as build-stage

ENV NODE_OPTIONS="--max-old-space-size=2048"

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app files
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve app with Nginx
FROM nginx:1.21-alpine

# Copy the build output from the build-stage
COPY --from=build-stage /app/build /usr/share/nginx/html

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]