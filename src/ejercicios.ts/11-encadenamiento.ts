interface Passenger{
    name:string,
    child?:string[]
}

const passenger1:Passenger={
    name:'Xavier',
    child:['Naty','Petter']
}

function printChild(passenger: Passenger):void{
    const howChild=passenger.child?.length||0;
    console.log(howChild);
}

printChild(passenger1);

