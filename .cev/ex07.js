//CONDIÇÃO SIMPLES
console.log('Comando para imprimir algo no console.')
var vel = 60.5
console.log(`A velocidade do seu carro é ${vel}km/h.`)
if (vel>60){
    console.log('Você ultrapassou a velocidade permitida. MULTADO!')
}
console.log(`Dirija sempre usando o cinto de segurança.`)

//CONDIÇÃO COMPOSTA
var país = 'EUA'
console.log(`Vivendo em ${país}`)
if (país == 'BR'){
    console.log('Você é brasileiro!')
} else {
    console.log('Você é estrangeiro!')
}