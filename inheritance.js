class Parent{
    constructor(){
        this.fatherName = "abdur razzak";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name +" "+ this.fatherName;
    }
}
const baby = new Child('helal');
const baby2 = new Child('uddin');
console.log(baby.getFullName());
console.log(baby2.getFullName());