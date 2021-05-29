const person = {name: 'sangakara', age: 33, country: 'srilonka', job: 'cricket', friends: ['joy','malinga','dilshan']}
// const job = person.job;
 //const age = person.age;
// const { country,age,salary,friends } = person;

// console.log(country,age,salary,friends);
// console.log(country,age,friends);
const friends = ['zobayer','johir','tajul','dipti','rojony'];
const [vloFriend,next,...restfridends] = friends;
console.log(restfridends);

const complexObject = {
    name: 'khan',
    info: {
        address: 'modhu',
        leader: 'jessore'
    }
}
const {leader} = complexObject.info;
console.log(leader);