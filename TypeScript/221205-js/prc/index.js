var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
        this.name = name;
    }
    Cat.prototype.sayHello = function () {
        return "야옹";
    };
    return Cat;
}());
var Fish = /** @class */ (function () {
    function Fish(name) {
        this.name = name;
        this.name = name;
    }
    Fish.prototype.dive = function (num) {
        return "".concat(num, "m \uB2E4\uC774\uBE59 \uD588\uC2B5\uB2C8\uB2E4.");
    };
    return Fish;
}());
var cat1 = new Cat("고양이");
var fish1 = new Fish("물고기");
function talkPet(pet) {
    if (pet instanceof Cat) {
        return pet.sayHello();
    }
    else if (pet instanceof Fish) {
        return "물고기는 말을 하지 못합니다.";
    }
}
console.log(talkPet(cat1));
console.log(talkPet(fish1));
