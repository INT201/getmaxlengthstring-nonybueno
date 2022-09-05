const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if(arrayOfString == null || undefined){
      return undefined;
  }
  else{
    let arr1=[];
    let longestString = arrayOfString[0];
    for(let i=0; i<arrayOfString.length; i++){
      if(arrayOfString[i].length > longestString.length){
        longestString = arrayOfString[i];
      }
      }
      for(i=0; i<arrayOfString.length;i++){
        if(arrayOfString[i].length == longestString.length){
          arr1.push(arrayOfString[i])
        }
      }
    return arr1; 
    }
  }

module.exports = getMaxLengthString
