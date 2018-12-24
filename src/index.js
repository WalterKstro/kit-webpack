import css from './main.css'
import scss from './scss/main.scss'

import {
   operar
} from './operacion'


let saludo = "Hello"


console.log('Hola Webpack')
console.log(`${saludo} mundo`)
console.log(`La suma es: ${operar(10, 10)}`)