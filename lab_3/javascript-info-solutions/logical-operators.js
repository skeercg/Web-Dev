alert( null || 2 || undefined ); // 2

alert( alert(1) || 2 || alert(3) ); // 1, 2

alert( 1 && null && 2 ); // null

alert( alert(1) && alert(2) ); // 1, NaN

alert( null || 2 && 3 || 4 ); // 3

if (19 <= age && age <= 90) {

}

if (19 < age || age > 90) {
    
}

if (-1 || 0) alert( 'first' ); // runs

if (-1 && 0) alert( 'second' ); // doesn't run

if (null || -1 && 1) alert( 'third' ); // runs

let result = prompt("Who's there?", "")

if (result == null) {
    alert("Cenceled")
} 

if (result != "Admin") {
    alert("I don't know you")
} else {
    let password = prompt("Password?", "")
    if (result == null) {
        alert("Cenceled")
    } 
    
    if (result != "TheMaster") {
        alert("Wrong password")
    } else {
        alert("Welcome!")
    }
}