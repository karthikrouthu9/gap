
function check(username) 
{






if (username == "") 
{
document.getElementById("bootstrap").innerHTML = "<div class='alert alert-danger' role='alert'>Username is Required</div>";

return false;
}
else
{
	
return true;
}
}



  
function checkpassword(password1) 
{


if (password1) 
{

			var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
       
        
//document.getElementById("bootstrap").innerHTML = "<div class='alert alert-danger' role='alert'>Please Check Internet Connection Settings</div>";
  //$.post( "http://192.168.0.99:8087/my_drupal_site/?q=my_services/m_resources/register_device_with_another_username" , { device_uuid:device_test}, function( data ) {
 
       var json ='{"result":"E-10003 :","message": "Please Check Internet Connection Settings"}';

	obj = JSON.parse(json);

	            window.location='./first_screen.html';
                return false;
    }
    else
    {

    
   // document.getElementById("bootstrap").innerHTML = "<div class='alert alert-info' role='alert'>Your device is connected to Internet</div>";
    
       //return false;
        
       
     }
 //$.post( "http://192.168.0.99:8087/my_drupal_site/?q=my_services/m_resources/register_device_with_another_username" , { device_uuid:device_test}, function( data ) {
     	
	var json ='{"result":"I-20001 :" ,"message": "New User registered Successfully.","result_id":"I-20002"}';
//document.getElementById("bootstrap").innerHTML = "<div class='alert alert-success' role='alert'>Successfully New User Registered</div>";

	obj = JSON.parse(json);



bootbox.dialog({
  message: obj.message,
  title: "Message",
  buttons: {
    success: {
      label: "OK",
      className: "btn-success",
      callback: function() {
  
     window.location='./log-in.html';
    
      }
    
    }
    
    
  }
});

  
}
else
{
document.getElementById("bootstrap").innerHTML = "<div class='alert alert-danger' role='alert'>Password is Required</div>";


return false;
}
}



function formValidation()  
{ 


var u = document.getElementById("username1");

var p = document.getElementById("password1");


    
    
   
    	if(check(u.value))
    	{
    		
    			if(checkpassword(p.value))
    			{
    

					return true;
    			}
    				else
    			{
    				return false;
    			}
    	
    			
			



}
return false;






}