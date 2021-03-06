/**
 * Sign-up view
 * This is the view from which users can
 * register with the Hivemind application.
 */

var win = Ti.UI.currentWindow;

//Creates scroll view
var scrollView = Ti.UI.createScrollView({
 	contentWidth: 'auto',
  	contentHeight: 'auto',
  	showVerticalScrollIndicator: true,
  	showHorizontalScrollIndicator: true,
  	height: '100%',
  	width: '100%'
});

//Creates a view(wrapper) for our form elements
var signUp = Ti.UI.createView({
	backgroundImage: 'images/rebel.png',
	top: 0,
	width: 300,
	height: 800
});
var SignUp = Ti.UI.createLabel({
	color:'#D5FF0C',
  	font: { 
  		fontFamily: 'Geometry-soft',
  		fontSize:32 },
  	shadowColor: '#111',
  	shadowOffset: {x:5, y:5},
  	html: 'Create <br /> Account',
  	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  	top: 0,
  	width: Ti.UI.SIZE,
  	height: Ti.UI.SIZE
});
signUp.add(SignUp);

var createUserName = Titanium.UI.createTextField({
	color:'#000',
	backgroundColor: '#EEE',
	top:80,
	width:'80%',
	font:{fontSize: 12},
	hintText:'Create user name',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderRadius: 10
});
signUp.add(createUserName);

var password = Titanium.UI.createTextField({
	color:'#000',
	backgroundColor: '#EEE',
	top:130,
	width:'80%',
	font:{fontSize: 12},
	hintText:' Enter password',
	passwordMask:true,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderRadius: 10
});
signUp.add(password);

var email = Titanium.UI.createTextField({
	color:'#000',
	backgroundColor: '#EEE',
	top:180,
	width:'80%',
	font:{fontSize: 12},
	hintText:' Enter email',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderRadius: 10
});
signUp.add(email);

var userDescription = Titanium.UI.createTextArea({
	color:'#000',
	backgroundColor: '#EEE',
	top:230,
	width:250,
	height:125,
	font:{fontSize: 12},
	hintText:'Type in user description',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderRadius: 10
});
signUp.add(userDescription);

var hives = Titanium.UI.createTextArea({
	color:'#000',
	backgroundColor: '#EEE',
	top:380,
	width:250,
	height:125,
	font:{fontSize: 12},
	hintText:'Add a hive',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderRadius: 10
});
signUp.add(hives);

var createUser  = Titanium.UI.createButton({
	backgroundImage: 'images/join.png',
	left: 70,
	top: 520,
	width:50,
	height:50,
	borderRadius:5
});
signUp.add(createUser);

var cancelButton  = Titanium.UI.createButton({
	backgroundImage: 'images/cancel.png',
	top:520,
	left: 170,
	width:50,
	height:50,
	borderRadius:5
});
signUp.add(cancelButton);

//Add scrollView to current window
scrollView.add(signUp);
win.add(scrollView);
	
/*
* Creating user button event Handling
*/
createUser.addEventListener('click', function(e){
	if(createUserName != ' ' && password != ' ' && email != ' '){
		var hashed_pass = Titanium.Utils.md5HexDigest(password.value);
    		var litedb = Ti.Database.open('hivemind');
    		litedb.execute('INSERT INTO users (nickname, email, password, bio) '+ 'VALUES (?,?,?,?)', createUserName.value, email.value, hashed_pass, userDescription.value);
		litedb.execute('INSERT INTO hives (hiveName) '+ 'VALUES (?)', hives.value);

     		 // var query = litedb.execute('SELECT * FROM users_hives');
     		 // while(query.isValidRow()){
     		 	// var nickId = query.fieldByName('user_id');
     		 	// Ti.API.info(nickId);
     		 	// query.next();
     		 // }
    		litedb.close();
    		var alertWindow = Titanium.UI.createAlertDialog({
    			title: 'Titanium',
    			message: createUserName.value + ' \n has been successfully registered',
    			buttonNames: ['OK']
		});
 
		alertWindow.addEventListener('click',function(ev){
			var homeView = Ti.UI.createWindow({
				url: "MasterView.js"
			});
			homeView.open();
		});
 		alertWindow.show();
	}
	else{
		alert('Please fill in all missing fields');
	}
});

/*
* Cancel event Handling
*/
cancelButton.addEventListener('click', function(e){
	win.close();
});
