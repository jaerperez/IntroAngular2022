interface Player{
    volume:number;
    second:number;
    song:string;
    details:Details;
}

interface Details{
    author: string;
    year:number;
}

const player:Player={
    volume:90,
    second:36,
    song:'Mess',
    details:{
        author:'Ed Sheeran',
        year:2015
    }
}

const author='Fulano';

const {volume, second,song,details:{author:authorDetails}}=player;
//const {author}=details;

console.log('',volume);
console.log('',second);
console.log('',song);
console.log('',authorDetails);
