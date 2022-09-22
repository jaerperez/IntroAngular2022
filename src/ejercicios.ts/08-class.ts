class PersonNormal{
    constructor(
        public name:string,
        public address:string,
    ){}
}


class Heroe extends PersonNormal{
    constructor(
        public alterEgo:string,
        public age:number,
        public nameReal:string
    ){
        super(nameReal,'New york,USA');
    }
}

const iroman=new Heroe('Iroman',45,'tony');

