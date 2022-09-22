

interface SuperHeroe{
    name:string,
    age:number,
    address:{
        street: string,
        country:string,
        city:string
    },
    showAddress:()=>string,
}


const superHeroe:SuperHeroe={
    name:'Spiderman',
    age:30,
    address:{
        street:'main St',
        country:'USA',
        city:'NY'
    },
    showAddress(){
        return this.name+ ', ' + this.address.city+','+ this.address.country;
    }
}

/*
    ===== Cod de TypeScript =====


interface SuperHero {
    nameHero: string,
    age: number,
    direction: DirectionHero,
    viewDirection: () => void;
}

interface DirectionHero {
    street: string,
    country: string,
    city: string
}

const superHero:  = {
    nameHero: 'Spiderman',
    age: 30,
    direction: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    viewDirection() {
        return this.nameHero + ', ' + this.direction.city + ', ' + t
**/