function towerBuilder(nFloors) {
    let space, stars, resultArr;
    resultArr = [];
    for (let i = 1; i <= nFloors; i++) {
        space = ' '.repeat(nFloors - i);
        stars = '*'.repeat(i * 2 - 1);
        resultArr.push(`${space}${stars}${space}`);
    }
    return resultArr;
}