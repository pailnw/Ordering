function addMenu(getOrderID){

var Search = document.getElementById("search").value;
var xmlhttp = new XMLHttpRequest();
var orderId = getOrderID;

var url = "http://www.ordering.esy.es/json.php?data=" + encodeURIComponent(JSON.stringify({"search": Search}));

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
  var tb ="";
  var orID = orderId;
  var mnID = "";
  
	      for(i = 0; i < arr.length; i++) {
			  mnID=arr[i].Mn_ID;
	out+='<div id='+arr[i].Mn_ID+'>'; 
        out+='</div>'; 
        out+='<a href="#" class="ui-btn ui-corner-all ui-shadow" onclick="addCount('+orID+','+mnID+')">';
        out+='<h4>'+'<p align = "left">'+arr[i].Mn_Name+" "+" ราคา "+arr[i].Mn_Price+'</p></h4></a>';
	
    }
    
               // document.getElementById("oid").value = orderId;
				    //document.getElementById("r_idEdit").value=orderId;
	  	document.getElementById("listfoodpage4").innerHTML = out;
                document.getElementById("orid").innerHTML = orID;
		$.mobile.changePage( "#addMenu1", {
  transition: "pop",
  reverse: false,
  changeHash: false
});
}

}


function addMenuSearch(){
var Search = document.getElementById("search").value;
var xmlhttp = new XMLHttpRequest();
//var orderId = document.getElementById("orid").value;

var url = "http://www.ordering.esy.es/json.php?data=" + encodeURIComponent(JSON.stringify({"search": Search}));

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
  var tb ="";

  var mnID = "";
 
	      for(i = 0; i < arr.length; i++) {
			  mnID=arr[i].Mn_ID;
	out+='<div id='+arr[i].Mn_ID+'>'; 
        out+='</div>'; 
        out+='<a href="#" class="ui-btn ui-corner-all ui-shadow" onclick="addCount2('+mnID+')">';
        out+='<h4>'+'<p align = "left">'+arr[i].Mn_Name+" "+" ราคา "+arr[i].Mn_Price+'</p></h4></a>';
	
    }

	  	document.getElementById("listfoodpage4").innerHTML = out;
               // document.getElementById("test").innerHTML = orID;
		$.mobile.changePage( "#addMenu1", {
  transition: "pop",
  reverse: false,
  changeHash: false
});
}

}


function changePage(){
    $.mobile.changePage( "#main", {
  transition: "pop",
  reverse: false,
  changeHash: false
});
    
    
}