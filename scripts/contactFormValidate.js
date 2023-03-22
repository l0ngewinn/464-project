function contactFormValidate(contactFormObj) {
    var email = contactFormObj.email.value;
    var firstName = contactFormObj.firstName.value
    var lastName = contactFormObj.lastName.value
    print('email' + email + ' firstName' + firstName + 'lastName' + lastName)
    var emailOK = emailValid(email)
    var nameOK = nameValid(firstName, lastName)

    if (emailOK == true && nameOK == true) {
        alert('validation working');
        return true;
    } else {
        return false;
    }
}

function emailValid(address) {
    var p = address.search(/.+@.+/);
    if (p == 0) {
        alert('email validation working');
        return true;
    } else {
        alert("Error: Invalid e-mail address.");
        return false;
    }
}

function nameValid(first, last) {
    var f = first.search(/[a-zA-Z]+/);
    var l = last.search(/[a-zA-Z]+/);
    if (f == 0 && l == 0) {
        alert('name validation working');
        return true;
    } else {
        alert("Error: Invalid first or last name.")
        return false
    }
}