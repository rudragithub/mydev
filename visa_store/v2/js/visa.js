

LnT_total_visa = 57;
max_visa = LnT_total_visa;


function LnTTable_Init(){

colunArr = ['PS No', 'Name', 'Status', 'Available by', 'Base Account', 'Base DH', 'Primary Domain', 'Primary Skill', 'Additional Skills',

    'Selected for Client', 'Target Onboarding date', 'Target DH'
]
colnWidth = ['140px', '220px', '135px', '140px', '186px', '80px', '100px', '100px', '100px', '100px', '100px', '50px']



LnT_total_colum = colunArr.length;
Lnt_total_in_row = 5;
rowClass = ['tg-031e', 'tg-vn4c', 'colum', 'header']
tableId = "DB_Visa"
pageNoShow = 5;
pageEnableArea = Math.ceil(LnT_total_visa / Lnt_total_in_row);
lastRowShow = LnT_total_visa % Lnt_total_in_row
rowStored = new Array();
storedPage = new Array();
clientDataArr = new Array();
nxt = 0;
back = 0;
visa_init_call = false;





//All need to configure from Data base
LntDB_Table = [    
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
]

LntDB_Table[0]=[20000631,20001632,20002458,20003653,20002969,20001392,20002966,20001298,20000022,20003481,20002758,20000226,20001365,20003544,20001069,20004964,20002599,20001679,20003772,20002036,20000310,20001185,20000620,20001294,20001184,20003763,20004021,20000314,20004362,20001998,20001876,20002152,20002811,20000225,20003787,20000293,20002491,20002840,20000547,20003227,20002593,20004662,20001366,20004885,20000969,20001257,20001738,20001132,20001144,20002984,20002177,20001608,20000993,20000123,20004346,20000471,20003230,20001185];

LntDB_Table[9] = ['samsung','cisco','IDC','cisco','IDC','samsung','cisco','others','IDC','IDC','IDC','IDC','IDC','cisco','IDC','samsung','cisco','IDC','cisco','IDC','cisco','IDC','cisco','IDC','samsung','cisco','IDC','cisco','IDC','samsung','cisco','IDC','cisco','IDC','cisco','IDC','cisco','IDC','samsung','cisco','IDC','cisco','IDC','cisco','IDC','cisco','IDC','samsung','cisco','IDC','cisco','IDC','samsung','others','IDC','cisco','IDC','cisco','IDC','cisco','IDC','samsung','cisco','IDC','cisco','IDC','cisco','IDC','cisco','IDC','samsung','cisco','IDC','cisco','IDC','samsung','IDC','IDC','cisco','IDC','cisco','IDC','cisco','IDC','samsung','cisco','IDC','cisco','IDC','cisco','IDC','cisco','IDC','samsung'];

for (var j = 0; j < max_visa; j++) {
    LntDB_Table[1][j] = "Name_" + j;
    LntDB_Table[2][j] = "Available"
    LntDB_Table[3][j] = "All Days";
    LntDB_Table[4][j] = LntDB_Table[0][j];
    LntDB_Table[5][j] = "DATA_New_" + j;
    LntDB_Table[6][j] = "DATA_New_" + j;
    LntDB_Table[7][j] = "DATA_New_" + j;
    LntDB_Table[8][j] = "DATA_New_" + j;
    LntDB_Table[10][j] = "DATA_New_" + j;
    LntDB_Table[11][j] = "DATA_New_" + j;

}

if (pageEnableArea > pageNoShow) {
    remainPage = pageEnableArea - pageNoShow
    pageEnableArea = pageNoShow;

}

removeTable();

}

LnTTable_Init()

function removeTable() {

    var t = document.getElementById(tableId);
    if (t != null) {
        t.parentNode.removeChild(t);
        var s = document.getElementById('pageNumSpan');
	if(s != null)
        s.parentNode.removeChild(s);
    }

    visa_init_call = false;
}

function headerInfo() {
    var tb = document.createElement('table');
    var headrow = document.createElement('tr');
    var headdata = document.createElement('th');

    tb.setAttribute('class', 'tg')
    tb.setAttribute('id', tableId)
    headdata.setAttribute('class', rowClass[3])
    headdata.setAttribute('colspan', LnT_total_colum)

    document.getElementById('visaTable').appendChild(tb);
    tb.appendChild(headrow)
    headrow.appendChild(headdata)

    headdata.innerHTML = 'Visa Details';
}

