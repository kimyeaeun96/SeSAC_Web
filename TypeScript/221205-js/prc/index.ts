class Cat {
    constructor(readonly name: string) {
    }
    meow(a){
        console.log(a)
    }
    sayHello(){
        return this.meow("야옹");
    }
}
class Fish {
    constructor(readonly name:string){}
    dive(num:number):string {
        return `${num}m 다이빙 했습니다.`;
    }
}

type Pet = Cat | Fish;
var cat1:Pet = new Cat("고양이");
var fish1:Pet = new Fish("물고기");

function talkPet(pet:Pet) {
    if ( pet instanceof Cat ) {
         return pet.sayHello();
    }
    else if (pet instanceof Fish) {
        return "물고기는 말을 하지 못합니다.";
    }
}

console.log( talkPet(cat1) );
console.log( talkPet(fish1) );
