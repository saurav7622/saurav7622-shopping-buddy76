import '@babel/polyfill';
import {login} from './login';
import {logout} from './logout';
import {signup} from './signup';
import {addNotifications} from './addNotifications';
import {AddNotifications} from './notifyController.js';
import {resetPassword} from './updatePassword.js';
import {forgotPassword} from './ForgotPassword.js';
import {saveForgotPassword} from './SaveForgotResetPassword.js';
//import { updatePassword } from '../../controllers/authController';
//Initializing buttons
const logInBtn=document.getElementById('log-in-button');
const signUpBtn=document.getElementById('sign-up-button');
const notifyMeBtn=document.querySelector('.notify-me-btn');
const sideBarBtn=document.getElementById("sidebar");
const logOutBtn=document.querySelector('.log-out-btn');
const toggleBtn=document.querySelector('.toggle-btn');
const tryBtn=document.getElementById("try");
const resetBtn=document.querySelector('#Reset-Btn');
const sendResetLink=document.getElementById("send-forgot-reset-link");
const saveForgottenResetBtn=document.getElementById("Forgot-Reset-Btn");
const tracks=document.querySelector(".tracks");
const overlay = document.querySelector('.overlay');
//functions




if(logInBtn)
logInBtn.addEventListener('submit',e=>{
    e.preventDefault();
const email=document.getElementById("log-in-email").value;
const password=document.getElementById("log-in-password").value;
login(email,password);
});


if(signUpBtn)
signUpBtn.addEventListener('submit',e=>{
    e.preventDefault();
   // alert("Trying to sign up!!!!");
const name=document.getElementById("sign-up-name").value;
const email=document.getElementById("sign-up-email").value;
const password=document.getElementById("sign-up-password").value;
const confirm_password=document.getElementById("confirm-your-password").value;
signup(name,email,password,confirm_password);
});

if(notifyMeBtn)
notifyMeBtn.addEventListener('click',e=>{
    e.preventDefault();
const url=document.getElementById("url").value;
const duration=document.getElementById("duration").value;
addNotifications(url,duration);
setTimeout(AddNotifications,10000);
});

            if(toggleBtn)
            document.getElementById("sidebar").classList.toggle('active');
        
   
if(logOutBtn)        
logOutBtn.addEventListener('click',logout);

if(resetBtn)
resetBtn.addEventListener('submit',async e=>{
    e.preventDefault();
    const currentPassword=document.getElementById("currentPassword").value;
    const newPassword=document.getElementById("newPassword").value;
    const newConfirmPassword=document.getElementById("confirmNewPassword").value;
    //alert(currentPassword);
    await resetPassword(currentPassword,newPassword,newConfirmPassword);
    document.getElementById("currentPassword").value='';
    document.getElementById("newPassword").value='';
    document.getElementById("confirmNewPassword").value='';
});

if(sendResetLink)
sendResetLink.addEventListener('submit',async e=>{
    e.preventDefault();
    //alert("hyeeeeee");
    const email=document.getElementById("forgot-email").value;
   // alert(email);
    await  forgotPassword(email);

    document.getElementById("forgot-email").value='';
})

if(saveForgottenResetBtn)
{
    saveForgottenResetBtn.addEventListener('submit',async e=>{
        
        e.preventDefault();
        const newPassword=document.getElementById("newForgotPassword").value;
        const confirmForgotPassword=document.getElementById("confirmForgotPassword").value;
        //alert(window.location.href.split("resetPassword/")[1]);
        await saveForgotPassword(newPassword,confirmForgotPassword,window.location.href.split("resetPassword/")[1]);
        
        document.getElementById("newForgotPassword").value='';
        document.getElementById("confirmForgotPassword").value='';

    })
}
console.log(tracks);

   deleteTrackBtn.forEach((el,i)=>{
       el.addEventListener('click',async e=>{
       e.preventDefault();
       alert(`deleting the track no ${i}`)
   //document.getElementById("delete-confirmation-form").classList.remove('hidden');    
   //overlay.classList.remove('hidden');
   })
});


//setInterval(alert("hye"),5000);
setInterval(AddNotifications,60000);