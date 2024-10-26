# Base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port (optional, for development server)
EXPOSE 3000

# Start the application (development mode)
CMD ["npm", "run", "dev"]