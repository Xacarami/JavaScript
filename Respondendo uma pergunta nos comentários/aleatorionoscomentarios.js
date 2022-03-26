const membersHome = [
{
    firstName: 'André',
    lastName: 'Souza',
    age: 29,
    description: 'Daddy',
},

{
    firstName: 'Cibele',
    lastName: 'Souza',
    age: 28,
    description: 'Mom',
},

{
    firstName: 'Issac',
    lastName: 'Souza',
    age: 5,
    description: 'Son',
}]

const ages = membersHome.map(function(member){
    return member.age;
});
console.log(ages);
      
const sumAges = ages.reduce(function(age, acc){
    return acc + age;
});
console.log(sumAges);