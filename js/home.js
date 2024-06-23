 var logoutBtn=document.getElementById('logoutBtn');
 var user=document.querySelector('span')
var users=JSON.parse(localStorage.getItem('user'))
var lastUser=users[users.length-1].userName;
sessionStorage.setItem('userName',lastUser)
user.innerHTML=sessionStorage.getItem('userName');

//logout button event
logoutBtn.addEventListener('click',function()
{
    sessionStorage.removeItem('user');
    window.location.replace('https://mo7sen11.github.io/smart-login-system/index.html');
    sessionStorage.removeItem('userName')
})