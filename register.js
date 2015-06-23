

////// Create the XHR object.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}



// Helper method to parse the title tag from the response.
function getTitle(text) {
  return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.
function makeCorsRequest() {
// All HTML5 Rocks properties support CORS.
  var url = 'http://192.168.0.99:8087/?q=m_service/system/connect.json';

  var xhr = createCORSRequest('POST', url);
  if (!xhr) {

    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
   // alert('Response from CORS request to ' + url + ': ' + text);
  };

  xhr.onerror = function() {
  //  alert('Woops, there was an error making the request.');
  };
  
  xhr.send();

}





// Make the actual CORS request.
function makeCorsRequest_register(username,password,pin) {

 var name=username;var pass=password;

var d = document.getElementById("device_uuid");

$.post( "http://183.82.96.212:8080/?q=m_service/m_resources/register_device" , { username:encodeURIComponent(name),password:encodeURIComponent(pass),pin:encodeURIComponent(pin),device_uuid:encodeURIComponent(d.value)}, function( data ) {

	
     window.location='./log-in.html';
      return false;
      
}, "json").fail(function() {

var json ='{"result":"E-10001 :","message": "Invalid username or password"}';


	obj = JSON.parse(json);

document.getElementById("bootstrap").innerHTML = "<div class='alert alert-danger' role='alert'>"+obj.message+"</div>";
	

  });;
  return false;
}


function formValidation()  
{ 


    var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
        
        
document.getElementById("bootstrap").innerHTML = "<div class='alert alert-danger' role='alert'>Please Check Internet Connection Settings</div>";
        
               
                window.location='./first_screen.html';
                return true;
    }


var u = document.getElementById("username1");

var p = document.getElementById("password1");
var c = document.getElementById("pin1");


    
    
   
    	if(check(u.value))
    	{
    		
    			if(checkpassword(p.value))
    			{

    				if(checkloginpin(c.value))
    					{
    				var login_verify=makeCorsRequest_register(u.value,p.value,c.value);
    				if(login_verify)
    					{return true;}
    					else{ return false;}
    				}
    				
    				else
    				{
    					return false;
    				}
    			}
    			else
    			{
    				return false;
    			}
    	}
    			else
				{
					return false;
				}
			
    			
    		
    		
    	
    
    
    
















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

return true;
}
else
{


document.getElementById("bootstrap").innerHTML = "<div class='alert alert-danger' role='alert'>Password is Required</div>";

return false;
}
}

function checkloginpin(loginpin1) 
{

var loginpin = /^\d{4}$/; 

if (loginpin.test(loginpin1)) 
{

return true;
}
else
{


document.getElementById("bootstrap").innerHTML = "<div class='alert alert-danger' role='alert'>Device Log-In Pin must contain 4-digits</div>";

return false;
}
}
}









