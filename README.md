# My Next.js App

Welcome to My Next.js App! This project is built with [Next.js](https://nextjs.org/) and it is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Additionally, it includes database integration and follows a structured organization to help you get started quickly.

## Project Structure

The project is organized into the following directories:

- **pages:** Contains Next.js pages, each corresponding to a route in the application.
- **components:** Reusable React components used across multiple pages.
- **public:** Static assets like images and styles.
- **lib:** Utility functions for interacting with API routes.
- **styles:** Global styles and styling-related files using Tailwind CSS.
- **seeds:** Contains user info seeds for initializing the database.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB: Install MongoDB and make sure the service is running. You can download it from [MongoDB Download Center](https://www.mongodb.com/try/download/community).

### Installation

Follow these steps to set up the project:
 - Clone the repository: 
    ```
    git clone git@github.com:abdullahwarraich/nextjs-app.git
    cd nextjs-app
    ```
 - Install the required packages using:
    ```bash
    $ npm install
    ```
 - Create users by running this command; it will populate the database with users:
    ```bash
    $ npm run seeds
    ```

### Running the Application
Use these commands to run the application:
```bash
# Start in development mode
$ npm run dev
```

### The application will run on that port
```http://localhost:3000```

### Testing
Execute the following command to run tests:
```bash
# Run unit tests
$ npm run test
```

## Author
 - **_Abdullah Warraich_**
