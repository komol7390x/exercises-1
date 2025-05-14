function countCharacterFrequency(str="") {
    str=str.toLowerCase()
    let vowels1 = "auioe"
    let consonants1 = "qwrtypsdfghjklzxcvbnm"
    let number1 = "1234567890"
    let obj = {
        vowels: 0,
        consonants: 0,
        number:0
    }
    for (let i = 0; i < str.length; i++){
        if (vowels1.includes(str[i])) {
            obj.vowels+=1
        } else if (consonants1.includes(str[i])) {
            obj.consonants+=1
        } else if (number1.includes(str[i])) {
            obj.number+=1
        }
    }
    return obj
}
console.log(countCharacterFrequency("Hello world 123"));
console.log(countCharacterFrequency("a1b2c3d4"));