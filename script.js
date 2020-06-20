// Progression 1 
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above 
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails
function checkUserName(kabi) {
    var l = kabi;
    if ((l.length > 15) || (l === "undefined") || (l.length < 8))
        return false;
    else {
        for (var i = 0; i < l.length; i++) {
            if ((l[i] == " ") || (/^[a-zA-Z0-9]*$/.test(l) == false))
                return false;
        }

    }
    return true;

}
console.log(checkUserName("kabilalkm"));

// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
function checkEmail(mail) {
    var k = mail;
    for (var i = 0; i < k.length; i++)
        if ((k[i] == '@') || (k[i] == '.') || (k[i] == '_'))
            return true;
    return false;
}
// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false
function checkPassword(pass) {
    var p = pass;
    var u = 0,
        n = 0,
        s = 0;
    var splChars = "*|,\":<>[]{}`\';()@&$#%";
    for (var i = 0; i < p.length; i++) {
        if (splChars.indexOf(p.charAt(i)) != -1) {
            s = 1;
            console.log(s);
            continue;
        }
        if ((p[i] > 0) && (p[i] < 9)) {
            n = 1;
            console.log(n);
            continue;
        }
        if (p[i].toUpperCase() == p[i]) {
            u = 1;
            console.log(u);
        }

    }

    if ((u != 0) && (n != 0) && (s != 0))
        return true;
    else
        return false;

}
console.log(checkPassword("Kabilan#123"));