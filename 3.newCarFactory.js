function newCarFactory(input) {
let result=[]
let volume = 0

let key = Object.keys(input);
let value = Object.values(input);

result.push(key)
result.push(value)


let model = result[1][0];
let engine = Number(result[1][1])
let wheelInfo = result[1][4]

let smallEngine = [90, 1800]
let normalEngine = [120, 2400];
let monsterEngine = [200, 3500] 
let power = 0
if (engine>0 && engine<=90){
    volume = Number(smallEngine[1])
    power = result[1][1] 
}else if(engine>90 && engine <200){
    volume = normalEngine[1]
    power = Number(normalEngine[0])
}else if (engine>=200){
    volume = monsterEngine[1];
    power = monsterEngine[0]
}

let obj = {
    model: `${model}` 
    
}
// function modelToPrint (){
//     return `model: ${model}`
// }
// function engineToPrint(){
//     return `engine: power: ${power},\n\tvolume: ${volume}`
// }
// function carriageToPrint(){
//     return `carriage: type: ${result[1][3]}, \n\t  color: ${result[1][2]}`
// }
// function wheelsToPrint(){
//     return `wheels: ${wheelInfo}, ${wheelInfo}, ${wheelInfo}, ${wheelInfo}`
// }
console.log(`model: ${model}`);
console.log(`engine: power: ${power},\n\tvolume: ${volume}`);
console.log(`carriage: type: ${result[1][3]}, \n\t  color: ${result[1][2]}`);
console.log(`wheels: ${wheelInfo}, ${wheelInfo}, ${wheelInfo}, ${wheelInfo}`);
console.log(obj);
}
newCarFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
);