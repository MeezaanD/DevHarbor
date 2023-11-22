-- Create Users Table
CREATE TABLE users (
  user_id VARCHAR(36) PRIMARY KEY,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  profile_img TEXT NOT NULL
);

-- Create Projects Table
CREATE TABLE projects (
  project_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id VARCHAR(36) NOT NULL,
  title VARCHAR(255) NOT NULL,
  design_url VARCHAR(255),
  code_url VARCHAR(255),
  live_url VARCHAR(255),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Create Notes Table
CREATE TABLE notes (
  notes_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id VARCHAR(36) NOT NULL,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Create Courses Table
CREATE TABLE courses (
  course_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id VARCHAR(36) NOT NULL,
  title VARCHAR(255) NOT NULL,
  url VARCHAR(255),
  startedAt DATETIME NOT NULL,
  finishedAt DATETIME DEFAULT NULL,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);
