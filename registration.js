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
       //if theToRegister argument does not possess a name or email property,console.log() the string"invalid name or email" then return false
        if (!studentToRegister.name || !studentToRegister.email) {
            console.log("invalid name or email");
            return false;
        }
        //if theToRegister argument does possess a name and email property, check if the students array contains a student with the same email address as theToRegister argument
        else {
            let studentEmails = this.students.map(student => student.email);
            if (studentEmails.includes(studentToRegister.email)) {
                console.log(`The student ${studentToRegister.name} is already registered`);
                return false;
            }
            else {
                this.students.push(studentToRegister);
                console.log(`Registering ${studentToRegister.name} to the bootcamp ${this.name}`);
                return true;
            }
        }
        
        
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
    //returns a string containing bootcamp name and level
    getInfo() {
        return `${this.name} bootcamp - Level: ${this.level}`;
    }
    //to remove a student with specific email address from the students array
    removeStudent(studentEmail) {
        this.students = this.students.filter(student => student.email !== studentEmail);
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