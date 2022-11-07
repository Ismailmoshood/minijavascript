// Object to store value
let userdetailsdatabase = {}

function getuserdetails(){
   let username = prompt("enter your username")
   if(username == null){
      return
   }

   function validateusername(username){
      if(username.length < 10 && username.length > 0){
         return true
      }else{
         return false
      }
   }
   
   while(validateusername(username) == false){
      username = prompt("username must be lessthan 10 and greterthan 3")
   }
   userdetailsdatabase["username"] = username

   let phonenumber = prompt("enter your phonenumber")
   if(phonenumber == null){
      return
   }

   function validatephonenumber(phonenumber){
      if(phonenumber.length == 11){
         return true
      }else{
         return false
      }
   }

   while(validatephonenumber(phonenumber) == false){
      phonenumber = prompt("phonenumber must be equal to 11")
   }
   userdetailsdatabase["phonenumber"] = phonenumber

   let password = prompt("enter your password")
   if(password == null){
      return
   }

   function validatepassword(password){
      if(password.length < 6){
         return false
      }else{
         return true
      }
   }
   while(validatepassword(password) == false){
      password = prompt("password must be greaterthan 6")
   }
   userdetailsdatabase["password"] = password
   
   let confirmpassword = prompt("password must be same")
   
   function validatenewpassword(confirmpassword){
      if(confirmpassword == password){
         return true
      }else{
         return false
      }
   }
   while(validatenewpassword(confirmpassword) == false){
confirmpassword = prompt("enter same password")
   }
   console.log(userdetailsdatabase)
}


function displayuserdetails(){
 alert(`Your Details\n\nUsername: ${userdetailsdatabase.username}\n\n phonenumber: ${userdetailsdatabase.phonenumber}`)}