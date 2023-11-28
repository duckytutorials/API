# Use the official Bun Docker image
FROM oven/bun

# Set the working directory
WORKDIR /app

# Define environment variables
ENV CONNECTION_URL=
ENV MIGRATE_URL=


# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN bun install

# Copy the rest of the code
COPY . .


# Start the application
CMD [ "bun", "start" ]