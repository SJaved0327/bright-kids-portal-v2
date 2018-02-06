CREATE DATABASE brightKids_DB;
USE brightKids_DB;

## families table

CREATE TABLE families
(
	id INT AUTO_INCREMENT NOT NULL,
	family_first varchar(30) NOT NULL,
	family_last varchar(30) NOT NULL,
	family_email varchar(30) NOT NULL,
	family_pw varchar(8) NOT NULL,
	active BOOLEAN DEFAULT false,
	parent2_first varchar(30) DEFAULT NULL,
	parent2_last varchar(30) DEFAULT NULL,
	parent2_email varchar(30) DEFAULT NULL,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

## students table

CREATE TABLE students
(
	id INT AUTO_INCREMENT NOT NULL,
	student_first varchar(30) NOT NULL,
	student_last varchar(30) NOT NULL,
	current_grade varchar(5) NOT NULL,
	grade_of_entry varchar(5) NOT NULL,
	dob varchar(10) NOT NULL,
	gender varchar(2) NOT NULL,
	handed varchar(5) DEFAULT NULL,
	account_manager varchar(30) DEFAULT NULL,
	active BOOLEAN DEFAULT false,
	address varchar(100) DEFAULT NULL,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);