function columInfo() {
    var tb = document.getElementById(tableId);
    var columrow = document.createElement('tr');



    for (var i = 1; i <= LnT_total_colum; i++) {
        var columdata = document.createElement('th');
        columdata.setAttribute('class', rowClass[2])
        tb.appendChild(columrow)
        columrow.appendChild(columdata);
        columdata.style.width = colnWidth[i - 1];
        columdata.style.height = '30px';
        columdata.innerHTML = colunArr[i - 1]
        if (i == 10)
        columdata.innerHTML = colunArr[i - 1] + "<select id='clientFilter' onchange='showclientFilterData(this)' name='clientFilter'><option id='Lnt_client_0' value='All'>All</option></select>"



    }


}



function dataInfo(range, index) {



    //delete row data
    if (document.getElementById(tableId).childNodes.length > 2) {

        for (var k = 0; k < rowStored.length; k++) {
            var row = document.getElementById(rowStored[k]);
            row.parentNode.removeChild(row);
        }


    }
    rowStored = [];
    var tb = document.getElementById(tableId);



    if (pageEnableArea == Number(index + 1) && lastRowShow > 0 && pageEnableArea < pageNoShow) {
        var endRange = Number(range) + lastRowShow - 1;
    } else
        var endRange = Number(range) + Number(Lnt_total_in_row - 1)
    console.log(range + "  " + endRange);


    if (endRange > LnT_total_visa)
        endRange = LnT_total_visa;

    var rowcnt = 0;


    for (var i = range; i <= endRange; i++) {


        var columrow = document.createElement('tr');
        columrow.setAttribute('id', "LntRow_" + i);
        rowStored.push("LntRow_" + i)
        tb.appendChild(columrow)



        for (var j = 1; j <= LnT_total_colum; j++) {
            var columdata = document.createElement('th');
            if (i % 2 == 1)
                columdata.setAttribute('class', rowClass[0])
            else
                columdata.setAttribute('class', rowClass[1])
            columrow.appendChild(columdata)

		if(LnT_total_visa == max_visa)
            columdata.innerHTML = LntDB_Table[j - 1][i - 1];
	   else
{

          columdata.innerHTML = LntDB_Table[j - 1][clientDataArr[i-1]];

}

        }

    }


}

function LntFilter(c) {
   var ts = 1;
    var tmpArr = new Array();
    tmpArr.push(c[0])
    var opt = document.createElement('option');
    opt.setAttribute('value', c[0]);
   opt.setAttribute('id', 'Lnt_client_'+ts);

    opt.innerHTML = c[0];
    document.getElementById('clientFilter').appendChild(opt);


    for (var i = 0; i < max_visa; i++) {
        var val = c[i];
        if (tmpArr.indexOf(c[i]) == -1) {
            ts++;
            tmpArr.push(c[i]);
            var opt = document.createElement('option');
            opt.setAttribute('value', c[i]);
            opt.innerHTML = c[i];
opt.setAttribute('id', 'Lnt_client_'+ts);
            document.getElementById('clientFilter').appendChild(opt);

        }

        tmpArr.sort(function(a, b) {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        })

       
    }
}

