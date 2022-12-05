const meow = (a) => {
    console.log(a);
}

class Cat {
    sayHello() {
        return meow("야옹")
    }
}

class Fish {
    dive(num:number):string {
        return "~m 다이빙 했습니다."
    }
}

const noname = (Pet: Cat | Fish) => {
    talkPet(pet:Pet):string = 
}

