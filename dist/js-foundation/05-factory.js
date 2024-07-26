"use strict";
// import { getUUID } from '../plugins/get-id.plugin';
// import { getAge } from '../plugins/get-age.plugin';
//const {getAge, getUUID} = require('../plugins');
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
const buildMakePerson = ({ getUUID, getAge }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        };
    };
};
exports.buildMakePerson = buildMakePerson;
// const obj = { name: 'Max', birthdate: '2000-11-22' };
// const john = buildPerson(obj)
// console.log(john);
