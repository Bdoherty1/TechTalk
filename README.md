# TechTalk - User Registry and Blogging Platform

## Overview

TechTalk is a user registry and blogging platform designed to facilitate user registration, authentication, and blog post creation. It provides a user-friendly interface for users to sign up, log in, create blog posts, and interact with other users through comments.

## Features

- **User Authentication**: Secure user authentication system allowing users to sign up, log in, and log out.
- **User Registry**: Register new users with unique usernames and email addresses.
- **Blog Post Creation**: Logged-in users can create, edit, and delete their blog posts.
- **Comments**: Users can comment on blog posts, fostering interaction and engagement within the community.
- **Session Management**: Utilizes session management for user authentication and tracking logged-in status.
- **Responsive Design**: Responsive web design ensures a seamless user experience across various devices and screen sizes.

## Installation

To run the TechTalk application locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/TechTalk.git

2. Install dependencies using npm: npm install
3. Set up the database:
- Ensure you have MySQL installed locally.
- Create a MySQL database named `user_db`.
- Configure the database connection settings in the `.env` file.
4. Seed the database with sample data (optional): npm run seed
5. Start the server:
6. Access the application in your web browser at `http://localhost:3001`.

## Technologies Used

- Node.js
- Express.js
- Sequelize ORM
- MySQL
- Handlebars.js
- HTML5/CSS3
- JavaScript
## Current Deployed
https://young-caverns-42853-59f9a17f83e8.herokuapp.com/

## Future Development
I am actively working on deploying the application to Heroku. Additionally, I have integrated Handlebars.js for enhanced view rendering and implemented controllers for home and user functionalities. Furthermore, I have established API routes for various features including comments, the dashboard, home, posts, and user interactions. Stay tuned for further developments as I continue to enhance the application.