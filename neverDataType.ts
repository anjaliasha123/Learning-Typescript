

function generateError(message: string, code: number): never{
    throw {message: message, errorCode: code};
}

const result = generateError('An error occured', 500);
//this function returns never
//it crashes the script
console.log(result);