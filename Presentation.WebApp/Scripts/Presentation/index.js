
function openAlert() {
    console.log("From index.js script...");
}









function Animal(voice) {
    this.voice = voice || "Animal Speak"
}
Animal.prototype.speak = function () {
    console.log(this.voice);
}
Animal.prototype.eat = function () {
    console.log("ohhh doydum...");
}

function Cat() {
    Animal.call(this,"Cat Speak");
    this.name = "boncuk";
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

function Person(pName) {
    var _name = pName;
    function getName() {
        return _name;
    }
}





$(document).ready(function () {

    
    var cat = new Cat();
    cat.speak();
    cat.eat();
    

    openAlert();
});