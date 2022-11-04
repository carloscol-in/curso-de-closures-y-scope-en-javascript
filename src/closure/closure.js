function greeting() {
    let username = 'Carlos';

    function displayUserName() {
        return `Hello, ${username}`;
    }

    return displayUserName;
}

const greetCarlos = greeting();

console.log(greetCarlos)
console.log(greetCarlos())