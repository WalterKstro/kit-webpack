import css from './main.css'
import scss from './scss/main.scss'


import {
   operar
} from './operacion'
import data from './data.json'


let saludo = "Hello"


console.log('Hola Webpack dede otro punto de entrada')
console.log(`${saludo} mundo`)
console.log(`La suma es: ${operar(10, 10)}`)
console.log(data)