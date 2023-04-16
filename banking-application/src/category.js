var category = function category(key) {
  if (key=="EL" || key=="eL" || key=="El" || key=="el") {
    return "Education Loan";
  }
  else if (key=="PL" || key=="pL" || key=="Pl" || key=="pl") {
    return "Personal Loan";
  }
  else if (key=="VL" || key=="vL" || key=="Vl" || key=="vl") {
    return "Vehicle Loan";
  }
  else if (key=="HL" || key=="hL" || key=="Hl" || key=="hl") {
    return "Home Loan";
  }

  };
  
  module.exports = {
    category: category
  };