var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.setName = function (newName) {
        this.name = newName;
        return this.name;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
