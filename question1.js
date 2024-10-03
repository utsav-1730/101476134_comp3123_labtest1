function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(mixedArray)) {
        reject("Input is not an array");
      } else {
        const filteredArray = mixedArray.filter(item => typeof item === 'string')
                                        .map(word => word.toLowerCase());
        
        if (filteredArray.length > 0) {
          resolve(filteredArray);
        } else {
          reject("No strings found in the array");
        }
      }
    });
  }
  
  const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
  
  lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error));