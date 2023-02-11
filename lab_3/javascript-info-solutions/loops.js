// ---------------------------
let i = 3;

while (i) {
  alert( i-- );
}
// 3, 2, 1 - because we output value and then decrement it
// ---------------------------



// ---------------------------
let i = 0;
while (++i < 5) alert( i );

let i = 0;
while (i++ < 5) alert( i ); 
// No, these are not the same because in first case we increment value 
// and then compare it to '5' and in second we firstly compare and
// then increment
// ---------------------------



// ---------------------------
for (let i = 0; i < 5; i++) alert( i );

for (let i = 0; i < 5; ++i) alert( i );
// Both are the same since the last part is executed separately
// ---------------------------



// ---------------------------
for (let i = 2; i <= 10; i += 2) alert ( i );
// ---------------------------


// ---------------------------
let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}
// ---------------------------


// ---------------------------
let number;
while (number < 100 && number != null) {
    number = prompt("Enter the number greater than 100");
}
// ---------------------------


// ---------------------------
let n = +prompt("Enter n");
for (let i = 2; i <= n; i++) {
    let f = true;
    for (let d = 2; d < i; d++) {
        if (i % d == 0) {
            f = false;
            break;
        }
    }
    if (f) {
        console.log(i)
    }
}
// ---------------------------
