class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        
    }
}
testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
console.log(testStudent);
if ( testStudent.name === 'Bugs Bunny' && testStudent.email === 'bugs@bunny.com') {
    console.log('TASK 1: PASS');
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    } 
    registerStudent(studentToRegister) {
        if (this.students.filter(student => student.email === studentToRegister.email).length) {
            console.log(`The student ${studentToRegister.email} is already registered!`);
        } else {
            this.students.push(studentToRegister);
            console.log(`Registering ${studentToRegister.email} to the bootcamp ${this.name}.`);
        }
        return this.students;
    }  

    listStudents() {
        console.log(`Listing students in ${this.name} bootcamp`);
        if (this.students.forEach(student => console.log(`${student.name} (${student.email})`))){
            return this.students;
        }
        else {
            console.log(`There are no students in ${this.name} bootcamp`);
            return false;
        }
    }
}
reactBootcamp = new Bootcamp("React", "Advanced");
console.log(reactBootcamp);
if ( reactBootcamp.name === 'React' && reactBootcamp.level === 'Advanced'
        && Array.isArray(reactBootcamp.students) && reactBootcamp.students.length === 0) {
    console.log('TASK 2: PASS');
}


const runTest = (bootcamp, student) => {
    const attemptOne = bootcamp.registerStudent(student);
    const attemptTwo = bootcamp.registerStudent(student);
    const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
    if ( attemptOne && !attemptTwo && !attemptThree) {
        console.log("TASK 3: PASS");
    }

    bootcamp.registerStudent(new Student('Babs Bunny', 'babs@bunny.com'));
    if (bootcamp.listStudents()) {
        console.log("TASK 4: PASS 1/2");
    }
    bootcamp.students = [];
    if (!bootcamp.listStudents()) {
        console.log("TASK 4: PASS 2/2");
    }
}
runTest(reactBootcamp, testStudent);