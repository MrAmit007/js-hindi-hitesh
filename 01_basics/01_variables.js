const accountId = 100001
let accountEmail = "demoemail@mail.com"
var accountPassword = "235624"
accountCity = "Delhi"  //variables can also be allowed this way BUT it'll not be appropriate so
let accountState;

// Prefer not to use var
// bacause of issue in block scope and functional scope

// accountId = 002   //not allowed

accountEmail = "demoemail2@mail.com"
accountPassword = "865021"
accountCity = "Bengaluru"

console.log(accountId);
console.log(accountEmail);

console.table([accountEmail, accountPassword, accountCity])
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])