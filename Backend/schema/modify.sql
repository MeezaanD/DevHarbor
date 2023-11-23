--First adjustment (profile-img datatype)

ALTER TABLE users
MODIFY COLUMN profile_img TEXT NOT NULL;

--Drop commands

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS notes;
DROP TABLE IF EXISTS courses;


--Adjustments

ALTER TABLE notes
ADD COLUMN category VARCHAR(255) NOT NULL AFTER title;

