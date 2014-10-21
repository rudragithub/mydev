//-----------------------------------Tab Menu controllers ------------------------
var menu = {
    load: function() {
	
        document.getElementById('Lnt_headerMenu').style.visibility = 'visible';
		document.getElementById('LnT_login').style.visibility = 'hidden';
        var x = document.getElementById('LnT_login').parentNode;		
        x.removeChild(document.getElementById('LnT_login'));		
		
    },
    callVisaEntry: function() {
        visaentry.show();
    },
	callVisaDetails:function()
	{
		tableIntialize();
	},
	callUpdate:function()
	{
		update.show();
	},
	callNewClient:function()
	{
		addNewClient();
	},
	calllogoff:function()
	{
		logoff();
	},
	showType:function(ele)
	{
		document.getElementById('visaTable').style.visibility='hidden';
		document.getElementById('searchPage').style.visibility='hidden';
		document.getElementById('LnT_Registration').style.visibility='hidden';		
		document.getElementById(ele).style.visibility='visible';
		
	}
	
}

