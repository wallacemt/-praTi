// ------------Estudando Objtos------------
// let serie = {
//     name: 'The Boys',
//     genre: ['Ação', 'Heróis'],
//     season: 4,
//     status: 'Em andamento',  
//     clasification: 18,  
//     nrEpisodes: {
//         temp1:12,
//         temp2: 11,
//         temp3: 10
//     },
//     showCaracter: function(){
//         return `O nome da serie é ${this.name} é sua classificação é +${this.clasification}`
//     }
// }

// let book = {
//     title: 'Harry Potter e a pedra filosofal',
//     genre: ['Ação', 'Fantasia'],
//     autor: 'J.K Rowling',
//     status: 'Disponível',
//     year: 1997,
//     lenguages: ['Portugues', 'Ingles', 'Espanhol'],
//     showCaracter: function(){
//         return `O titulo do livro é ${this.title} o autor é ${this.autor} o ano de publicação é ${this.year}`
//     },
//     readBook: function(){
//         return `O livro ${this.title} foi lido`
//     }
// }

// let car = {
//     name: 'Porshe',
//     color: 'Azul',
//     maxVelociry: 250,
//     year: 2011,
//     motor: '1.6',
//     state: 'off',
//     showCaracter: function(){
//         return `O nome do carro é ${this.name} a cor é ${this.color} o ano é ${this.year}`
//     },
//     aceleration: function(){
//         return `Acelerando o carro`
//     }
// }


// console.log(serie.showCaracter())
// console.log(book.showCaracter())
// console.log(book.readBook())
// console.log(car.aceleration())
// console.log(car.showCaracter())

// let motor = '1000'
// let name = 'Kawasai Ninja'
// let tipo = 'esportiva'

// let moto = {
//     motor: motor,
//     name: name,
//     tipo: tipo, 
// }

// //console.log(moto)

// let atleta = {
//     name: 'Rayssa Leal',
//     esporte: 'Skate street',
//     age: 16
// }

// atleta.nacionalidade = 'brasileira'
// atleta.medalhas = { 
//     ouro: 10,
//     bronze: 1,
//     prata: 2
// }

// atleta.celebarVitoria = () => {return "Ganhei!!!"}

// console.log(atleta)
// console.log(atleta.celebarVitoria())
 
//---------Constructor------
// function compiuter(processor, ram, store, gpu) {
//     this.processor = processor
//     this.gpu = gpu
//     this.ram = ram
//     this.store = store

//     this.turnOn = () => {
//         return `O ${this.processor} foi ligado`
//     }

//     this.showCaracter = () => {
//         return `processador:${this.processor}\nGPU: ${this.gpu}\nArmazenamento: ${this.store}\nRAM:${this.ram}`
//     }
// }

// let pc = new compiuter('Ryzen 7', '32gb', '1TB SSD', 'RTX 4090')
// console.log(pc.showCaracter())

// --------Factory-------
// function games(title, genre, yearly, enterprise) {
//     return {
//         title,
//         genre,
//         yearly,
//         enterprise
//     }
// }

// let gameOne = games('God of War', 'RPG', 2018, 'Santa Monica Studio')
// console.log(gameOne)

// __forIn -- forOf__

// let car = {
//     model: 'Porshe',
//     color: 'black',
//     year: 2020,
//     engine: 'v10'
// }
// //forIn
// // for(let key in car){
// //     console.log(`${key}: ${car[key]}`)
// // }

// //forOf

// let players = [['pele', 'ribamar'], 'neymar', 'cr7', 'messi']


// for(let jogador of players){
//     console.log(jogador)
// }

// for(let player in players){
//     console.log(players[player])
// }


//exercice

// let planets = ['mars', 'jupiter', 'saturn', 'mercury', 'venus', 'pluto', 'neptune', 'uranus', 'earth', 'sun']

// console.log('-----forIn-----')
// for(let planet in planets){
//     console.log(planets[planet])
// }

// console.log('-----forOf-----')
// for(let planet of planets){
//     console.log(planet)
// }

let brazil = {
    capital: 'Brasília',
    language: 'Português',
    people: 200000000,
    area: 8515767,
    continent: 'America',
    currency: 'Real',
    climate: 'Tropical',
}

console.log('-----forIn-----')
for(let characteristic in brazil){
    console.log(`${characteristic}: ${brazil[characteristic]}`)
}

console.log('-----forOf-----')
for(let charsc of Object.keys(brazil))[
    console.log(`${charsc}: ${brazil[charsc]}`)
]