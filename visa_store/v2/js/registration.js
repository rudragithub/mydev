
            function registration(id, w, h, t, l) {

removeTable()
var id = document.getElementById('LnT_Registration')
createLayOut();
               function createLayOut()
{
		id.innerHTML = "<div id='registerLnt' class='registercla'><div style='background-color:#006EDC;height:30px;line-height:30px;padding:-5px;margin:-5px;text-align:center;color:white;vertical-align:center;'>New Registration</div><form method='post' name='registerform' action='' class='login' onSubmit='JavaScript:checkRegistration()'><p><label for='register'>PS No</label><input type='text' name='psno' size='35' placeholder='ps number' value=''></p><p><label for='register'>Name</label><input type='text' name='username' placeholder='' value='' size='35'></p><p><label for='register'>Name</label><input type='text' name='username' placeholder='' value='' size='35'></p><p><label for='register'>Status</label><select name='Status'><option></option><option value=''>Available</option><option value=''>Not Available</option></select></p><p><label for='register'>Base Account</label><input type='text' name='BaseAccount' placeholder='' value='' size='35'></p><p><label for='register'>Base DH</label><input type='text' name='BaseDH' placeholder='' value='' size='35'></p><p><label for='register'>Primary Domain</label><input type='text' name='PrimaryDomain' placeholder='' value='' size='35'></p><p><label for='register'>Additional Skills</label><input type='text' name='AdditionalSkills' placeholder='' value='' size='35' ></p><p><label for='register'>Primary Skill</label><input type='text' name='PrimarySkill' placeholder='' value='' size='35'></p><p><label for='register'>Selected for Client</label><input type='text' name='SelectedforClient' placeholder='' value='' size='35'></p><p><label for='register'>Target Onboarding date</label><select name='month'><option value=''>01</option><option value=''>02</option><option value=''>03</option><option value=''>04</option><option value=''>05</option><option value=''>06</option><option value=''>07</option><option value=''>08</option><option value=''>09</option><option value=''>10</option><option value=''>11</option><option value=''>12</option><option value=''>13</option><option value=''>14</option><option value=''>15</option><option value=''>16</option><option value=''>17</option><option value=''>18</option><option value=''>19</option><option value=''>20</option><option value=''>21</option><option value=''>22</option><option value=''>23</option><option value=''>24</option><option value=''>25</option><option value=''>26</option><option value=''>27</option><option value=''>28</option><option value=''>29</option><option value=''>30</option><option value=''>31</option></select><select name='month'><option value=''>01</option><option value=''>02</option><option value=''>03</option><option value=''>04</option><option value=''>05</option><option value=''>06</option><option value=''>07</option><option value=''>08</option><option value=''>10</option><option value=''>11</option><option value=''>12</option></select><select name='year'><option value=''>2014</option><option value=''>2015</option><option value=''>2016</option><option value=''>2017</option><option value=''>2018</option><option value=''>2019</option><option value=''>2020</option><option value=''>2021</option><option value=''>2022</option><option value=''>2023</option><option value=''>2024</option><option value=''>2025</option><option value=''>2026</option></select></p><p><label for='register'>Target DH</label><input type='text' name='TargetDH' placeholder='' value='' size='35'></p><p><label for='register'>Validity</label><select name='date' ><option value=''>01</option><option value=''>02</option><option value=''>03</option><option value=''>04</option><option value=''>05</option><option value=''>06</option><option value=''>07</option><option value=''>08</option><option value=''>09</option><option value=''>10</option><option value=''>11</option><option value=''>12</option><option value=''>13</option><option value=''>14</option><option value=''>15</option><option value=''>16</option><option value=''>17</option><option value=''>18</option><option value=''>19</option><option value=''>20</option><option value=''>21</option><option value=''>22</option><option value=''>23</option><option value=''>24</option><option value=''>25</option><option value=''>26</option><option value=''>27</option><option value=''>28</option><option value=''>29</option><option value=''>30</option><option value=''>31</option></select><select name='month'><option value=''>01</option><option value=''>02</option><option value=''>03</option><option value=''>04</option><option value=''>05</option><option value=''>06</option><option value=''>07</option><option value=''>08</option><option value=''>10</option><option value=''>11</option><option value=''>12</option></select><select name='year'><option value=''>2014</option><option value=''>2015</option><option value=''>2016</option><option value=''>2017</option><option value=''>2018</option><option value=''>2019</option><option value=''>2020</option><option value=''>2021</option><option value=''>2022</option><option value=''>2023</option><option value=''>2024</option><option value=''>2025</option><option value=''>2026</option></select></p><div style='position:absolute;left:174px;bottom:20px;'><input type='submit' value='Submit'></div></form></div>"
}
		
}

function removeRegistration()
{
var t = document.getElementById('registerLnt');
if(t != null)
t.parentNode.removeChild(t);
}

function checkRegistration()
{
  alert("Successfully registered");

}
           