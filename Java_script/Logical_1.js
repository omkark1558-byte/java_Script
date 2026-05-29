
// 100 Number => sumbmission 
for (let number = 1; number <= 102; number++) {
    var count = 0;

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            count++;
        }
    }

    if (count === 2) {
        console.log(number);
    }
}
