function fruits() {
    if (true) {
        var fruit = 'Apple'; // this variable goes to the function scope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope
        console.log(fruit2)
        console.log(fruit3)
    }
    console.log(fruit)
    // console.log(fruit2)
    // console.log(fruit3)
}

fruits();