# Running the Project Locally


# Steps to Run Locally

# Clone the Repository:

git clone https://github.com/Vignesh1002/finance-app.git

# Change to the file directory

cd finance-app

# Install Dependencies:

npm install

# Set Environment Variables:

# Create a .env file in the root of the project with the following content(There is a .env.copy file for reference):

VITE_API_KEY=your_api_key

# Replace your_api_key with your secret API key.

# Run the Development Server:

npm run dev

# The application will be available at http://localhost:5173.

# Build for Production:
# To create a production-ready build:

npm run build

# The output will be in the dist folder.



# Running the Project with Docker

# Using the Docker Image

# Prerequisites

# Docker installed on your system.

# Steps to Run the Docker Image Locally

# Pull the Docker Image:
# Run the following command to pull the Docker image from Docker Hub:

docker pull vignesh1002/finance-app:latest

# Run the Docker Container:
# Use the following command to run the container:

docker run -d -p 8080:80 finance-app


# Access the Application:
# The application will be available at http://localhost:8080.

# Stop the Container:
# To stop the running container:

docker stop <container-id>

Replace <container-id> with the actual container ID from docker ps.

# Remove the Container:
# If you want to remove the container: