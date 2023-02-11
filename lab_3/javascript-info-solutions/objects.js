let user = {};
user.name = "John";
user.surname = "Doe";
user.name = "Josh";
delete user.name;

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}