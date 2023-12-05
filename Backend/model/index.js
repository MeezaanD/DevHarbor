const DB = require("../config");
const { hash, compare } = require("bcrypt");
const { createToken } = require("../middleware/AuthenticateUser");
const { v4: uuidv4 } = require('uuid');

class User {
	login(req, res) {
		const { email, password } = req.body;
		const querySt = `SELECT user_id, firstname, lastname, email, password, profile_img 
		  FROM users 
		  WHERE email = ?`;

		DB.query(querySt, [email], async (err, data) => {
			if (err) throw err;

			if (!data.length || data == null) {
				res.status(401).json({
					err: "Incorrect email address",
				});
			} else {
				await compare(password, data[0].password, (uErr, uResult) => {
					if (uErr) throw uErr;

					const jToken = createToken({
						email,
						password,
					});

					res.cookie("Valid User", jToken, {
						maxAge: 3600000,
						httpOnly: true,
					});

					if (uResult) {
						res.status(200).json({
							msg: "Logged In",
							jToken,
							result: data[0],
						});
					} else {
						res.status(401).json({
							err: "Incorrect password",
						});
					}
				});
			}
		});
	}

	fetchUsers(req, res) {
		const querySt = `
		SELECT user_id, firstname, lastname, email, profile_img 
		FROM users;
	  `;

		DB.query(querySt, (err, data) => {
			if (err) throw err;
			else
				res.status(200).json({
					results: data,
				});
		});
	}

	fetchUser(req, res) {
		const querySt = `
		SELECT user_id, firstname, lastname, email, profile_img 
		FROM users
		WHERE user_id = ?;
	  `;

		DB.query(querySt, [req.params.id], (err, data) => {
			if (err) throw err;
			else
				res.status(200).json({
					results: data,
				});
		});
	}

	async createUser(req, res) {
		const info = req.body;
		const user_id = uuidv4();
		const hashedPassword = await hash(info.password || '', 15);


		const user = {
			user_id,
			email: info.email,
			password: hashedPassword,
			firstname: info.firstname,
			lastname: info.lastname,
			profile_img: info.profile_img,
		};

		const querySt = `INSERT INTO users SET ?;`;

		DB.query(querySt, [user], (err) => {
			if (err) {
				res.status(401).json({ err });
			} else {
				const jToken = createToken(user);
				res.cookie('Valid User', jToken, {
					maxAge: 3600000,
					httpOnly: true,
				});
				res.status(200).json({ msg: 'Registered Successfully' });
			}
		});
	}

	async updateUser(req, res) {
		const data = req.body;
		if (data.password !== null || data.password !== undefined)
			data.password = await hash(data.password, 15);

		const querySt = `
		UPDATE users
		SET ?
		WHERE user_id = ?;
	  `;

		DB.query(querySt, [data, req.params.id], (err) => {
			if (err) throw err;
			res.status(200).json({
				msg: "Details successfully updated.",
			});
		});
	}

	deleteUser(req, res) {
		const querySt = `
		DELETE FROM users
		WHERE user_id = ?;
	  `;

		DB.query(querySt, [req.params.id], (err) => {
			if (err) throw err;
			res.status(200).json({
				msg: "Account was successfully deleted.",
			});
		});
	}
}

class Note {
	fetchNotes(req, res, userID) {
		const querySt = `
      SELECT notes_id, user_id, title, category, content
      FROM notes
      WHERE user_id = ?;
    `;
		DB.query(querySt, [userID], (err, data) => {
			if (err) throw err;
			else res.status(200).json({ results: data });
		});
	}

	createNote(req, res, userID) {
		const noteData = req.body;
		const querySt = `
			INSERT INTO notes (user_id, title, category, content)
			VALUES (?, ?, ?, ?);
		`;
		DB.query(querySt, [userID, noteData.title, noteData.category, noteData.content], (err) => {
			if (err) throw err;
			res.status(200).json({ msg: "Note Created" });
		});
	}
	

