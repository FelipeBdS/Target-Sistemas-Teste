function inverterString(str) {
    let novaString = '';
    for (let i = str.length - 1; i >= 0; i--) {
      novaString += str[i];
    }
    return novaString;
  }
  
  let minhaString = 'string a ser invertida';
  let minhaStringInvertida = inverterString(minhaString);
  console.log(minhaStringInvertida); 
  