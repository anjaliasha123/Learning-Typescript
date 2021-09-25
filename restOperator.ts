//...numbers convert the parametes into a list of numbers
const add = (...numbers: number[]) =>{

    return numbers.reduce((curResult, currentValue) => {
        return curResult + currentValue
    },0);

};

const result = add(2,4,5,10);
console.log(result);
