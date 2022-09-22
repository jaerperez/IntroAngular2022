export interface Product{
    desc:string;
    price:number;
}

const phone: Product={
    desc:'Nokia A1',
    price:250,
}

const tablet: Product={
    desc:'iPad Air',
    price:450,
}

export function calculateISV(products:Product[]):[number,number]{
    let total=0;
    products.forEach(({price})=>{
        total+=price;
    })
    return [total, total *0.15];
}

const articles =[phone,tablet];
const [total,isv]=calculateISV(articles);
console.log('Total:',total);
console.log('ISV:',isv);
