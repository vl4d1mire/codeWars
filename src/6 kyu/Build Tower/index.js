function towerBuilder(nFloors) {
    let space, stairs, resultArr;
    resultArr = [];
    for (let i = 1; i <= nFloors; i++) {
        space = ' '.repeat(nFloors - i);
        stairs = '*'.repeat(i * 2 - 1);
        resultArr.push(`${space}${stairs}${space}`);
    }
    return resultArr;
}