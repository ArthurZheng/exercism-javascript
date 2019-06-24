export const toRna = (dna) => {
  const dnaString = ['G', 'C', 'T', 'A'];
  const dnaToRnaMapping = {'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U'}
  const isIncludedInDnaString = (key) => dnaString.includes(key);
  const inputDnaString = dna.split('');
  const lookUpDnaToRna = (key) => dnaToRnaMapping[key];
  const inputValidation = inputDnaString.map(isIncludedInDnaString);
  
  if (inputValidation.includes(false)) {
    throw new Error('Invalid input DNA.');
  }
  const result = inputDnaString.map(lookUpDnaToRna)
  return result.join('');
}