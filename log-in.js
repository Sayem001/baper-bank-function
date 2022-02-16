document.getElementById('input-submit').addEventListener('click',function(){
    // get user email 
    const emailField=document.getElementById('user-email');
    const userEmail=emailField.value;
    // get user password 
    const passwordField=document.getElementById('user-password');
    const userPassword=passwordField.value;
    // email password check 
    if(userEmail=='sontan@bap.com' && userPassword=='baperbeta'){
        window.location.href='banking.html';
    }
})