# Step 1: Use an official Node.js image as a base
FROM node:18 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the entire project (including src folder and other files)
COPY ./src ./src
COPY vite.config.js .
COPY . .

# Step 6: Build the app for production
RUN npm run build

# Step 7: Use a lightweight web server to serve the app
FROM nginx:alpine

# Step 8: Copy the built app to the nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Step 9: Expose the port where the app will run
EXPOSE 80

# Step 10: Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
