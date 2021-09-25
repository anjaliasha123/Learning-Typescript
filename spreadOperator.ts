const hobbies = ['walking','dancing'];
const activeHobbies = ['hiking'];

//extend active hobbies array
// ... is spread operator
activeHobbies.push(...hobbies);
console.log(activeHobbies);