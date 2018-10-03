'use strict'

//sizeHeightScreen:: () -> Number
const sizeHeightScreen = () => window.innerHeight

//place:: Object -> Number
const place = element => element.offsetHeight

//place:: Number -> String
const heightScreen = (height, ocupped) => (height - ocupped) + 'px'

//app
const cabecalho = document.getElementById('cabecalho')
const centro = document.getElementById('centro')

const tituloContato = document.getElementById('titulo-contato')
const contato = document.getElementById('contato')
const rodape = document.getElementById('rodape')

centro.style.height = heightScreen(sizeHeightScreen(), place(cabecalho))
contato.style.height = heightScreen(sizeHeightScreen(), place(tituloContato) + place(rodape))