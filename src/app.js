// const {emailTemplate} = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
//const { getUserById } = require('./js-foundation/03-callbacks');
//const getAge = require('get-age');
const {getAge, getUUID} = require('./plugins');
const {buildMakePerson} = require ('./js-foundation/05-factory');


const makePerson = buildMakePerson({getUUID, getAge});

const obj = { name: 'Max', birthdate: '2000-11-22' };

const john = makePerson(obj);

console.log(john);
