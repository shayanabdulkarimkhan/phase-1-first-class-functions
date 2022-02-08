function receivesAFunction (operation) {
    return operation();
}

function returnsANamedFunction() {
    return function last() {
        return `alasta`;
    };
}

function returnsAnAnonymousFunction() {
    return function(){
        return `vista`
    };
}