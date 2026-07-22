const array = [1, 2, "Emerson", null, true, undefined, -99.78, false, 12];
console.log(array);
console.log(array[0]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log("----------------")

const frutas = ["Morango", "Laranja", "Lomão", "Kiwi"];
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[3]);

console.log("----------------")
for(let index = 0; index < frutas.length; index +=1) {
    console.log(`Fruta na posiçao: ${index} = ${frutas[index]}`);
}

