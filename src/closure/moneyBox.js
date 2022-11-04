// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

function moneyBox() {
    let savedCoins = 0;

    function addCoins(coins) {
        savedCoins += coins;
        console.log(`Money Box: $${savedCoins}`);
    }

    return addCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(6);
myMoneyBox(10);