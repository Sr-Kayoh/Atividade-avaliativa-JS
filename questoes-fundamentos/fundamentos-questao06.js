const numeroMaisFrequente = (arr) => {
    const contagem = {};
    let maxNum = arr[0];
    let maxFreq = 1;
  
    for (const num of arr) {
      contagem[num] = (contagem[num] || 0) + 1;
  
      if (contagem[num] > maxFreq) {
        maxFreq = contagem[num];
        maxNum = num;
      }
    }
  
    return maxNum;
  };
  
  console.log(numeroMaisFrequente([3, 5, 3, 2, 3, 8, 5, 5, 5])); 
  