function showPageNumber() {

var x = document.getElementById('pageNumSpan')
if(x != null)
x.parentNode.removeChild(x)



    var s = document.createElement('span');
    s.setAttribute('id', 'pageNumSpan');
    document.getElementById('visaTable').appendChild(s);

    if (Math.ceil(LnT_total_visa / Lnt_total_in_row) > pageNoShow) {
        var atag = document.createElement('a');
        atag.setAttribute('class', 'paginate');
        atag.setAttribute('tabindex', '0');
        atag.setAttribute('id', 'nav_prev');
        atag.style.width = '100px';
        atag.innerHTML = "Previous";
        s.appendChild(atag)
        atag.onclick = function(e) {

            if (nxt > 0) {

                if (remainPage > 0) {
                    for (var k = Number(nxt) * pageNoShow; k < (Number(nxt) * pageNoShow) + pageNoShow; k++) {

                        var pageNo = document.getElementById(storedPage.shift());
                        pageNo.parentNode.removeChild(pageNo);
                    }
                    remainPage = remainPage + pageNoShow;;
                } else {
                    remainPage = (LnT_total_visa / Lnt_total_in_row) % pageNoShow

                    for (var k = Number(nxt) * pageNoShow + 1; k < (Number(nxt) * pageNoShow) + (remainPage + 1); k++) {


                        var pageNo = document.getElementById(storedPage.shift());
                        pageNo.parentNode.removeChild(pageNo);
                    }


                }

                nxt--;

                for (var k = Number(nxt) * pageNoShow; k < (Number(nxt) * pageNoShow) + pageNoShow; k++) {
                    var atag = document.createElement('a');
                    atag.setAttribute('class', 'paginate');
                    atag.setAttribute('tabindex', '0');
                    atag.setAttribute('id', 'page_' + k)
                    storedPage.push('page_' + k);
                    atag.innerHTML = k + 1;
                    s.appendChild(atag);
                    atag.onclick = function(e) {

                        pageNoNav(this.id)
                    }


                }

            }
        }

    }

    for (var i = 0; i < pageEnableArea; i++) {
        var atag = document.createElement('a');
        atag.setAttribute('class', 'paginate');
        atag.setAttribute('tabindex', '0');
        atag.setAttribute('id', 'page_' + i)
        storedPage.push('page_' + i);
        atag.innerHTML = i + 1;
        s.appendChild(atag);
        atag.onclick = function(e) {

            pageNoNav(this.id)
        }
    }

    if (Math.ceil(LnT_total_visa / Lnt_total_in_row) > pageNoShow) {
        var atag = document.createElement('a');
        atag.setAttribute('class', 'paginate');
        atag.setAttribute('tabindex', '0');
        atag.setAttribute('id', 'nav_next');
        atag.style.width = '100px';
        atag.innerHTML = "Next";
        atag.style.left = '220px';
        atag.style.position = "absolute";
        s.appendChild(atag)
        atag.onclick = function() {
            if (remainPage > 0) {
                for (var k = Number(nxt) * pageNoShow; k < (Number(nxt) * pageNoShow) + pageNoShow; k++) {

                    var pageNo = document.getElementById(storedPage.shift());
                    pageNo.parentNode.removeChild(pageNo);
                }
                nxt++;


                storedPage = [];
                if (Math.floor(remainPage / pageNoShow) > 0) {

                    for (var k = Number(nxt) * pageNoShow; k < (Number(nxt) * pageNoShow) + pageNoShow; k++) {
                        var atag = document.createElement('a');
                        atag.setAttribute('class', 'paginate');
                        atag.setAttribute('tabindex', '0');
                        atag.setAttribute('id', 'page_' + k)
                        storedPage.push('page_' + k);
                        atag.innerHTML = k + 1;
                        s.appendChild(atag);
                        atag.onclick = function(e) {

                            pageNoNav(this.id)
                        }


                    }

                    remainPage = remainPage - pageNoShow;


                } else if (remainPage > 0) {


                    for (var k = Number(nxt) * pageNoShow; k < Number(nxt) * pageNoShow + remainPage; k++) {

                        var atag = document.createElement('a');
                        atag.setAttribute('class', 'paginate');
                        atag.setAttribute('tabindex', '0');
                        atag.setAttribute('id', 'page_' + k)
                        storedPage.push('page_' + k);
                        atag.innerHTML = k + 1;
                        s.appendChild(atag);
                        atag.onclick = function(e) {

                            pageNoNav(this.id)
                        }
                    }
                    remainPage = 0;




                }
            }

        }
    }

}


function pageNoNav(no) {
    var index = Number(no.split("_")[1]);
    dataInfo(index * Number(Lnt_total_in_row) + 1, index);

}

function showclientFilterData(e) {

    var tmpArr = new Array();
    var val = e.options[e.selectedIndex].value;
console.log(val)
    if (val == "All")
        LnT_total_visa = max_visa


    for (var i = 0; i < max_visa; i++) {
        if (val == LntDB_Table[9][i])
            tmpArr.push(i)
    }
    if (val != "All")
        LnT_total_visa = tmpArr.length;



LnTTable_Init()
clientDataArr = tmpArr;
addTable()
var s = document.getElementById('Lnt_client_'+e.selectedIndex);
s.setAttribute('selected',true);
}



function showTable() {

   removeRegistration()
 LnT_total_visa = max_visa;
   addTable()
    
}

function addTable()
{
 if (visa_init_call == false) {
        headerInfo();
        columInfo();
    }
   
    dataInfo(1, 1);
    pageNoNav("page_0")
    if (LnT_total_visa > Lnt_total_in_row && visa_init_call == false)
        showPageNumber();

    visa_init_call = true;
    LntFilter(LntDB_Table[9]);
}

