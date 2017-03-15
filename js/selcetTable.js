//ไปหน้าเปิดโต๊ะ
function addTabel() {
    var e_id = document.getElementById("e_id").innerHTML;
    document.getElementById("e_id1").innerHTML = e_id;
    $.mobile.changePage("#addTable", {
        transition: "pop",
        reverse: false,
        changeHash: false
    });
}

//เพิ่มโต๊ะ
function AddTableToDB() {
    var tableID = document.getElementById("selectTable").value;
    var e_id = document.getElementById("e_id").innerHTML;
    var xmlhttp = new XMLHttpRequest();
    var url = "http://www.ordering.esy.es/addBill.php?data=" + encodeURIComponent(JSON.stringify({"tableID": tableID,
        "m_id": e_id}));

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

//โชว์ โต๊ะที่เปิดไว้
function showOrder() {
    var xmlhttp = new XMLHttpRequest();
    var url = "http://www.ordering.esy.es/showOrder.php?data=" + encodeURIComponent(JSON.stringify({}));
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
        var out = "";
        var tb = "";
        var oid = "";
        var getOrderID = "";

        for (i = 0; i < arr.length; i++) {

            getOrderID = arr[i].O_ID;

            out += '<a href="#" class="ui-shadow ui-btn ui-corner-all" onclick="addMenu(' + getOrderID + ')">';
            out += '<h4>' + "เลขใบสั่ง " + arr[i].O_ID + " " + " โต๊ะที่ " + arr[i].O_Table + '</h4></a>';

        }
        document.getElementById("listfoodpage3").innerHTML = out;
        $.mobile.changePage("#addMenu", {
            transition: "pop",
            reverse: false,
            changeHash: false
        });
    }

}

//ใส่จำนวนที่ต้องการ
function addCount(orID, mnID) {

    var O_ID = orID;
    var Mn_id = mnID;
    var OD_total = prompt("ใส่จำนวนที่ต้องการ :", "");
    var xmlhttp = new XMLHttpRequest();
    var orderId = document.getElementById("orid").value;

    var url = "http://www.ordering.esy.es/addOrder.php?data=" + encodeURIComponent(JSON.stringify({"O_ID": O_ID,
        "Mn_id": Mn_id, "OD_total": OD_total}));

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
        var somePrice = 0;
        var orid = "";
        var j = 0;
        out += '<table data-role="table" id="movie-table-custom" data-mode="reflow" class="movie-list ui-responsive" style="width:100%" boder=' + '1' + ' align=' + 'center' + '>' + '<thead>' + '<tr>' +
                '<th data-priority="1" bgColor=' + '#7678b5' + '>' + '<font color="white">' + 'ลำดับ' + '</font>' + '</th>' +
                      '<th style="width:40%" bgColor=' + '#7678b5' + '>' + '<font color="white">' + 'ชื่อ' + '</font>' + '</th>' + '<th data-priority="2" bgColor=' + '#7678b5' + '>' + '<font color="white">' + 'จำนวน' + '</font>' + '</th>' + '<th data-priority="2" bgColor=' + '#7678b5' + '>' + '<font color="white">' + 'ราคา' + '</font>' + '</th>' + '</tr>' +
                  '</thead>' + '<tbody>';		 
        for (i = 0; i < arr.length; i++) {
            //i++;
            j = j + 1;
            out += '<tr>';
            out += '<th>' + j + '</th>';
            out += '<td align=left>' + arr[i].Mn_Name + '</td>';
                  		out += '<td align=center>' + arr[i].OD_total + '</td>';
                  		out += '<td align=center>' + arr[i].TotalPrice + '</td>';
                	out += '</tr>';
            orid = arr[i].O_ID;
            somePrice = parseInt(arr[i].TotalPrice) + somePrice;

        }
        var someTotal = somePrice.toString();

        out += '<td align=left>' + "" + '</td>';
              		out += '<td align=center>' + "" + '</td>';
        out += '<td align=center>' + "ราคารวมทั้งหมด" + '</td>';
              		out += '<td align=center>' + someTotal + " บาท" + '</td>';
        out += '</tbody>' + '</table>';
        document.getElementById("sumMenu").innerHTML = out;
        
    }
}
//for serch
function addCount2(mnID) {

    var Mn_id = mnID;
    var O_ID = document.getElementById("orid").innerHTML;
    var OD_total = prompt("ใส่จำนวนที่ต้องการ :", "");
    var xmlhttp = new XMLHttpRequest();

    var url = "http://www.ordering.esy.es/addOrder.php?data=" + encodeURIComponent(JSON.stringify({"O_ID": O_ID,
        "Mn_id": Mn_id, "OD_total": OD_total}));



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
        var somePrice = 0;
        var orid = "";
        var j = 0;
        out += '<table data-role="table" id="movie-table-custom" data-mode="reflow" class="movie-list ui-responsive" style="width:100%" boder=' + '1' + ' align=' + 'center' + '>' + '<thead>' + '<tr>' +
                '<th data-priority="1" bgColor=' + '#7678b5' + '>' + '<font color="white">' + 'ลำดับ' + '</font>' + '</th>' +
                      '<th style="width:40%" bgColor=' + '#7678b5' + '>' + '<font color="white">' + 'ชื่อ' + '</font>' + '</th>' + '<th data-priority="2" bgColor=' + '#7678b5' + '>' + '<font color="white">' + 'จำนวน' + '</font>' + '</th>' + '<th data-priority="2" bgColor=' + '#7678b5' + '>' + '<font color="white">' + 'ราคา' + '</font>' + '</th>' + '</tr>' +
                  '</thead>' + '<tbody>';		 
        for (i = 0; i < arr.length; i++) {
            //i++;
            j = j + 1;
            out += '<tr>';
            out += '<th>' + j + '</th>';
            out += '<td align=left>' + arr[i].Mn_Name + '</td>';
                  		out += '<td align=center>' + arr[i].OD_total + '</td>';
                  		out += '<td align=center>' + arr[i].TotalPrice + '</td>';
                	out += '</tr>';
            orid = arr[i].O_ID;
            somePrice = parseInt(arr[i].TotalPrice) + somePrice;

        }
        var someTotal = somePrice.toString();

        out += '<td align=left>' + "" + '</td>';
              		out += '<td align=center>' + "" + '</td>';
        out += '<td align=center>' + "ราคารวมทั้งหมด" + '</td>';
              		out += '<td align=center>' + someTotal + " บาท" + '</td>';
        out += '</tbody>' + '</table>';
        document.getElementById("sumMenu").innerHTML = out;
        
    }
}
//vvvvv
function showOrderEdit() {

    var xmlhttp = new XMLHttpRequest();

    var url = "http://www.ordering.esy.es/showOrder.php?data=" + encodeURIComponent(JSON.stringify({}));

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
        var out = "";
        var getOrderID ="";
        for (i = 0; i < arr.length; i++) {

            getOrderID = arr[i].O_ID;

            out += '<a href="#" class="ui-shadow ui-btn ui-corner-all" onclick="editMenu(' + getOrderID + ')">';
            out += '<h4>' + "เลขใบสั่ง " + arr[i].O_ID + " " + " โต๊ะที่ " + arr[i].O_Table + '</h4></a>';

           
        }

        document.getElementById("listfoodpage5").innerHTML = out;

        $.mobile.changePage("#addMenu2", {
            transition: "pop",
            reverse: false,
            changeHash: false
        });
    }

}

