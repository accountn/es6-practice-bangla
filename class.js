class Student{
    constructor(sId,sName){
        this.id = sId;
        this.name = sName;
        this.school = 'modhugram';
    }
}
const student1 = new Student(12,"HELAL");
const student2 = new Student(33,"UDDIN");
console.log(student1.name,student2.name);