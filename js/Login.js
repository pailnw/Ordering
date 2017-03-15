function login(){
var username = document.getElementById("txt_user").value;
var password = document.getElementById("txt_pass").value;
//alert(username+password);
var xmlhttp = new XMLHttpRequest();
//var url = "http://www.reservetable.esy.es/build1_json.php";
var url = "http://www.ordering.esy.es/Login.php?data=" + encodeURIComponent(JSON.stringify({"username": username,"password" :password}));

xmlhttp.onreadystatechange=function() {
	console.log('xmlhttp.readyState'+xmlhttp.readyState);
	console.log('xmlhttp.status'+xmlhttp.status);
        myFunction(xmlhttp.responseText);
 
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(response) {

    var arr = JSON.parse(response);
    var i;
	var out = "";
	var checku= "";
	var checku2= "";
        var checku3="";
	for(i = 0; i < arr.length; i++) {
	checku=arr[i].m_user;
	checku2=arr[i].m_pass;
	out='<h5>'+"ชื่อ-นามสกุลพนักงาน : "+arr[i].m_fname+"  "+arr[i].m_lname+'</h5>';
         checku3=arr[i].m_id;
	}
	
if(username=="" && password==""){alert("Please enter Username or Password");
    $.mobile.changePage( "#login1", {
  transition: "pop",
  reverse: false,
  changeHash: false
});
}else	
if( checku == username && checku2 == password){
	  	document.getElementById("e_id").innerHTML=checku3;
                document.getElementById("NameFname").innerHTML=out;
		$.mobile.changePage( "#main", {
  transition: "pop",
  reverse: false,
  changeHash: false
});
}else  {
	alert("Username or Password incorrect");
$.mobile.changePage( "#login1", {
  transition: "pop",
  reverse: false,
  changeHash: false
});			
    }
    }

}
