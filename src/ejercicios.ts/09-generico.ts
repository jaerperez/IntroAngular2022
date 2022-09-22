function whatTypeIs<T>(args:T){
    return args;
}


let isString=whatTypeIs('Hi');
let isNumber=whatTypeIs(1111);
let isArray = whatTypeIs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);