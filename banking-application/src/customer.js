var customerList=[];

const addCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      // Write the Logic here
      let isAlready=false;
      
      if(customerList.length==0)
      {
            customerList.push([CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category])
          
      }
      else{
           for (let index = 0; index < customerList.length; index++) {
           if (customerList[index][0]==CustomerId) {
            isAlready=true;
                
           }
            
           }
           if (!isAlready) {
            customerList.push([CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category]);
           
           
           }
      }
      
      
}

const updateCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      // Write the Logic here
     for (let index = 0; index < customerList.length; index++) {
      if (customerList[index][0]==CustomerId) {
            customerList[index][1]=CustomerName;
            customerList[index][2]=CustomerAge;
            customerList[index][3]=CustomerAddress;
            customerList[index][4]= CustomerContactNumber;
            customerList[index][5]=Category;
      }
      
     }

 
}

const getAllCustomers=()=>{
  // Write the Logic here
  return customerList;
}

module.exports={addCustomer,updateCustomer,getAllCustomers}