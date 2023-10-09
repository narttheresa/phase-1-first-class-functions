function receivesAFunction (callback) {
    console.log(callback());
}



function returnsANamedFunction() {
    function namedFunction() {
        console.log('This is a named function');
    }

    return namedFunction;
}

const myFunction = returnsANamedFunction();

myFunction();



function returnsAnAnonymousFunction() {
    return function() {

    };
}