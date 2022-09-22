import {Product,calculateISV } from './06-desestructuracionArg';


const shoppingCart:Product[]=[
    {
        desc:'phone 1',
        price:100
    },
    {
        desc:'phone 2',
        price:120
    }
];

const [total,isv]=calculateISV(shoppingCart);
console.log('total',total);
console.log('isv',isv);


