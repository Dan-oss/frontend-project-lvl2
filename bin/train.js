const aaa = (str) => {

    let result = str[0];
    for ( let i = 1; i <= str.length; i += 1) {

        if ((str[i]) === ')' && result[result.length - 1] === '('){
            result -= result.length - 1;
        }
        if ((str[i]) === '(' && result[result.length - 1] === ')') {
            result -= result.length - 1;
        }
        if (result[result.length - 1] === str[i]) {
            result += str[i];
        }

    }
    return result.length === 0;
}

console.log (aaa('(()))'))
