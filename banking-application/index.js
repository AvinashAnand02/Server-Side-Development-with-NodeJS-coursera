const {category}=require('./src/category');
const {addCustomer,updateCustomer,getAllCustomers}=require('./src/customer');

const Main=()=>{
    
    addCustomer("c001","Nina Sen",24,"Kolkata,West Bengal",910855748,category("EL"));
    addCustomer("c002","Joey Tribbiani",30,"Boston,USA",9154879626,category("HL"));
    addCustomer("c003","Ross Geller",24,"New York,USA",8468555748,category("VL"));
    console.log(getAllCustomers());
    
    addCustomer("c001","Nina Sen",24,"Kolkata,West Bengal",910855748,category("EL"))

    updateCustomer("c003","Ross Geller",34,"New York,USA",8468555748,category("VL"))
    console.log(getAllCustomers());
}

Main();