//แก้ไขรายการอาหาร
function editMenu(getOrderID) {

    var Search = "";
    var xmlhttp = new XMLHttpRequest();
    var orderId = getOrderID;

    var url = "http://www.ordering.esy.es/showOrderDtail.php?data=" + encodeURIComponent(JSON.stringify({"": Search, "O_ID": orderId}));

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
        var out = "";
        var MnidE1 = "";
        var OidE1 = "";
        for (i = 0; i < arr.length; i++) {
            MnidE1 = arr[i].Mn_id;
            OidE1 = arr[i].O_ID;
            out += '<a href="#" class="ui-btn ui-corner-all" onclick="inputEdit(' + MnidE1 + ',' + OidE1 + ')">' + '<h4>' + " " + arr[i].Mn_Name + " จำนวน " + arr[i].OD_total + '</h4>' + '</a>';
        }
        document.getElementById("editMenu").innerHTML = out;


        $.mobile.changePage("#editMenu1", {
            transition: "pop",
            reverse: false,
            changeHash: false
        });
    }

}
//หน้าแก้ไข
function inputEdit(MnidE1, OidE1) {
    var MnEdit2 = MnidE1;
    var OEdit2 = OidE1;
    var xmlhttp = new XMLHttpRequest();

    var url = "http://www.ordering.esy.es/editPage.php?data=" + encodeURIComponent(JSON.stringify({"OEdit2": OEdit2, "MnEdit2": MnEdit2}));

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
        var O_ID = "";
        var Mn_Name = "";
        var Mn_Total = "";
        for (i = 0; i < arr.length; i++) {
            Mn_Id = arr[i].Mn_id;
            O_ID = arr[i].O_ID;
            Mn_Name = "<h4>ชื่ออาหาร" + " : " + arr[i].Mn_Name + "</h4>";
            Mn_Total = "<h4>จำนวนปัจจุบัน" + " : " + arr[i].OD_total + " " + "จาน</h4>";
        }

        document.getElementById("MenuID1").innerHTML = Mn_Id;
        document.getElementById("Orid1").innerHTML = O_ID;
        document.getElementById("NameMn").innerHTML = Mn_Name;
        document.getElementById("TotalMn").innerHTML = Mn_Total;
        $.mobile.changePage("#inputEdits", {
            transition: "pop",
            reverse: false,
            changeHash: false
        });
    }
}
//แก้ไขข้อมูลรายการอาหาร
function editMenu2() {
    var EmenuID = document.getElementById("MenuID1").innerHTML;
    var EorID = document.getElementById("Orid1").innerHTML;
    var EorID1 = document.getElementById("Orid1").innerHTML;
    var NOD_total = document.getElementById("numMnTotal").value;
    var xmlhttp = new XMLHttpRequest();
    var url = "http://www.ordering.esy.es/editMenu.php?data=" + encodeURIComponent(JSON.stringify({"EorID": EorID, "EmenuID": EmenuID, "NOD_total": NOD_total, "EorID1": EorID1}));
    if (NOD_total == "") {
        alert("กรุณาใส่จำนวนอาหารที่ต้องการ")
    } else {

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
            var out = "";
            var MnidE1 = "";
            var OidE1 = "";
        var Mn_Id = "";
        var O_ID = "";
            for (i = 0; i < arr.length; i++) {
                MnidE1 = arr[i].Mn_id;
                OidE1 = arr[i].O_ID;
        
           
                out += '<a href="#" class="ui-btn ui-corner-all" onclick="inputEdit(' + MnidE1 + ',' + OidE1 + ')">' + '<h4>' + " " + arr[i].Mn_Name + " จำนวน " + arr[i].OD_total + '</h4>' + '</a>';

            }

document.getElementById("showRefresh").innerHTML = out;

//        document.getElementById("NameMn").innerHTML = Mn_Name;
//        document.getElementById("TotalMn").innerHTML = Mn_Total;
            $.mobile.changePage("#editMenu12", {
                transition: "pop",
                reverse: false,
                changeHash: false
            });

            
        }
    }
}
//ลบรายการอาหร
function deleteMenu() {
    var EmenuID = document.getElementById("MenuID1").innerHTML;
    var EorID = document.getElementById("Orid1").innerHTML;
    var EorID1 = document.getElementById("Orid1").innerHTML;
    var NOD_total = document.getElementById("numMnTotal").value;
    var xmlhttp = new XMLHttpRequest();
    var url = "http://www.ordering.esy.es/deleteMenu.php?data=" + encodeURIComponent(JSON.stringify({"EorID": EorID, "EmenuID": EmenuID, "NOD_total": NOD_total, "EorID1": EorID1}));


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
        var out = "";
        var MnidE1 = "";
        var OidE1 = "";

        for (i = 0; i < arr.length; i++) {
            MnidE1 = arr[i].Mn_id;
            OidE1 = arr[i].O_ID;

            out += '<a href="#" class="ui-btn ui-corner-all" onclick="inputEdit(' + MnidE1 + ',' + OidE1 + ')">' + '<h4>' + " " + arr[i].Mn_Name + " จำนวน " + arr[i].OD_total + '</h4>' + '</a>';

        }

        $.mobile.changePage("#editMenu12", {
            transition: "pop",
            reverse: false,
            changeHash: false
        });

        document.getElementById("showRefresh").innerHTML = out;
    }
}
//ปุ่มCacle for delete menu
function btnCancle() {
    var MnEdit2 = document.getElementById("MenuID1").innerHTML;
    var OEdit2 = document.getElementById("Orid1").innerHTML;
    var xmlhttp = new XMLHttpRequest();

    var url = "http://www.ordering.esy.es/editPage.php?data=" + encodeURIComponent(JSON.stringify({"OEdit2": OEdit2, "MnEdit2": MnEdit2}));

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
        var O_ID = "";
        var Mn_Name = "";
        var Mn_Total = "";
        for (i = 0; i < arr.length; i++) {
            Mn_Id = arr[i].Mn_id;
            O_ID = arr[i].O_ID;
            Mn_Name = "<h4>ชื่ออาหาร" + " : " + arr[i].Mn_Name + "</h4>";
            Mn_Total = "<h4>จำนวนปัจจุบัน" + " : " + arr[i].OD_total + " " + "จาน</h4>";
        }

        document.getElementById("MenuID1").innerHTML = Mn_Id;
        document.getElementById("Orid1").innerHTML = O_ID;
        document.getElementById("NameMn").innerHTML = Mn_Name;
        document.getElementById("TotalMn").innerHTML = Mn_Total;
        $.mobile.changePage("#inputEdits", {
            transition: "pop",
            reverse: false,
            changeHash: false
        });
    }
}
//โชว์ bill
function showBill() {

    var xmlhttp = new XMLHttpRequest();

    var url = "http://www.ordering.esy.es/showBill.php?data=" + encodeURIComponent(JSON.stringify({}));

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
        var out = "";
        var getBillID = "";

        for (i = 0; i < arr.length; i++) {
            out += '<div id=' + arr[i].O_ID + '>';
            getBillID = arr[i].O_ID;
            out += '</div>';

            out += '<a href="#" class="ui-shadow ui-btn ui-corner-all" onclick="showBillDetail(' + getBillID + ')">';
            out += '<h4>' + "เลขใบสั่ง " + arr[i].O_ID + " " + " โต๊ะที่ " + arr[i].O_Table + '</h4></a>';


        }

        document.getElementById("showBill1").innerHTML = out;

        $.mobile.changePage("#getBill", {
            transition: "pop",
            reverse: false,
            changeHash: false
        });
    }
}
//โชว์ Bill Detail
function showBillDetail(getBillID) {
    var billID = getBillID;
    var xmlhttp = new XMLHttpRequest();

    var url = "http://www.ordering.esy.es/showBillDetail.php?data=" + encodeURIComponent(JSON.stringify({"O_ID": billID}));

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
        var out = "";
        var somePrice = 0;
        var orid = "";
        var j = 0;
        out += '<table data-role="table" id="movie-table-custom" data-mode="reflow" class="movie-list ui-responsive" style="width:100%" boder=' + '1' + ' align=' + 'center' + '>' + '<thead>' + '<tr>' +
                '<th data-priority="1" bgColor=' + '#7678b5' + '>' + '<font color="white">' + 'ลำดับ' + '</font>' + '</th>' +
                      '<th style="width:40%" bgColor=' + '#7678b5' + '>' + '<font color="white">' + 'ชื่อ' + '</font>' + '</th>' + '<th data-priority="2" bgColor=' + '#7678b5' + '>' + '<font color="white">' + 'จำนวน' + '</font>' + '</th>' + '<th data-priority="2" bgColor=' + '#7678b5' + '>' + '<font color="white">' + 'ราคา' + '</font>' + '</th>' + '</tr>' +
                  '</thead>' + '<tbody>';		 
        for (i = 0; i < arr.length; i++) {
            //i++;
            j = j + 1;
            out += '<tr>';
            out += '<th>' + j + '</th>';
            out += '<td align=left>' + arr[i].Mn_Name + '</td>';
                  		out += '<td align=center>' + arr[i].OD_total + '</td>';
                  		out += '<td align=center>' + arr[i].TotalPrice + '</td>';
                	out += '</tr>';
            orid = arr[i].O_ID;
            somePrice = parseInt(arr[i].TotalPrice) + somePrice;

        }
        var someTotal = somePrice.toString();

        out += '<td align=left>' + "" + '</td>';
              		out += '<td align=center>' + "" + '</td>';
        out += '<td align=center>' + "ราคารวมทั้งหมด" + '</td>';
              		out += '<td align=center>' + someTotal + " บาท" + '</td>';
        out += '</tbody>' + '</table>';
        var btnfinish = '<a href="#" data-icon="check" class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-icon-check ui-btn-icon-left ui-btn-a ui-btn-right" onclick="closeTable(' + orid + ',' + someTotal + ')">' + "ปิดโต๊ะ" + '</a>';
        document.getElementById("Btnclose").innerHTML = btnfinish;
        document.getElementById("billDetailss").innerHTML = out;
        $.mobile.changePage("#getBillDetail", {
            transition: "pop",
            reverse: false,
            changeHash: false
        });
    }
}
//ปิดโต๊ะ
function closeTable(orid, someTotal) {
    var Search = document.getElementById("search").value;
    var xmlhttp = new XMLHttpRequest();
    var orderId = orid;
    var somemoney = someTotal;
    var url = "http://www.ordering.esy.es/closeTable.php?data=" + encodeURIComponent(JSON.stringify({"orderId": orderId, "someTotal": somemoney}));

    xmlhttp.onreadystatechange = function () {
        console.log('xmlhttp.readyState' + xmlhttp.readyState);
        console.log('xmlhttp.status' + xmlhttp.status);

        myFunction(xmlhttp.responseText);

    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function myFunction(response) {


        $.mobile.changePage("#main", {
            transition: "pop",
            reverse: false,
            changeHash: false
        });
    }
}