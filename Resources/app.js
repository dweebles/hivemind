/*
* In app.js, we generally take care of a few things:
* - Bootstrap the application with any data we need
* - Check for dependencies like device type, platform version or network connection
* - Require and open our top-level UI component
*  
*/


if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}
else{
	Ti.UI.setBackgroundImage('ui/common/images/rebel.png');

	// Bootstrap the SQLite database
    var litedb = Ti.Database.open('hivemind');
    // Boy, I sure hope JavaScript strings work like this...
    litedb.execute('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY '
        + 'AUTOINCREMENT, nickname TEXT, email TEXT, password TEXT, '
        + 'firstname TEXT, lastname TEXT, bio TEXT);'
        + 'CREATE TABLE IF NOT EXISTS hives(id INTEGER PRIMARY KEY '
        + 'AUTOINCREMENT, creation_date TEXT, description TEXT, creator '
        + 'INTEGER, FOREIGN KEY(creator) REFERENCES users(id));'
        + 'CREATE TABLE IF NOT EXISTS users_hives('
        + 'user_id TEXT, hive_id TEXT, FOREIGN KEY(user_id) '
        + 'REFERENCES users(id), FOREIGN KEY(hive_id) '
        + 'REFERENCES hives(id));');
    litedb.close();

	var login = Ti.UI.createWindow({
		url: "ui/common/loginView.js"
	});
	login.open();

	Ti.include("ui/common/loginView.js");
    	Ti.include("ui/common/MasterView.js");
    	Ti.include("ui/common/viewNotes.js");
}