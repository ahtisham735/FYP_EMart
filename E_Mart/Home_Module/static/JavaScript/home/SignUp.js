var emailStatus=false
var usernameStatus=false
var passwordStatus=false
var cnfrmPasswordStatus=false
var chkboxStatus=false
var current=false

loginSubmit=()=>{
  
    const passwd=document.getElementById("loginPasswd")
    const username=document.getElementById("loginUsername")
    var nameError=document.getElementById("nameError")
    var pswdError=document.getElementById("pswdError")
    if(username.value.length===0){
        nameError.innerHTML="Please Enter Username"
        return false;
    }
    else
    {
        nameError.innerHTML=""
    }
    if(passwd.value.length===0){
        pswdError.innerHTML="Please Enter Password"
        return false;
    }
    else
    {
        pswdError.innerHTML=""
    }
        return true;
}
handleFocus=(id)=>{
    
    const val=document.getElementById(`${id}`)
    const element =document.getElementById(`${id}Error`)
    if(val.value.length===0){
        element.innerHTML="It is a required field";        
    }else{
        element.innerHTML="";   
    }
  
       
}
handleChangeRegister=(id)=>{
    const val=document.getElementById(`${id}`)
    const element =document.getElementById(`${id}Error`)
    var regbtn=document.getElementById('regbtn')

    if(val.value.length===0){
        element.innerHTML="It is a required field";
        return;                     
    }

    if(id==='email'){
        Email(val,element)
        
    }
    else if(id==='username'){  
        Username(val,element)  
        
    }
    else if(id==='password')
    {
        Password(val,element);
    }
    else if(id==="cnfrmPassword")
    {
        cnfrmPassword(val,'password');
    }
    else if(id==='chkbox')
    {
        if(val.checked)
        {
            chkboxStatus=true;
        }
        else
        {
            chkboxStatus=false;
        }
    }
    if(emailStatus&&passwordStatus&&cnfrmPasswordStatus&&usernameStatus&&chkboxStatus)
    {
        regbtn.disabled=false;  
    }
    else
    {
        regbtn.disabled=true; 
    }
    
   
}


//utility Function
Email=(val,element)=>{
    fetch(`http://localhost:8000/customer/email=${val.value}`)
        .then(response=>response.json())
        .then(data=>{
           if(data!==null&&!data['is_social_user']){
                element.innerHTML="User already exist"
                emailStatus=false;
                return;
           }
        });
           
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!filter.test(val.value)){
        element.innerHTML="invalid email";  
        
        emailStatus=false   
    }
    else
    {
        emailStatus=true; 
        element.innerHTML="";
    }
}
Username=(val,element)=>{
    fetch(`http://localhost:8000/customer/username=${val.value}`)
        .then(response=>response.json())
        .then(data=>{
           if(data===null){
                usernameStatus=true;
                element.innerHTML=""
           }
           else{
              
                element.innerHTML="This username has already taken"
                usernameStatus=false;
           }
        }) 
}
Password=(val,element)=>{
    const cnfrmPasswd=document.querySelector('#cnfrmPassword')
    if(cnfrmPasswd.value.length!=0){
        if(!PasswordVerification(val,cnfrmPasswd)){
             cnfrmPasswordStatus=false;
         
        }else{
             cnfrmPasswordStatus=true;
        }

     }
     var passwdPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})") 
    if(!passwdPattern.test(val.value))
     {
         element.innerHTML="use 8 or more letters having atleast one lowercase,one uppercase and one special character";
         passwordStatus=false;
     }
    else
    {
         passwordStatus=true;
         element.innerHTML="";
    }
}
cnfrmPassword=(val,id)=>{
    const passwd=document.getElementById(id)
    if(!PasswordVerification(passwd,val))
        {
            cnfrmPasswordStatus=false;
        }else
        {
            cnfrmPasswordStatus=true;
        }
}


PasswordVerification=(passwd,cnfrmPasswd)=>{
    
    const element=document.getElementById('cnfrmPasswordError')
 
    if(passwd.value!==cnfrmPasswd.value)
    {
        element.innerHTML="Password not matched"
        return false;
    }
    else
    {
        element.innerHTML=""
        return true;
    }

}
handleResetChange=(id)=>{
    const val=document.getElementById(`${id}`)
    const element =document.getElementById(`${id}Error`)
    var resetbtn=document.getElementById('resetbtn')
    if(val.value.length===0){
        element.innerHTML="It is a required field";
        if(id=="password"){
            current=false
        }
                       
    }
    else
    {
        element.innerHTML="";
        if(id=="password"){
            current=true
        }
    }

    if(id==="newPassword")
    {
        Password(val,element);
    }
    if(id==="cnfrmPassword")
    {
        cnfrmPassword(val,'newPassword');
    }

    if(current&&passwordStatus&&cnfrmPasswordStatus)
    {
        resetbtn.disabled=false;  
    }
    else
    {
        resetbtn.disabled=true; 
    }
}

function login(){
    
    var x=document.getElementById("login");
    var y=document.getElementById("register");
    var z=document.getElementById("btn_back");  
    x.style.left="50px";
    y.style.left="450px";
    z.style.left="0px";
    }
function register(){
    var x=document.getElementById("login");
    var y=document.getElementById("register");
    var z=document.getElementById("btn_back");
    x.style.left="-400px";
    y.style.left="50px";
    z.style.left="110px";
}

