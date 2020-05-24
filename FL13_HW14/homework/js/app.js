function Student(name, email) {
	const homeworkResults = [];
	this.getName = function() { 
		return name;
	}
	this.getEmail = function() {
		return email;
	}
	this.addHomeworkResult = function(topic, success) {
		const result = {
			topic: topic,
			success: success
		};
		homeworkResults.push(result);
	}
	this.getHomeworkResult = function() {
		return homeworkResults;
	}
}
// const student = new Student('John', 'john@gmail.com');
// console.log(student.getName());
// console.log(student.getEmail());
// student.addHomeworkResult('HTML', true);
// student.addHomeworkResult('JS', false);
// console.log(student.getHomeworkResult());

function FrontendLab(students, failedLimit){
	const studentsList = students;
	const failedHomeworksLimit = failedLimit;
	
	const student = new Student();

	this.printStudentsList = function() {
		studentsList.forEach(el => {
			console.log(`name: ${el.name}, email: ${el.email}`);
			console.log(student.getHomeworkResult());
		});
	}

	this.addHomeworkResults = function(objGet) {

		objGet.results.forEach(el => {
			const resultByEmail = studentsList.find(elem => elem.email === el.email);
			if(resultByEmail){
				student.addHomeworkResult(objGet.topic, el.success);
			}
		});

	}

	this.printStudentsEligibleForTest = function() {
		console.log(failedHomeworksLimit);
	}
}

// const lab = new FrontendLab(listOfStudents, 1);
// lab.addHomeworkResults(homeworkResults[0]);
// lab.addHomeworkResults(homeworkResults[1]);
// lab.printStudentsList();

// lab.printStudentsEligibleForTest();
// lab.addHomeworkResults(homeworkResults[2]);
// lab.addHomeworkResults(homeworkResults[3]);
// lab.addHomeworkResults(homeworkResults[4]);
// lab.printStudentsEligibleForTest();