	updateNote(req, res, userID, noteID) {
		const noteData = req.body;
		const querySt = `
      UPDATE notes
      SET title = ?, category = ?, content = ?, 
      WHERE user_id = ? AND notes_id = ?;
    `;
		DB.query(
			querySt,
			[noteData.title, noteData.content, userID, noteID],
			(err) => {
				if (err) throw err;
				res.status(200).json({ msg: "Note Updated" });
			}
		);
	}

	deleteNote(req, res, userID, noteID) {
		const querySt = `
      DELETE FROM notes
      WHERE user_id = ? AND notes_id = ?;
    `;
		DB.query(querySt, [userID, noteID], (err) => {
			if (err) throw err;
			res.status(200).json({ msg: "Note Deleted" });
		});
	}
}

class Course {
	fetchCourses(req, res, userID) {
		const querySt = `
      SELECT course_id, user_id, title, url, startedAt, FinishedAt
      FROM courses
      WHERE user_id = ?;
    `;
		DB.query(querySt, [userID], (err, data) => {
			if (err) throw err;
			else res.status(200).json({ results: data });
		});
	}

	createCourse(req, res, userID) {
		const courseData = req.body;
		const querySt = `
      INSERT INTO courses (user_id, title, url, startedAt, FinishedAt)
      VALUES (?, ?, ?, ?, ?);
    `;
		DB.query(
			querySt,
			[
				userID,
				courseData.title,
				courseData.url,
				courseData.startedAt,
				courseData.FinishedAt,
			],
			(err) => {
				if (err) throw err;
				res.status(200).json({ msg: "Course Created" });
			}
		);
	}

	updateCourse(req, res, userID, courseID) {
		const courseData = req.body;
		const querySt = `
      UPDATE courses
      SET title = ?, url = ?, startedAt = ?, FinishedAt = ?
      WHERE user_id = ? AND course_id = ?;
    `;
		DB.query(
			querySt,
			[
				courseData.title,
				courseData.url,
				courseData.startedAt,
				courseData.FinishedAt,
				userID,
				courseID,
			],
			(err) => {
				if (err) throw err;
				res.status(200).json({ msg: "Course Updated" });
			}
		);
	}

	deleteCourse(req, res, userID, courseID) {
		const querySt = `
      DELETE FROM courses
      WHERE user_id = ? AND course_id = ?;
    `;
		DB.query(querySt, [userID, courseID], (err) => {
			if (err) throw err;
			res.status(200).json({ msg: "Course Deleted" });
		});
	}
}

class Project {
	fetchProjects(req, res, userID) {
		const querySt = `
		SELECT project_id, user_id, title, design_url, code_url, live_url
		FROM projects
		WHERE user_id = ?;
	  `;
		DB.query(querySt, [userID], (err, data) => {
			if (err) throw err;
			else res.status(200).json({ results: data });
		});
	}

	createProject(req, res, userID) {
		const projectData = req.body;
		const querySt = `
		INSERT INTO projects (user_id, title, design_url, code_url, live_url)
		VALUES (?, ?, ?, ?, ?);
	  `;
		DB.query(
			querySt,
			[
				userID,
				projectData.title,
				projectData.design_url,
				projectData.code_url,
				projectData.live_url,
			],
			(err) => {
				if (err) throw err;
				res.status(200).json({ msg: "Project Created" });
			}
		);
	}

	updateProject(req, res, userID, projectID) {
		const projectData = req.body;
		const querySt = `
		UPDATE projects
		SET title = ?, design_url = ?, code_url = ?, live_url = ?
		WHERE user_id = ? AND project_id = ?;
	  `;
		DB.query(
			querySt,
			[
				projectData.title,
				projectData.design_url,
				projectData.code_url,
				projectData.live_url,
				userID,
				projectID,
			],
			(err) => {
				if (err) throw err;
				res.status(200).json({ msg: "Project Updated" });
			}
		);
	}

	deleteProject(req, res, userID, projectID) {
		const querySt = `
		DELETE FROM projects
		WHERE user_id = ? AND project_id = ?;
	  `;
		DB.query(querySt, [userID, projectID], (err) => {
			if (err) throw err;
			res.status(200).json({ msg: "Project Deleted" });
		});
	}
}

module.exports = {
	User,
	Note,
	Course,
	Project,
};
