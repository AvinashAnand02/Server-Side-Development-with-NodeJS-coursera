const swapDigits = (number)=>{
    let swappedNumber = 0
    if (number>=0) {
        
    
    let stringNumber=number.toString();
    let placeHolder="";
    if (stringNumber.length%2==0) {
        for (let index = 0; index < stringNumber.length-1; index+=2) {
           
            placeHolder+=stringNumber[index+1];
           placeHolder+=stringNumber[index];
           
     
            
        }
       
       
    }
    else{
        placeHolder+=stringNumber[0];
        for (let index = 1; index < stringNumber.length-1; index+=2) {
           
            placeHolder+=stringNumber[index+1];
           placeHolder+=stringNumber[index];
        }
    }
    swappedNumber=parseInt(placeHolder);
}
    return swappedNumber;
    
}

module.exports = swapDigits
