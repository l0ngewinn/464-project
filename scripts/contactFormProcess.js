function contactFormProcess () {
    var contactFormObj = document.getElementById('contactForm');
    if (contactFormValidate(contactFormObj)) {
        alert('Your message sent succesfully!');
    }
}