   
var user = [];
var index = 1;
var to_do1 = [];
var j = 1;



/*function add_to_do() {
        hideDiv('view_user_profile');
		//document.getElementById('view_user_profile').style="display:none;";
		//document.getElementById('to_do_form').style="display:block;";
        showDiv('to_do_form');
	}*/
/*function delete_todo(id){
		var id = id;
        for (var k in to_do1){
            if(to_do1[k] == to_do1[id]){
                //delete to_do1[k];
                to_do1.splice(k,1);
                //console.log(to_do1);
                break;
            }
        }
//document.getElementById('table-row_'+id).innerHTML="";
document.getElementById('title_'+id).innerHTML="";
document.getElementById('date_'+id).innerHTML="";
document.getElementById('desc_'+id).innerHTML="";
document.getElementById('operation_'+id).innerHTML="";

alert('Deleted Successfully');
	}
*/
/*
function update_todo(a){
var id = a;
//document.getElementById('to_do_form').style="display:block;";
showDiv('to_do_form');
document.getElementById('title').value= to_do1[id]['_title'];
document.getElementById('description').value= to_do1[id]['desc'];
document.getElementById('submit_button_todo').innerHTML= '<input class="button" type="button" onclick="update_todo_data('+id+')" value="Update">';
}*/


/*
function update_todo_data(id){

var id = id;
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;

    to_do1[id]['_title'] = title;    
    to_do1[id]['desc'] = description;    

console.log(to_do1);
    document.getElementById('title_'+id).innerHTML= title;
    document.getElementById('desc_'+id).innerHTML= description;

    hideDiv('to_do_form');
   //document.getElementById('to_do_form').style="display:none;";
    document.getElementById('title').value = '';
    document.getElementById("description").value = '';
    alert('Data Updated');

    document.getElementById('submit_button_todo').innerHTML= '<input class="button" type="button" onclick="submit_data()" value="Submit">';

}*/



/*
function submit_data(){
    //add to do 
		var temp = {};
		var title = document.getElementById('title').value;
		//alert(title);
		var description = document.getElementById('description').value;
		if(title != '' || description != '' ){
			
            hideDiv('to_do_form');
			//document.getElementById('to_do_form').style="display:none;";
			var new_Date = new Date();
			temp = {'index':index,'_title': title, 'desc': description ,'date': new_Date};
			to_do1.push(temp);
			console.log(to_do1);

			for (var k in to_do1){

    			console.log(to_do1[k]['_title']);
    		var string = '<tr class="table-row" ></label></td><td class="header__item"><label id="title_'+ k +'">' + to_do1[k]['_title'] + '\
    			</label></td><td class="header__item"><label id="desc_'+ k +'">' + to_do1[k]['desc'] + '\
    			</label></td><td class="header__item"><label id="date_'+ k +'">' + to_do1[k]['date'] + '\
    			</label></td><td class="header__item" id="operation_'+ k +'">  \
    			<input class="button del" type="button" onclick="delete_todo(' + k + '\
    			)" value="Delete">\
    			<input class="button del" type="button" onclick="update_todo(' + k + ')" value="Update">\
    			</td> </tr>';


            /*var string = '<tr class="table-row" ></label></td><td class="header__item"><label id="table-row_' + k + '">' + j + '\
                </label></td><td class="header__item"><label id="title_'+ k +'">' + to_do1[k]['_title'] + '\
                </label></td><td class="header__item"><label id="desc_'+ k +'">' + to_do1[k]['desc'] + '\
                </label></td><td class="header__item"><label id="date_'+ k +'">' + to_do1[k]['date'] + '\
                </label></td><td class="header__item" id="operation_'+ k +'">  \
                <input class="button del" type="button" onclick="delete_todo(' + k + '\
                )" value="Delete">\
                <input class="button del" type="button" onclick="update_todo(' + k + ')" value="Update">\
                </td> </tr>';


			}
			index ++;
            j++;
			var tr = document.createElement('tr');
    		tr.className = 'table-row';
    		tr.innerHTML = string;
            //var tr = string;
    		document.getElementById('userData').appendChild(tr);
    		document.getElementById('title').value = '';
			document.getElementById("description").value = '';
    	}
    	else {
    		alert('Please fill the data');
    	}
	}
*/


