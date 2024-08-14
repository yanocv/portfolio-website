# Base image
FROM node:20 AS base

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20 AS production

# Set working directory
WORKDIR /app

# Copy the built application and dependencies from the base stage
COPY --from=base /app/node_modules /app/node_modules
COPY --from=base /app/.next /app/.next
COPY --from=base /app/public /app/public

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
