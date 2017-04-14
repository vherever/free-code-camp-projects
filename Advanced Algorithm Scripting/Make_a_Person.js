/**
 * Created by vherever on 14.04.2017.
 *
 * Make a Person
 *
 * Fill in the object constructor with the following methods below:
 *
 *   getFirstName()
     getLastName()
     getFullName()
     setFirstName(first)
     setLastName(last)
     setFullName(firstAndLast)
 */

var Person = function(firstAndLast) {
    var fullName = firstAndLast;
    var splited = fullName.split(" ");

    this.getFullName = function() {
        return fullName;
    };
    this.getFirstName = function() {
        return fullName.split(" ")[0];
    };
    this.getLastName = function() {
        return fullName.split(" ")[1];
    };
    this.setFirstName = function(firstName) {
        fullName = firstName + " " + splited[1];
        return fullName;
    };
    this.setLastName = function(lastName) {
        fullName = splited[0] + " " + lastName;
        return fullName;
    };
    this.setFullName = function(name) {
        fullName = name;
        return fullName;
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();
