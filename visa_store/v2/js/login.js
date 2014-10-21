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
    document.getElementById('LnT_login').style.backgroundColor = '#CEE7FF';
};


//createDiv('mtest',200,230,300,115,'LnT_test')