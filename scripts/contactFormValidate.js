function contactFormValidate(contactFormObj) {
    var email = contactFormObj.email.value;
    var firstName = contactFormObj.firstName.value
    var lastName = contactFormObj.lastName.value
    var emailOK = emailValid(email)
    var nameOK = nameValid(firstName, lastName)

    if (emailOK && nameOK) {
        return true;
    } else if (emailOK && !nameOK) {
        alert('Invalid first or last name. Alphabetical characters only. Please re-enter.');
        return false;
    } else if (!emailOK && nameOK) {
        alert('Invalid email address. Please re-enter.');
        return false;
    } else {
        alert('Invalid email address and name. Please re-enter.')
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