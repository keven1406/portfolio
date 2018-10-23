const juntarTexto = texto => {

}

//regraConsoante:: Array -> Array
const regraConsoante = letras => {
	const eVogal = ["a", "e", "i", "o", "u"]
	const regras = letras.map( letra => 
		eVogal.find(vogal => letra === vogal ? true : false) ? true : false
	)
	return regras
}

const juntarPalavras = palavras => {
	palavras.map(letras =>
		let letrasJuntadas = []
		const regras = regraConsoante(letras)
		
		//escrever regras com if e else
		regras.forEach((regra, indice) => {
			if (regra === true && regras[indice + 1] === false) letras[indice]
		})
	)
}

//dividirPalavras:: Array -> Array
const dividirPalavras = palavras =>
	palavras.map(palavra => 
		palavra.split('')
	)

//dividirTexto:: String -> Array
const dividirTexto = texto =>
	texto.split(" ")

const tratarTexto = texto => {
	console.log(texto)

}

tratarTexto( 
	JuntarPalavras(
		dividirPalavras(
			dividirTexto("Oi, eu sou Elias Keven Pereira da Silva e quero comer feijão...")
		)
	)
)