const calculateWeightLostInAMonth = (cycling,running,swimming,extraCalorieInTake) =>{
   let weightLostInAMonth = 0;
   // write logic here 
   if (cycling<=0 || running<=0 || swimming<=0 || extraCalorieInTake<=0) {
      weightLostInAMonth=-1;
   }
   else{
      weightLostInAMonth=(((2*cycling*4)+(2*running*4)+(2*swimming*4))-(extraCalorieInTake*30))/1000;
   }
   

   return weightLostInAMonth;
   
}

module.exports = calculateWeightLostInAMonth

