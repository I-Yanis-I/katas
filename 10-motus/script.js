import { tryWord } from './motus.js';

function guess() {
	let base = 'dictionnaire'
	let word = document.getElementById("word").value
	let result = tryWord(word, base)
  document.getElementById("word").value = ''
 	document.getElementById("try").innerText = word
  document.getElementById("well").innerText = 'Bien placé: '+result.wellPlaced.join(', ')
  document.getElementById("miss").innerText = 'Mal placé: '+result.missplaced.join(', ')
  document.getElementById("not").innerText = 'Pas dans le mot: '+result.notInWord.join(', ')
  if (result.wellPlaced.length === base.length) {
	  document.getElementById("win").innerText = 'Vous avez gagné'
  }
};

document.getElementById('guess-btn').addEventListener('click', guess);