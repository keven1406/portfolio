'use strict'
//V 0.0.1

//regras:: String -> String
const regras = palavra => {
	if (/const/.test(palavra) || /let/.test(palavra)) return "<span class = 'variavel'>" + palavra + "</span>"
	else if (/if/.test(palavra) || /else/.test(palavra) || /while/.test(palavra) || /for/.test(palavra) || /break/.test(palavra) || /return/.test(palavra))
		return "<span class = 'palavra-chave'>" + palavra + "</span>"
	else if (/\+/.test(palavra) || /\-/.test(palavra) || /\//.test(palavra) || /=/.test(palavra) || /%/.test(palavra) || /\*/.test(palavra) || /[!]/.test(palavra) || /[<]/.test(palavra) || /[>]/.test(palavra))
		return "<span class = 'operador'>" + palavra + "</span>"
	else if (/[.]/.test(palavra)) return "<span class = 'funcao'>" + palavra + "</span>"
	else if (/[\{]/.test(palavra)) return palavra + "</br>&nbsp;&nbsp;&nbsp;&nbsp;"
	else if (/[;]/.test(palavra) || /}/.test(palavra)) return palavra + "</br>"

	else return palavra
}

//inserirCor:: Array -> Array
const inserirCor = palavras => palavras.map(palavra => regras(palavra))


//dividirPalavras:: Array -> Array
const dividirPalavras = palavras =>
	palavras.map(palavra => 
		palavra.split('')
	)

//dividirTexto:: String -> Array
const dividirTexto = texto =>
	texto.split(" ")

//parseArray = Objeto -> Array
const parseArray = objeto => {
	const array = []
	for (let contar = 0; contar < objeto.length; contar++) {
		array.push(objeto[contar])
	}
	return array
}

const paragrafos = document.body.getElementsByTagName("p")
console.log(parseArray(paragrafos))

const eCodigo = paragrafo => {
	if (paragrafo.getAttribute("data-codigo")) return true
}

const codigos = parseArray(paragrafos).filter(paragrafo => eCodigo(paragrafo))

console.log(codigos)
codigos.forEach(codigo => {
	const codigoColorido = inserirCor(dividirTexto(codigo.textContent))
	codigo.innerHTML = codigoColorido.join(" ")
})