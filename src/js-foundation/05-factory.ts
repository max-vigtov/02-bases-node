import { getUUID } from '../plugins/get-id.plugin';
import { getAge } from '../plugins/get-age.plugin';
//const {getAge, getUUID} = require('../plugins');

interface BuildMakerPersonOptions {
  getUUID: () => number;
  getAge: (birthdate: string ) => number;
}

interface PersonOptions{
  name: string;
  birthdate: string;
}


export const buildMakePerson = ({getUUID, getAge}: BuildMakerPersonOptions) => {

  return({ name, birthdate }: PersonOptions ) => {

    return {
      id: getUUID(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate),
    }
  }
}
// const obj = { name: 'Max', birthdate: '2000-11-22' };

// const john = buildPerson(obj)

// console.log(john);
