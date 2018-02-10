import axios from "axios";

export default {
	getAllStudents: function () {
		return axios.get("/api/students")
	},
	getStudentById: function() {
		return axios.get("/api/students/:id")
	}
};