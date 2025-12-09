export function tryWord(word, base) {
  // TODO: fix jeu sensible à la casse. ✅
    word = word.toLowerCase();
    base = base.toLowerCase();
  // console.log('=== tryWord appelée ===');
  // console.log('word:', word);
  // console.log('base:', base);
  // console.log('word === base ?', word === base);
	if (word === base) {
    // Fix: Retourne un objet cohérent au lieu de true pour éviter les erreurs dans guess()
		return { 
        wellPlaced: word.split(''), // toutes les lettres sont bien placées
        missplaced: [], 
        notInWord: [] 
    }
  } else {
  	let wellPlaced = [];
    let notInWord = [];
    let missplaced = [];
    
  	let arrayBase = base.split('');
    let arrayWord = word.split('');
    
    // console.log('=== Début analyse ===');
    // console.log('arrayBase.length:', arrayBase.length);
    // console.log('Boucle jusqu\'à i <', arrayBase.length - 1);

    // Fix: Parcourir toutes les lettres (sans -1 qui omettait la dernière)
		for (let i = 0; i < arrayBase.length; i++) {
    	if (arrayBase[i] === arrayWord[i]) {
      	wellPlaced.push(arrayWord[i]);
      }	else {
        // Fix: Ajouter la lettre en "mal placé" uniquement si elle existe dans le mot de base
        if (arrayBase.includes(arrayWord[i]))
          missplaced.push(arrayWord[i])
      }
    }
    
    for (const char of arrayWord) {
    	if (arrayBase.includes(char) === false) {
      	notInWord.push(char)
      }
    }
    
    return { wellPlaced: wellPlaced, missplaced: missplaced, notInWord: notInWord }
  }
}