export let colorArr = [];
export let contentArr = [];
export let multiplierArr = [];

export function initializeArrCreation(string) {
    let startIdx = 0;
    let stringLength = string.length;
    do {
        let periodIdx = string.indexOf('.', startIdx);
        let subString = string.slice(startIdx + 1, periodIdx + 1);
        processSubString(subString);
        startIdx = periodIdx + 1;
    }
    while (startIdx < stringLength);
}

function processSubString(string) {
    let bagsContainIdx = string.indexOf(`bags contain`);
    let color = string.slice(0, bagsContainIdx - 1);
    let content = extractContent(string, bagsContainIdx + 15);
    let multipliers = extractMultipliers(string, bagsContainIdx+13);
    colorArr.push(color);
    contentArr.push(content);
    multiplierArr.push(multipliers);
}

function extractContent(string, startIdx) {
    let content = [];
    let noOtherIdx = string.indexOf(`no other`);
    if (noOtherIdx === -1) {
        let start = startIdx;
        do {
            let nextBagIdx = string.indexOf('bag', start);
            content.push(string.slice(start, nextBagIdx - 1))
            let nextCommaIdx = string.indexOf(',', nextBagIdx);
            if (nextCommaIdx === -1) {
                start = string.length + 10; // ten is a random number that ensures while loop is stopped
            } else {
                start = nextCommaIdx + 4;
            }
        }
        while (start < string.length); // six also random.. theoretically not even needed


    }
    return content
}


function extractMultipliers(string, startIdx) {
    let multipliers = [];
    let noOtherIdx = string.indexOf(`no other`);
    if (noOtherIdx === -1) {
        let start = startIdx;
        do {
            multipliers.push(string.slice(start, start+1));
            let nextCommaIdx = string.indexOf(',', start);
            if (nextCommaIdx === -1) {
                start = string.length + 10; // ten is a random number that ensures while loop is stopped
            } else {
                start = nextCommaIdx + 2;
            }
            
        }
        while (start < string.length); // six also random.. theoretically not even needed


    }
    return multipliers
}



// execution



// initializeArrCreation(testInput);

// console.log(colorArr);
// console.log(contentArr);
