var createBtn=document.getElementById('createBtn');
var loginBtn=document.getElementById('loginBtn');
var userPassword =document.getElementById('userPassword');
var userEmail =document.getElementById('userEmail');
var showPassword=document.getElementById('showPassword');
var userList=JSON.parse(localStorage.getItem('user'));


function checkUserInfo(email,password)
{
for(var i=0;i<userList.length;i++)
    {
        if(email==userList[i].userEmail&&password==userList[i].userPassword)
            {
                document.querySelector('.invalidInfo').classList.replace('d-block','d-none')
                window.location.replace('https://mo7sen11.github.io/smart-login-system/home.html');
                clearInputs();
                break;
            }
            else
            {
                document.querySelector('.invalidInfo').classList.replace('d-none','d-block')
            }
    }
}


loginBtn.addEventListener('click',function()
{
    checkUserInfo(userEmail.value,userPassword.value);
})

function clearInputs() {
    userEmail.value = "";
    userPassword.value = "";
}
createBtn.addEventListener('click',function(){
    window.location.replace('https://mo7sen11.github.io/smart-login-system/signup.html');
})

showPassword.addEventListener('click',function(){
    if(showPassword.checked==true)
        {
            userPassword.setAttribute('type','text')
        }
        else
        {
            userPassword.setAttribute('type','password')
        }
})