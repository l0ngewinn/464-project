function contactFormProcess () {
    var contactFormObj = document.getElementById('contactForm');
    if (contactFormValidate(contactFormObj)) {
        alert('Your message has been sent succesfully!');
    }
}