

const buildPerson = ({name, birthdate}) => {

    return{
        id: new Date().getTime(),
        name: name,
        birthdate: birthdate,
        age: new Date().getFullYear() - new Date(birthdate).getFullYear(),
    }
}

const obj = { name: 'Max', birthdate: '2000-11-22'};

const john = buildPerson(obj)

console.log(john);