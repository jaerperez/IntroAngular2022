function add(a: number, b: number): number {
    return a + b;
}


const addArrow = (a: number, b: number): number => {
    return a + b;
}

function multiply(number: number, otherNumber: number, base: number = 2): number {
    return number * base;
}

//const result=multiply(5,0,10);
//console.log(result);

interface PersonLDR {
    name: string;
    pv: number;
    showHp: () => void;
}

function cure(person: PersonLDR, cure_x: number): void {
    person.pv += cure_x;
}

const newPerson: PersonLDR = {
    name: 'Strider',
    pv: 50,
    showHp() {
        console.log('Points of life:', this.pv);
    },
}

cure(newPerson, 20);
newPerson.showHp();
