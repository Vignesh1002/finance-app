# Step 1: Build image using Node (Vite)
FROM node:18-alpine as BUILD_IMAGE

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Run the build command to create the production build
RUN npm run build

# Step 2: Production image (uses the build output)
FROM nginx:alpine as PRODUCTION_IMAGE

WORKDIR /usr/share/nginx/html

# Copy the built app from the build stage
COPY --from=BUILD_IMAGE /app/dist /usr/share/nginx/html

# Expose port 80 (Nginx default port)
EXPOSE 80

# Serve the app using Nginx
CMD ["nginx", "-g", "daemon off;"]
