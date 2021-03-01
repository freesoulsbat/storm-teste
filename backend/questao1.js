
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let numbers = []
let alvo


rl.question('Digite o alvo esperado e após, os cinco inteiros correspondentes aos índices:', async (answer) => {
    alvo = answer
    for(let i = 0; i < 5; i++) {
        await new Promise((resolve) => { 
            rl.question(`Digite o valor do índice ${i}: `, (value) => {
                resolve(numbers.push(value));
            });
        });
    }
    for(let i = 0; i <= numbers.length;i++){
        for(let j = 0; j<= numbers.length; j++){
            let value = Number(numbers[i]) + Number(numbers[j])
            if(value == alvo && i > j){
                console.log(`O índice ${j} e o índice ${i}, ou seja: ${numbers[j]} e ${numbers[i]}, se somados dão o valor ${alvo}!`)
            }
        }
    }

    rl.close();
});

// numbers.forEach((value, index, array) => {
//     const atual = Number(value) + Number(array[index+1])
//     if(atual == alvo){
//         console.log(`Os índices ${array[index-1]} e ${array[index]}, se somados são iguais a ${alvo}`)
//     }
// })