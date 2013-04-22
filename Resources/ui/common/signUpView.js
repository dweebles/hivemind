var win = Ti.UI.currentWindow;
var Cloud = ('ti.cloud');

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
	color:'#D5FF0C',
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
	color:'#D5FF0C',
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
	color:'#D5FF0C',
	backgroundColor: '#EEE',
	top:180,
	width:'80%',
	font:{fontSize: 12},
	hintText:' Enter email',
	passwordMask:true,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderRadius: 10
});
signUp.add(email);

var hives = Titanium.UI.createTextArea({
	color:'#D5FF0C',
	backgroundColor: '#EEE',
	top:230,
	width:250,
	height:240,
	font:{fontSize: 12},
	hintText:'Select Hives, separated by comma',
	passwordMask:true,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderRadius: 10
});
signUp.add(hives);

var createUser  = Titanium.UI.createButton({
	backgroundImage: 'images/join.png',
	left: 70,
	top:550,
	width:50,
	height:50,
	borderRadius:5
});
signUp.add(createUser);

var cancelButton  = Titanium.UI.createButton({
	backgroundImage: 'images/cancel.png',
	top:550,
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
    // get the password hash
    var hashed_pass = Titanium.Utils.md5HexDigest(password.value);
    var litedb = Ti.Database.open('hivemind');
    litedb.execute('INSERT INTO users (nickname, email, password) '
                 + 'VALUES (?,?,?)', createUserName.value,
                email.value, hashed_pass);
    litedb.close();
	alert('You have been successfully registered');
});

/*
* Cancel event Handling
*/
cancelButton.addEventListener('click', function(e){
	win.close();
});
