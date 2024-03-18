-- Drop database if exists
DROP DATABASE IF EXISTS user_db;

-- Create database
CREATE DATABASE user_db;

-- Use the created database
USE user_db;

-- -- Create users table
-- CREATE TABLE users (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   name VARCHAR(50) NOT NULL,
--   email VARCHAR(100) NOT NULL UNIQUE,
--   password VARCHAR(100) NOT NULL,
--   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
-- );

-- -- Create blog_posts table
-- CREATE TABLE blog_posts (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   title VARCHAR(100) NOT NULL,
--   content TEXT NOT NULL,
--   user_id INT,
--   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--   FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE RESTRICT
-- );

-- -- Create comments table
-- CREATE TABLE comments (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   content TEXT NOT NULL,
--   user_id INT,
--   blog_post_id INT,
--   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--   FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE RESTRICT,
--   FOREIGN KEY (blog_post_id) REFERENCES blog_posts(id) ON DELETE RESTRICT
-- );