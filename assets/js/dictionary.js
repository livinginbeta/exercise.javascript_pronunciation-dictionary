function arraysEqual(a1,a2) {
    return JSON.stringify(a1)==JSON.stringify(a2);
}

class Word {

//returns a list of strings representative of the Phonemes of this word.
//Indices of the respective list should be indicative of their order of
//annunciation.
getPronunciation(){

}

//return a list of all phonetically identical or similar words.
getSimilarWords() {

}

//returns a list of phonetically identical words
getIdentical(){

}

//return a list of words which contain sub-Phonemes
getSimilarWordsWithSubPhonemes(){

}

//return a list of near-phonetically-identical words with additional Phonemes
//added.
getSimilarWordsWithAddedPhonemes() {

}

//return a list of near-phonetically-identical words with Phonemes replaced.
getSimilarWordsWithReplacedPhonemes(){

}

getSpelling() {

}


toString() {

}

 } //class closing bracket




class PronunciationTest {
	_test(expected, wordString) {
		let word = new Word(wordString);

		// when
		let actual = word.getSimilarWordsWithSubPhonemes();
		
		// then
		let pass = arraysEqual(expected, actual);

		console.log('input = ' + wordString);
		console.log('expected = ' + expected);		
		console.log('actual = ' + actual);
		console.log('test passed = ' + pass);
	}

	test1() {
		let expected = ['D','OW1','N','AH2','T'];
		let input = 'donut';
		_test(expected, input);
	}

	test2() {
		let expected = ['P','R','OW1','G','R','AE2','M'];
		let input = 'program';
		_test(expected, input);
	}


	test3() {
		let expected = ['AH0','K','AO1','R','D'];
		let input = 'accord';
		_test(expected, input);
	}
}