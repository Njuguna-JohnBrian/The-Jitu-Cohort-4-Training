"use strict";
let carName;
let phoneNumber;
let isUser;
function determineOwner() {
    carName = "KIA";
    phoneNumber = 12323123;
    if (carName && phoneNumber)
        return (isUser = true);
    return (isUser = false);
}
