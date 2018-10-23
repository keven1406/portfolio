'use strict'

//sizeHeightScreen:: () -> Number
const sizeHeightScreen = () => window.innerHeight

//sizeWidthScreen:: () -> Number
const sizeWidthScreen = () => window.innerWidth

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
const seta = document.getElementById('seta')

const drawScreen = () => {
	if (sizeWidthScreen() > 1000) {
		centro.style.height = heightScreen(sizeHeightScreen(), place(cabecalho))
		contato.style.height = heightScreen(sizeHeightScreen(), (place(tituloContato) + 0) + place(rodape))
	} else {
		console.log(sizeWidthScreen())
		centro.style.height = heightScreen(sizeHeightScreen(), place(cabecalho))
		contato.style.height = place(contato) + 200 + 'px'
	}
}

const goElement = place => {
	window.scroll({
	  top: tituloContato.getBoundingClientRect().y,
	  left: 0,
	  behavior: 'smooth'
	})
}

if (centro) {
	drawScreen()
	seta.addEventListener('click', goElement)
}
else {
	const menuPostagem = document.getElementById('corpo-menu-postagem')
	const rodape = document.getElementById('rodape')

	menuPostagem.style.overflow = "auto"
	menuPostagem.style.height = heightScreen(sizeHeightScreen(), place(cabecalho) + place(rodape))

}