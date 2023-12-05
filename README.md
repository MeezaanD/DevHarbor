# Project Name

DevHarbor

## Overview

A basic fullstack crud application for users to manage their notes, projects, courses connecting to the backend

## Installation

Describe the installation steps. [Must still do]

## Usage

Explain how to use your project. [Must still do]

## Endpoints

### Users

- **GET /users**

  Retrieves all the users in the database.

- **GET /user/:id**

  Retrieves a single user by ID.

- **POST /register**

  Registers a new user.

- **POST /login**

  Logs in a user.

- **PUT /user/:id**

  Updates user details.

- **DELETE /user/:id**

  Deletes a user by ID.

### Projects

- **GET /user/:userID/projects**

  Retrieves all projects for a specific user.

- **POST /user/:userID/project**

  Creates a new project for a user.

- **PUT /user/:userID/project/:projectID**

  Updates a project for a user.

- **DELETE /user/:userID/project/:projectID**

  Deletes a project for a user.

### Notes

- **GET /user/:userID/notes**

  Retrieves all notes for a specific user.

- **POST /user/:userID/note**

  Creates a new note for a user.

- **PUT /user/:userID/note/:noteID**

  Updates a note for a user.

- **DELETE /user/:userID/note/:noteID**

  Deletes a note for a user.

### Courses

- **GET /user/:userID/courses**

  Retrieves all courses for a specific user.

- **POST /user/:userID/course**

  Creates a new course for a user.

- **PUT /user/:userID/course/:courseID**

  Updates a course for a user.

- **DELETE /user/:userID/course/:courseID**

  Deletes a course for a user.
