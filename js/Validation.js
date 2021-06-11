function validation(){
    var fname = document.getElementById('fname').value;
    var email = document.getElementById('email').value;
    var PhoneNumber = document.getElementById('PhoneNumber').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var pinCode = document.getElementById('pinCode').value;
    var cname = document.getElementById('cname').value;
    var cnum = document.getElementById('cnum').value;
    var expmonth = document.getElementById('expmonth').value;
    var expyear = document.getElementById('expyear').value;
    var cvv = document.getElementById('cvv').value;

    
    if(fname==""){
        document.getElementById('username').innerHTML="Please fill the FullName field";
        return false;
    }
    if((fname.length<=5)||(fname.length>20)){
     document.getElementById('username').innerHTML="Full name length must be 5 or 20 character";
        return false;
    }
    if(!isNaN(fname)){
     document.getElementById('username').innerHTML="Only characters are allowed";
        return false;
    }

    if(email==""){
        document.getElementById('email address').innerHTML="Please fill the email field";
        return false;
    }
    if(email.indexOf('@')<=0){
     document.getElementById('email address').innerHTML="Invalid email address";
        return false;
    }
    if((email.charAt(email.length-4)!='.')&&(email.charAt(email.length-3)!='.')){
     document.getElementById('email address').innerHTML="Invalid email address";
        return false;
    }

    if(PhoneNumber==""){
        document.getElementById('Number').innerHTML="Please fill the PhoneNumber field";
        return false;
    }
    if(isNaN(PhoneNumber)){
     document.getElementById('Number').innerHTML="Only Digits are allowed";
        return false;
    }
    if(PhoneNumber.length!=10){
     document.getElementById('Number').innerHTML="Please write 10 digit PhoneNumber";
        return false;
    }

    if(address==""){
        document.getElementById('HomeAddress').innerHTML="Please fill the address field";
        return false;
    }

    if(city==""){
        document.getElementById('cityName').innerHTML="Please fill the city field";
        return false;
    }
    if(!isNaN(city)){
     document.getElementById('cityName').innerHTML="Only characters are allowed";
        return false;
    }

    if(state==""){
        document.getElementById('StateName').innerHTML="Please fill the city field";
        return false;
    }
    if(!isNaN(state)){
     document.getElementById('StateName').innerHTML="Only characters are allowed";
        return false;
    }

    if(pinCode==""){
        document.getElementById('pin').innerHTML="Please fill the pincode field";
        return false;
    }
    if(isNaN(pinCode)){
     document.getElementById('pin').innerHTML="Only Digits are allowed";
        return false;
    }
    if(pinCode.length!=6){
     document.getElementById('pin').innerHTML="Please write correct pin code";
        return false;
    }

    if(cname==""){
        document.getElementById('nameCard').innerHTML="Please fill the name on card field";
        return false;
    }
    if(!isNaN(cname)){
     document.getElementById('nameCard').innerHTML="Only characters are allowed";
        return false;
    }

    if(cnum==""){
        document.getElementById('numberCard').innerHTML="Please fill the credit card number field";
        return false;
    }
    if(isNaN(cnum)){
     document.getElementById('numberCard').innerHTML="Only Digits are allowed";
        return false;
    }
    if(cnum.length!=16){
     document.getElementById('numberCard').innerHTML="Please write 16 digit cardNumber";
        return false;
    }

    if(expmonth==""){
        document.getElementById('monthExp').innerHTML="Please fill the exp month field";
        return false;
    }
    if(expyear==""){
        document.getElementById('yearExp').innerHTML="Please fill the exp year field";
        return false;
    }

    if(cvv==""){
        document.getElementById('cardPin').innerHTML="Please fill the cvv field";
        return false;
    }
    if(cvv.length!=3){
     document.getElementById('cardPin').innerHTML="Please write 3 digit CVV pin";
        return false;
    }
}