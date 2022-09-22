let skills=['bash','counter','Healing'];
let skill2:string[]=['bash','counter','Healing'];

let skill3:(boolean|string|number)[]=['bash','counter','Healing'];

interface Persons{
    name:string;
    hp:number;
    skills:string[];
    place?:string;
}

const person1:Persons={
    name:'javier',
    hp:199,
    skills:['bash','counter','Healing']
}

const person:any={
    name:'javier',
    hp:199,
    skills:['bash','counter','Healing']
}

person.place='pueblo natal'

console.table(person1);
