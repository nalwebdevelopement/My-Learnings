<script type="text/javascript">
function valid()
{
var pin_code=document.getElementById("pin");
var user_mobile=document.getElementById("phone");
var user_id=document.getElementById("email");
var pat1=/^\d{6}$/;
var pattern=/^\d{10}$/;
var filter=/^([a-z A-Z 0-9 _\.\-])+\@(([a-z A-Z 0-9\-])+\.)+([a-z A-z 0-9]{3,3})+$/;
if(!filter.test(user_id.value))
{
alert("Email is in www.gmail.com format");
user_id.focus();
return false;
}
if(!pattern.test(user_mobile.value))
{
alert("Phone nubmer is in 0123456789 format ");
user_mobile.focus();
return false;
}
if(!pat1.test(pin_code.value))
{
alert("Pin code should be 6 digits ");
pin_code.focus();
return false;
}
}
</script>