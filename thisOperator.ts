class Department{

    name: string;

    constructor(n: string){
        this.name = n;
    }
    //safety that this refers to instance of Department
    describe(this: Department){
        console.log('Describe :' + this.name);
    }

};

const abc = new Department("ABC");
abc.describe();

//const dep = {describe: abc.describe};
const dep = {name: "DUMMY", describe: abc.describe};
//dep.describe(); //"Describe :undefined" 
dep.describe(); //"Describe :DUMMY" 