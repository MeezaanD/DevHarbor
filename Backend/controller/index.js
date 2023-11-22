const express = require('express');
const path = require('path');
const parser = require('body-parser');
const router = express.Router();
const { User, Note, Course, Project } = require('../model'); // Update with your actual model names

const user = new User();
const note = new Note();
const course = new Course();
const project = new Project();

router.get('/', (req, res) => {
	res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
});

// User Endpoints

// Register User
router.post('/register', parser.json(), (req, res) => {
	user.createUser(req, res);
});

// Login
router.post('/login', parser.json(), (req, res) => {
	user.login(req, res);
});

// View all users
router.get('/users', (req, res) => {
	user.fetchUsers(req, res);
});

// View single user
router.get('/user/:id', (req, res) => {
	user.fetchUser(req, res);
});

// Update user
router.put('/user/:id', parser.json(), (req, res) => {
	user.updateUser(req, res);
});

// Delete user
router.delete('/user/:id', (req, res) => {
	user.deleteUser(req, res);
});

// Note Endpoints

// Get notes for a specific user
router.get('/user/:userID/notes', (req, res) => {
	const { userID } = req.params;
	note.fetchNotes(req, res, userID);
});

// Create a Note
router.post('/user/:userID/note', parser.json(), (req, res) => {
	const { userID } = req.params;
	note.createNote(req, res, userID);
});

// Update a Note
router.put('/user/:userID/note/:noteID', parser.json(), (req, res) => {
	const { userID, noteID } = req.params;
	note.updateNote(req, res, userID, noteID);
});

// Delete a Note
router.delete('/user/:userID/note/:noteID', (req, res) => {
	const { userID, noteID } = req.params;
	note.deleteNote(req, res, userID, noteID);
});

// Course Endpoints

// Get courses for a specific user
router.get('/user/:userID/courses', (req, res) => {
	const { userID } = req.params;
	course.fetchCourses(req, res, userID);
});

// Create a Course
router.post('/user/:userID/course', parser.json(), (req, res) => {
	const { userID } = req.params;
	course.createCourse(req, res, userID);
});

// Update a Course
router.put('/user/:userID/course/:courseID', parser.json(), (req, res) => {
	const { userID, courseID } = req.params;
	course.updateCourse(req, res, userID, courseID);
});

// Delete a Course
router.delete('/user/:userID/course/:courseID', (req, res) => {
	const { userID, courseID } = req.params;
	course.deleteCourse(req, res, userID, courseID);
});

// Project Endpoints

// Get projects for a specific user
router.get('/user/:userID/projects', (req, res) => {
	const { userID } = req.params;
	project.fetchProjects(req, res, userID);
});

// Create a Project
router.post('/user/:userID/project', parser.json(), (req, res) => {
	const { userID } = req.params;
	project.createProject(req, res, userID);
});

// Update a Project
router.put('/user/:userID/project/:projectID', parser.json(), (req, res) => {
	const { userID, projectID } = req.params;
	project.updateProject(req, res, userID, projectID);
});

// Delete a Project
router.delete('/user/:userID/project/:projectID', (req, res) => {
	const { userID, projectID } = req.params;
	project.deleteProject(req, res, userID, projectID);
});

module.exports = router;
