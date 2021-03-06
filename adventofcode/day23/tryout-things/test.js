function giveKey(number) {
    return 'e' + number
}

let object = {
    e1: 2,
    e7: 3,
    e2: 5,
    e3: 8,
    e4: 6,
    e5: 4,
    e6: 7,
    e8: 9,
    e9: 1
}

const objectLength = Object.keys(object).length;



// 389125467

function logTheObject(obj) {
    let length = objectLength;
    let current;
    for (let i=0; i<10; i++) {
        let key = giveKey(i);
        if (obj[key] === 1) {
            current = obj[key];
        }
    }

    for (let i=0; i<length; i++) {
        console.log(current);
        let newKey = 'e' + current;
        current = obj[newKey];
    }

}

function move(extractAfter) {
    
    // change insertAfter so it is derived from extractAfter

    let takenLabels = [];

    let key = giveKey(extractAfter);
    let value = object[key];

    for (let i=0; i<3; i++) {
        takenLabels.push(object[key])
        key = giveKey(object[key]);
    }
    console.log(takenLabels);
    
    let newValue = object[key];
    object[giveKey(extractAfter)] = newValue;

    let insertAfter = extractAfter-1;
    if (insertAfter === 0) {
        insertAfter = objectLength;
    }
    console.log('here ' + insertAfter);

    while (takenLabels.includes(insertAfter)) {
        insertAfter = insertAfter-1;
        if (insertAfter === 0) {
            insertAfter = objectLength;
        }
    }
    console.log('here end ' + insertAfter);

    let insertAfterKey = giveKey(insertAfter);
    let insertAfterKeyValue = object[insertAfterKey];
    object[insertAfterKey] = value;
    object[key] = insertAfterKeyValue;

}


function playRounds(quantity, firstCurrent) {
    let current = firstCurrent;

    for (let i=0; i<quantity; i++) {
        move(current);
        current = object[giveKey(current)];
    }
    logTheObject(object);
}

playRounds(100, 3);


// 389125467

// 1--> 167389254
// 2--> 154627389
// 3--> 154673289
// 4--> 126735489
// 5--> 125346789
// 6--> 125738469
// 7--> 125463897
// 8--> 123854679
// 9--> 125946738


