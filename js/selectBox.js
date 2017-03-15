function showMonth(){
    var url = "http://www.ordering.esy.es/queryYear.php?data=" + encodeURIComponent(JSON.stringify({}));
var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        console.log('xmlhttp.readyState' + xmlhttp.readyState);
        console.log('xmlhttp.status' + xmlhttp.status);
        // if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        myFunction(xmlhttp.responseText);
        //}
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function myFunction(response) {

        var arr = JSON.parse(response);
        var i;
        var out = "";
        var out2 = "";

   out+='<select name="selectmonth" id="selectmonth">';

        for (i = 0; i < arr.length; i++) {
            out+='<option value='+arr[i].MONTHS+'>'+arr[i].MONTHS+'</option>';

        }
        out+= '</select>';
        out+='<select name="selectyear" id="selectyear">';
        for (i = 0; i < arr.length; i++) {
            out+='<option value='+arr[i].YEARS+'>'+arr[i].YEARS+'</option>';

        }
        out+= '</select>';

        document.getElementById("test1").innerHTML = out;

        $.mobile.changePage("#showMonth", {
            transition: "pop",
            reverse: false,
            changeHash: false


        });
    }
    
}

function showDetail(){
    var years = document.getElementById("selectyear").value;
    var months = document.getElementById("selectmonth").value;
    var xmlhttp = new XMLHttpRequest();
    var url = "http://www.ordering.esy.es/queryData.php?data=" + encodeURIComponent(JSON.stringify({"months": months,
        "years": years}));

    xmlhttp.onreadystatechange = function () {
        console.log('xmlhttp.readyState' + xmlhttp.readyState);
        console.log('xmlhttp.status' + xmlhttp.status);
        // if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        myFunction(xmlhttp.responseText);
        //}
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function myFunction(response) {

        var arr = JSON.parse(response);
        var i;
        var out = "";
        var getOrderID = "";


        for (i = 0; i < arr.length; i++) {
            getOrderID = arr[i].O_ID;
            out += '<div id=' + arr[i].O_ID + '>';
            out += '</div>';

            out += '<a href="#" class="ui-btn" onclick="addMenu(' + getOrderID + ')">';
            out += '<h4>' + "เลขใบสั่ง " + arr[i].O_ID + " " + " โต๊ะที่ " + arr[i].O_Table + '</h4></a>';
        }
        document.getElementById("listfoodpage4").innerHTML = out;

        $.mobile.changePage("#main", {
            transition: "pop",
            reverse: false,
            changeHash: false


        });
    }    
    
    
}
//เมนูแนะนำ
function editFirstPage(){
        $.mobile.changePage("#menuEditFirstPage", {
            transition: "pop",
            reverse: false,
            changeHash: false
        });
}

function addMenuRecommended(){
var xmlhttp = new XMLHttpRequest();

var url = "http://www.ordering.esy.es/json.php?data=" + encodeURIComponent(JSON.stringify({}));

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
var mnID ="";

  
	      for(i = 0; i < arr.length; i++) {
		mnID=arr[i].Mn_ID;	 
	out+='<div id='+arr[i].Mn_ID+'>'; 
        out+='</div>'; 
        out+='<a href="#" class="ui-btn ui-corner-all ui-shadow" onclick="inputEditPage('+mnID+')">';
        out+='<h4>'+'<p align = "left">'+arr[i].Mn_Name+" "+" ราคา "+arr[i].Mn_Price+'</p></h4></a>';
	
    }
    
               // document.getElementById("oid").value = orderId;
				    //document.getElementById("r_idEdit").value=orderId;
	  	document.getElementById("showMenuEdit1").innerHTML = out;
              
		$.mobile.changePage( "#showMenuEditFirstPage", {
  transition: "pop",
  reverse: false,
  changeHash: false
});
}
}


function inputEditPage(mnID) {
    var MnEdit2 = mnID;

    var xmlhttp = new XMLHttpRequest();

    var url = "http://www.ordering.esy.es/editPageRecommend.php?data=" + encodeURIComponent(JSON.stringify({"MnEdit2": MnEdit2}));

    xmlhttp.onreadystatechange = function () {
        console.log('xmlhttp.readyState' + xmlhttp.readyState);
        console.log('xmlhttp.status' + xmlhttp.status);

        myFunction(xmlhttp.responseText);
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function myFunction(response) {
        var arr = JSON.parse(response);
        var i;
        var Mn_Id = "";
        
        var Mn_Name = "";
        
        for (i = 0; i < arr.length; i++) {
            Mn_Id = arr[i].Mn_ID;
            Mn_Name = "<h4>ชื่ออาหาร" + " : " + arr[i].Mn_Name + "</h4>";
            
        }

        document.getElementById("MenuID2").innerHTML = Mn_Id;
        document.getElementById("NameMn2").innerHTML = Mn_Name;       
        $.mobile.changePage("#inputEdit2", {
            transition: "pop",
            reverse: false,
            changeHash: false
        });
    }
}


function editRecommend(){
    var xmlhttp = new XMLHttpRequest();
    var Mn_id = document.getElementById("MenuID2").innerHTML;
    var details = document.getElementById("detailIN2").value;
var url = "http://www.ordering.esy.es/recommendMenu.php?data=" + encodeURIComponent(JSON.stringify({"Mn_id":Mn_id,"details":details}));

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
var mnID ="";

  
	      for(i = 0; i < arr.length; i++) {
		mnID=arr[i].Mn_ID;	 
	out+='<div id='+arr[i].Mn_ID+'>'; 
        out+='</div>'; 
        out+='<a href="#" class="ui-btn ui-corner-all ui-shadow" onclick="inputEditPage('+mnID+')">';
        out+='<h4>'+'<p align = "left">'+arr[i].Mn_Name+" "+" ราคา "+arr[i].Mn_Price+'</p></h4></a>';
	
    }
    
	  	document.getElementById("showMenuEdit1").innerHTML = out;
              
		$.mobile.changePage( "#showMenuEditFirstPage", {
  transition: "pop",
  reverse: false,
  changeHash: false
});
}
}

