"use strict";
exports.__esModule = true;
var Profile = /** @class */ (function () {
    function Profile(firstName, lastName, state, city, area, village, university, collage, studyYear, gender) {
        this.firstName = firstName !== undefined ? firstName : '';
        this.lastName = lastName !== undefined ? lastName : '';
        this.university = university !== undefined ? university : null;
        this.collage = collage !== undefined ? collage : null;
        this.studyYear = studyYear !== undefined ? studyYear : null;
        this.state = state !== undefined ? state : '';
        this.city = city !== undefined ? city : '';
        this.area = area !== undefined ? area : '';
        this.village = village !== undefined ? village : '';
        this.gender = gender !== undefined ? gender : null;
    }
    return Profile;
}());
exports["default"] = Profile;
