const bar = () => {
    console.log("bar");
};
const baz = () => {
    console.log("baz");
};
const foo = () => {
    console.log("foo");
    setTimeout(bar, 0);
    new Promise((resolve, reject) => {
        resolve("Debería ejecutarse justo después de baz, pero antes d ebar.")
    }).then(resolve => console.console.log(resolve));
    baz();
};
foo();