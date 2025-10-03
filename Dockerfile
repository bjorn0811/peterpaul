# Use Node.js 20 LTS
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install all dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Install serve to run static files
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Serve the built application
CMD ["serve", "-s", "dist", "-l", "3000"]