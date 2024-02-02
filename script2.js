
  var A=document.getElementById("firstname");
  var B=document.getElementById("middlename");
  var C=document.getElementById("lastname");
  var D=document.getElementById("ding");
  var E=document.getElementById("linemanager");
  var F=document.getElementById("profess");//for image
  var G=document.getElementById("dept");//for Department
  var H=document.getElementById("empno")//for EMPNO
  var I=document.getElementById("phno");//for phno
  var J=document.getElementById("jobloc");//for joblocation
  var K=document.getElementById("mobileemail");//for email
  var L=document.getElementById("delhia");
  var M=document.getElementById("delhib");
  var N=document.getElementById("delhic");
  var O=document.getElementById("delhid");
  var P=document.getElementById("delhie");
  var Q=document.getElementById("delhif");
  var R=document.getElementById("delhig");
  var S=document.getElementById("delhih");
  var T=document.getElementById("delhii");
  var U=document.getElementById("delhij");
  var V=document.getElementById("delhik");
  var W=document.getElementById("haryanaa");
  var X=document.getElementById("haryanab");
  var Y=document.getElementById("haryanag");
  var Z=document.getElementById("reporting");
  var a=document.getElementById("addresses");



  // var mobileusername = "your_mobile_username"; // Replace with the actual mobile username
  
  
  fetch('https://mobapp.nijatech.com/employee/getdetails', {
    method: 'POST',
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      
       
      
       mobileusername:"SG0108",
       firstName:"Jaclyn"
  
  })
  })

  
  .then(function(response) {
    return response.json();
  })
  
  .then(function(data) {
    
    // JSON.stringify(data.status).toString()==="true"? alert(JSON.stringify(data.status)):alert(JSON.stringify('Not Valis'));
    
    
  
   if (JSON.stringify(data.status).toString()==="true"){ 
   
    // linmang.innerHTML = `${data.linemanager}`;
    
    A.innerHTML = `${(data.message.firstName)}`;
    B.innerHTML = `${(data.message.middleName)}`;
    C.innerHTML=`${data.message.lastName}`;
    D.innerHTML=`${data.message.designation}`;
    E.innerHTML=`${data.message.linemanager}`;
    F.innerHTML=`${data.message.imgUrl}`;
    G.innerHTML=`${data.message.department}`;
    H.innerHTML=`${data.message.employeeCode}`;
    I.innerHTML=`${data.message.phone}`;
    J.innerHTML=`${data.message.joblocation}`;
    K.innerHTML=`${data.message.mobileemail}`;
    L.innerHTML=`${data.message.firstName}`;
    M.innerHTML=`${data.message.lastName}`
    N.innerHTML=`${data.message.gender}`;
    O.innerHTML=`${data.message.maritalStatus}`;
    R.innerHTML=`${data.message.middleName}`;
    S.innerHTML=`${data.message.shortName}`;
    T.innerHTML=`${data.message.dateOfBirth}`;
    W.innerHTML=`${data.message.mobileemail}`;
    X.innerHTML=`${data.message.phone}`;
    Y.innerHTML=`${data.message.mobileemail}`;
    Z.innerHTML=`${data.message.supervisor}`;
    a.innerHTML=`${data.message.contacts}`;
  } 
  else {
     
    console.error("Error occurs:", data);
    
  }
  });
  