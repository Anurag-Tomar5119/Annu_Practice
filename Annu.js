function createPattern(rows) {
    let pattern = [];

    for (let i = 1; i <= rows; i++) {
        let row = [];
        let currentNumber = i;
        for (let j = 1; j <= i; j++) {
            row.push(currentNumber);
            currentNumber += rows - j;
        }
        pattern.push(row);
    }

    return pattern;
}

function displayPattern(pattern) {
    for (let i = 0; i < pattern.length; i++) {
        console.log(pattern[i].join("\t"));
    }
}

const numRows = 5;
const generatedPattern = createPattern(numRows);
displayPattern(generatedPattern);
console.log(odd, 'data');
