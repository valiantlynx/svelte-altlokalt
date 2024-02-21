# Use Ubuntu as the base image to set up the development environment
FROM ubuntu:20.04 AS dev

# Avoid prompts from apt
ENV DEBIAN_FRONTEND=noninteractive

# Update and install dependencies
RUN apt-get update && apt-get install -y \
    curl \
    git \
    # Install Node.js
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    # Clean up
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Set the working directory in the container
WORKDIR /app

# Copy the project files into the container
COPY ../ .

# Install Yarn and project dependencies
RUN npm install -g yarn && yarn install

# Expose the port the app runs on
EXPOSE 3000
EXPOSE 5173
EXPOSE 4173

# Use bash to handle terminal commands
SHELL ["/bin/bash", "-c"]

# Add a user for the development environment
RUN useradd -m svelte && chown -R svelte:svelte /app
USER svelte

# Start the SvelteKit app in development mode
CMD ["yarn", "dev"]
