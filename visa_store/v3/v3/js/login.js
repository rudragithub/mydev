function showPopup(id, w, h, t, l) {

    var popup = document.getElementById(id);
    popup.style.display = 'none';
    popup.style.display = 'block';
    popup.style.width = w + 'px';
    popup.style.height = h + 'px';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.position = 'fixed';
    popup.style.marginTop = t + 'px';
    popup.style.marginLeft = l + 'px';
    popup.style.borderStyle = 'solid';
    popup.style.borderWidth = '1px';

}

function createBg() {
    var bg = document.createElement('div');
    bg.setAttribute('id', 'LnTBg');
    bg.style.width = '100%';
    bg.style.height = '100%';

    bg.style.position = 'absolute';
    bg.style.zIndex = -1;
    document.body.appendChild(bg);

}

function createDiv(id, w, h, l, t, append) {
    var d = document.createElement('div');
    d.setAttribute('id', id);
    d.style.width = w + 'px';
    d.style.height = h + 'px';
    d.style.left = l + 'px';
    d.style.top = t + 'px';
    document.getElementById(append).appendChild(d);
}

function loadMenus() {


    document.getElementById('Lnt_headerMenu').style.visibility = 'visible';
    var x = document.getElementById('LnT_login').parentNode;
    x.removeChild(document.getElementById('LnT_login'))
}


window.onload = function() {
    createBg();
    showPopup('LnT_login', 300, 170, -85, -150);    
    
};

function showForgotPwdScreen()
{
   showPopup('LnT_ForgotPassword', 550, 180, -90, -275);
   document.getElementById('LnT_ForgotPassword').style.visibility='visible';
   hideElement('LnT_login')
}

function resetPassword()
{
   showPopup('LnT_Reset_pwd', 400, 140, -70, -200);
   document.getElementById('LnT_Reset_pwd').style.visibility='visible';
   hideElement('LnT_ForgotPassword')

}

function savePassword()
{
hideElement('LnT_Reset_pwd');
showElement('LnT_login');
}

function removeElement(c)
{
  var x = document.getElementById(c)
x.parentNode.removeChild(x);
}

function hideElement(c)
{
document.getElementById(c).style.visibility='hidden';
}
function showElement(c)
{
document.getElementById(c).style.visibility='visible';
}

function shownewuserRegistration()
{
 hideElement('LnT_login');
showElement('LnT_newuser_register');
showPopup('LnT_newuser_register', 550, 250, -125, -275);
}

function newuserRegistration()
{
showElement('LnT_login')
hideElement('LnT_newuser_register')
  alert("successfully registered");
}

//createDiv('mtest',200,230,300,115,'LnT_test')