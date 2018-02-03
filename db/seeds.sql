## Student Seeds

INSERT INTO students (student_first, student_last, current_grade, grade_of_entry, dob, gender, handed, account_manager, active, address) 
VALUES ('John', 'Doe', 'pre-K', 'K', '07-07-2014', 'M', 'right', 'Suzie Sue', true, '101 Fancy Street, PH, NY, NY 10007');

INSERT INTO students (student_first, student_last, current_grade, grade_of_entry, dob, gender, handed, account_manager, active, address) 
VALUES ('', 'Doe', 'pre-K', 'K', '07-07-2014', 'M', 'right', 'Suzie Sue', true, '101 Fancy Street, PH, NY, NY 10007');



## Family Seeds

INSERT INTO families (family_first, family_last, family_email, family_pw, active) 
VALUES ('Jane', 'Doe', 'jane.doe@doefamily.com', 'encryptz', true);


## Test POST
-- {
-- 	"student_first": "John",
-- 	"student_last": "Doe",
-- 	"current_grade": "pre-K",
-- 	"grade_of_entry": "K",
-- 	"dob": "07-07-2014",
-- 	"gender": "M",
-- 	"handed": "right",
-- 	"account_manager": "Suzie Sue",
-- 	"active": true,
-- 	"address": "101 Fancy Street, PH, NY, NY 10007"
-- }