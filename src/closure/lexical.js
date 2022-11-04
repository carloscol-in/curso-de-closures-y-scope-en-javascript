const myGlobal = 0;

function myFunction() {
    const outer = 20;
    console.log(myGlobal);

    function parent() {
        const inner = 2;
        console.log(myGlobal);
        
        function child() {
            console.log(inner, outer, myGlobal);
        }

        return child();
    }

    return parent();
}