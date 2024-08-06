# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory for the backend
WORKDIR /app/backend

# Copy backend package.json and package-lock.json to the working directory
COPY backend/package*.json ./

# Install backend dependencies
RUN npm install

# Copy the backend code to the working directory
COPY backend/. .

# Set the working directory for the frontend
WORKDIR /app/frontend

# Copy frontend package.json and package-lock.json to the working directory
COPY frontend/package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the frontend code to the working directory
COPY frontend/. .

# Build the frontend
RUN npm run build

# Set the working directory back to the backend
WORKDIR /app/backend

# Copy the frontend build to the backend's public directory
RUN cp -r /app/frontend/build /app/backend/public

# Expose the backend port
EXPOSE 3000

# Define environment variable for production
ENV NODE_ENV=production

# Start the backend server
CMD ["node", "server.js"]
