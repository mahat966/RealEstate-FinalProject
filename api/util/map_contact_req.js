module.exports = function (contact, contactDetails) {
    if (contactDetails.name)
        contact.name = contactDetails.name;

    if (contactDetails.phoneNumber)
        contact.phoneNumber = contactDetails.phoneNumber;
        
    if (contactDetails.email)
        contact.email = contactDetails.email;

    if (contactDetails.message)
        contact.message = contactDetails.message;

}