function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("userData");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 2); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

/*function create_user(messages){
	user['name'] =document.getElementById('name').value;
	user['email'] = document.getElementById('email').value;
	user['gender'] = document.getElementById('gender').value;
	user['address'] = document.getElementById('address').value;
    user['password'] = document.getElementById('password').value;
	//user['profile_pic'] = document.getElementById('profile_pic').value;


if(user['name'] == '' || user['email'] == '' || user['gender'] == '' || user['address'] == '' || user['password'] == ''){
 	alert('Please fill all the fields.');
}else{
		//alert(user['address']);
        hideDiv('register_user');
		//document.getElementById('register_user').style="display:none;";
		showDiv('login_user');
        //document.getElementById('login_user').style="display:block;";
	}

    messages('User Registration');
}

function login_user(messages)
{
	user_email = document.getElementById('login_email').value;
	user_password  = document.getElementById('login_password').value;

if(user['email'] == '' || user['password'] == ''){
 	alert('Please fill all the fields.');
}else{
		//alert(user['email'] + user['password']);
		if(user_email != user['email'] || user_password != user['password']){
			alert('Please enter Valid Username and password');
			document.getElementById('login_email').value = '';
			document.getElementById('login_password').value = '';
		}else{
            hideDiv('login_user');
			//document.getElementById('login_user').style="display:none;";
			//document.getElementById('outer').style="display:block;";
            showDiv('outer');
            messages('Login');
			//alert('Successful login...!!');
		}
	}
}

*/

/*function view_user(){
//alert(user['name']);
	document.getElementById("view_user_profile").innerHTML = "<p> Name:" + user['name'] + "\
    </p><p> Email Id:" + user['email'] + "</p><p> Gender:" + user['gender'] + "\
    </p><p> Address:" + user['address'] + "</p><input id='check' class='btn' type='button' onclick='edit_user()' value='Edit User'>";

	//document.getElementById('to_do_form').style="display:none;";
	var x = document.getElementById("view_user_profile");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function edit_user(){

    showDiv('register_user');
    //document.getElementById('register_user').style="display:block;";
    //document.getElementById('view_user_profile').style="display:none;";
     //document.getElementById('password').style="display:none;";
     //document.getElementById('password_label').style="display:none;";

    hideDiv('password_label');
    hideDiv('view_user_profile');
    hideDiv('password');


    //document.getElementById('submit_user_data').innerHTML='<input class="button" type="button" onclick="update_user(messages)" value="Update User">';
    document.getElementById('submit_user_data').innerHTML='<input class="button" id="update_user_btn" type="button" value="Update User">';
}

function update_user(){

    user['name'] =document.getElementById('name').value;
    user['email'] = document.getElementById('email').value;
    user['gender'] = document.getElementById('gender').value;
    user['address'] = document.getElementById('address').value;
    //document.getElementById('register_user').style="display:none;";
    hideDiv('register_user');
    //alert('User Updated');
    messages('User Updation');

}*/


/*
function logout(messages){
    
    //getDOM('outer').style="display:none;";
    hideDiv('outer');
    showDiv('login_user');
    //getDOM('login_user').style="display:block;";
    messages('User Logout');
       // document.getElementById('outer').style="display:none;";
      //  document.getElementById('login_user').style="display:block;";
}

/*function getDOM(Id){
    return document.getElementById(`${Id}`);
}

/*function messages(message){
    alert(`${message} operation executed Successfully.`);
}

function hideDiv(Id){
    document.getElementById(`${Id}`).style="display:none";
}

function showDiv(Id){
    document.getElementById(`${Id}`).style="display:block";
}*/