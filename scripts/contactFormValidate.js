function contactFormValidate(contactFormObj) {
    var email = contactFormObj.email.value;
    var firstName = contactFormObj.firstName.value
    var lastName = contactFormObj.lastName.value
    var emailOK = emailValid(email)
    var nameOK = nameValid(firstName, lastName)

    if (emailOK == true && nameOK == true) {
        return true;
    } else {
        return false;
    }
}

function emailValid(address) {
    var p = address.search(/.+@.+/);
    if (p == 0) {
        return true;
    } else {
        return false;
    }
}

function nameValid(first, last) {
    var f = first.search(/[a-zA-Z]+/);
    var l = last.search(/[a-zA-Z]+/);
    if (f == 0 && l == 0) {
        return true;
    } else {
        return false
    }
}