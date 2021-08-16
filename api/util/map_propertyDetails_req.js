module.exports = function (property, propertyDetails) {
    if (propertyDetails.heading)
        property.heading = propertyDetails.heading;
    if (propertyDetails.description)
        property.description = propertyDetails.description;



        //seller details
        if (propertyDetails.soldBy)
        property.soldBy = propertyDetails.soldBy;

        if (propertyDetails.email)
        property.email = propertyDetails.email;

        if (propertyDetails.phone)
        property.phone = propertyDetails.phone;

        if (propertyDetails.location)
        property.location = propertyDetails.location;

        //property details
        if (propertyDetails.price)
        property.price = propertyDetails.price;

        if (propertyDetails.propertyLocation)
        property.propertyLocation = propertyDetails.propertyLocation;

        if (propertyDetails.landSize)
        property.landSize = propertyDetails.landSize;

        if (propertyDetails.roadSize)
        property.roadSize = propertyDetails.roadSize;

        if (propertyDetails.floor)
        property.floor = propertyDetails.floor;

        if (propertyDetails.totalRooms)
        property.totalRooms = propertyDetails.totalRooms;


    if (propertyDetails.images)
        property.images = propertyDetails.images;

}