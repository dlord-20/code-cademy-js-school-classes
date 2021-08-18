class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(num) {
        if(typeof num === 'number') {
            this._numberOfStudents = num;
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }

    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
        // SCHOOL NAME educates NUMBER OF STUDENTS students at the LEVEL school level.
    }

    static pickSubstituteTeacher(substituteTeachers) {
        let num = Math.floor(Math.random() * substituteTeachers.length - 1);
        return substituteTeachers[num];
    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'highSchool', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        for(let i = 0; i < this._sportsTeams.length; i ++) {
            console.log(this._sportsTeams[i] + ', ')
        }
        return this._sportsTeams;
    }
}

class MiddleSchool extends School {
    constructor(name, numberOfStudents) {
        super(name, 'middleSchool', numberOfStudents);
    }
}

class SchoolCatalog {
    constructor() {
        this._primarySchool = [];
        this._middleSchool = [];
        this._highSchool = [];
    }

    addPrimarySchool(school) {
        if(school instanceof PrimarySchool) {
            this._primarySchool.push(school);
        } else {
            console.log('Not the right school');
        }
    }

    addMiddleSchool(school) {
        if(school instanceof MiddleSchool) {
            this._middleSchool.push(school);
        } else {
            console.log('Not the right school class');
        }
    }

    addHighSchool(school) {
        if(school instanceof HighSchool) {
            this._highSchool.push(school);
        } else {
            console.log('Not the right school');
        }
    }

    print() {
        console.log('Primary Schools')
        for(let i = 0; i < this._primarySchool.length; i++) {
            console.log(`   ${i + 1}: ${this._primarySchool[i].name}`)
        }

        console.log('Middle Schools')
        for(let i = 0; i < this._middleSchool.length; i++) {
            console.log(`   ${i + 1}: ${this._middleSchool[i].name}`)
        }

        console.log('High Schools')
        for(let i = 0; i < this._highSchool.length; i++) {
            console.log(`   ${i + 1}: ${this._highSchool[i].name}`)
        }
    }


}


//Test Primary School
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));


//Test High School
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.sportsTeams;

//Test Middle School
const southDavis = new MiddleSchool('South Davis', 1200);
console.log(southDavis.name);

//Test School Catalog
const utah = new SchoolCatalog();
utah.addPrimarySchool(lorraineHansbury);
utah.addMiddleSchool(southDavis);
utah.addHighSchool(alSmith);
utah.print();