function showRecommDel(){
    var xmlhttp = new XMLHttpRequest();
    var url = "http://www.ordering.esy.es/showRecomm.php?data=" + encodeURIComponent(JSON.stringify({}));

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
var mnID ="";

  
	      for(i = 0; i < arr.length; i++) {
		mnID=arr[i].Mn_ID;	 
	out+='<div id='+arr[i].Mn_ID+'>'; 
        out+='</div>'; 
        out+='<a href="#" class="ui-btn ui-corner-all ui-shadow" onclick="delRecomm('+mnID+')">';
        out+='<h4>'+'<p align = "left">'+arr[i].Mn_Name+'</p></h4>';
	out+='<h5><p align = "left">'+"รายละเอียด :"+arr[i].Detail+'</p></h5>';
        out+='</a>';
    }
    
	  	document.getElementById("showMenuReDel").innerHTML = out;
              
		$.mobile.changePage( "#inputEdit3", {
  transition: "pop",
  reverse: false,
  changeHash: false
});
}
}
    
function delRecomm(mnID) {
    var MnEdit2 = mnID;

    var xmlhttp = new XMLHttpRequest();

    var url = "http://www.ordering.esy.es/showRecomm.php?data=" + encodeURIComponent(JSON.stringify({"MnEdit2": MnEdit2}));

    xmlhttp.onreadystatechange = function () {
        console.log('xmlhttp.readyState' + xmlhttp.readyState);
        console.log('xmlhttp.status' + xmlhttp.status);

        myFunction(xmlhttp.responseText);
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function myFunction(response) {
        var arr = JSON.parse(response);
        var i;
        var Mn_Id = "";
        
        var Mn_Name = "";
        
        for (i = 0; i < arr.length; i++) {
            Mn_Id = arr[i].Mn_id;
            Mn_Name = "<h4>ชื่ออาหาร" + " : " + arr[i].Mn_Name + "</h4>";
            
        }

        document.getElementById("MenuID3").innerHTML = Mn_Id;
        document.getElementById("NameMn3").innerHTML = Mn_Name;       
        $.mobile.changePage("#inputEdit4", {
            transition: "pop",
            reverse: false,
            changeHash: false
        });
    }
}
function deleteRecomm(){
    var xmlhttp = new XMLHttpRequest();
    var Mn_id = document.getElementById("MenuID3").innerHTML;
    
var url = "http://www.ordering.esy.es/delRecommMenu.php?data=" + encodeURIComponent(JSON.stringify({"Mn_id":Mn_id}));

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
var mnID ="";

  
	      for(i = 0; i < arr.length; i++) {
		mnID=arr[i].Mn_ID;	 
	out+='<div id='+arr[i].Mn_ID+'>'; 
        out+='</div>'; 
        out+='<a href="#" class="ui-btn ui-corner-all ui-shadow" onclick="delRecomm('+mnID+')">';
        out+='<h4>'+'<p align = "left">'+arr[i].Mn_Name+'</p></h4>';
	out+='<h5><p align = "left">'+"รายละเอียด :"+arr[i].Detail+'</p></h5>';
        out+='</a>';
	
    }
    
	  	document.getElementById("showMenuReDel").innerHTML = out;
              
		$.mobile.changePage( "#inputEdit3", {
  transition: "pop",
  reverse: false,
  changeHash: false
});
}
    
}

function showRecommend(){
    
    var xmlhttp = new XMLHttpRequest();
  
    
var url = "http://www.ordering.esy.es/delRecommMenu.php?data=" + encodeURIComponent(JSON.stringify({"Mn_id":Mn_id}));

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
var mnID ="";

  
	      for(i = 0; i < arr.length; i++) {
		mnID=arr[i].Mn_ID;	 
	out+='<div id='+arr[i].Mn_ID+'>'; 
        out+='</div>'; 
        out+='<a href="#" class="ui-btn ui-corner-all ui-shadow" onclick="delRecomm('+mnID+')">';
        out+='<h4>'+'<p align = "left">'+arr[i].Mn_Name+'</p></h4>';
	out+='<h5><p align = "left">'+"รายละเอียด :"+arr[i].Detail+'</p></h5>';
        out+='</a>';
	
    }
    
	  	document.getElementById("showMenuReDel").innerHTML = out;
              
		$.mobile.changePage( "#inputEdit3", {
  transition: "pop",
  reverse: false,
  changeHash: false
});
}
    
}
