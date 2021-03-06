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
        litedb.execute('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY '
        + 'AUTOINCREMENT, nickname TEXT, email TEXT, password TEXT, '
        + 'firstname TEXT, lastname TEXT, bio TEXT);');
        litedb.execute('CREATE TABLE IF NOT EXISTS hives(id INTEGER PRIMARY KEY '
        + 'AUTOINCREMENT, hiveName TEXT, creation_date TEXT, description TEXT, creator '
        + 'INTEGER, FOREIGN KEY(creator) REFERENCES users(id));');
        litedb.execute('CREATE TABLE IF NOT EXISTS users_hives('
        + 'user_id TEXT, hive_id TEXT, FOREIGN KEY(user_id) '
        + 'REFERENCES users(id), FOREIGN KEY(hive_id) '
        + 'REFERENCES hives(id));');
        litedb.execute('CREATE TABLE IF NOT EXISTS notes(id INTEGER PRIMARY KEY '
        + 'AUTOINCREMENT,hive_id TEXT, creation_date TEXT, edit_date TEXT, creator TEXT, format TEXT,title TEXT, content TEXT);');
        litedb.execute('CREATE TABLE IF NOT EXISTS notes_tag(note_id INTEGER PRIMARY KEY '
        + 'AUTOINCREMENT,tag_id INTEGER);');
        litedb.execute('CREATE TABLE IF NOT EXISTS tags(id INTEGER PRIMARY KEY '
        + 'AUTOINCREMENT,title TEXT);');
        // litedb.execute("DROP TABLE IF EXISTS users");
        // litedb.execute("DROP TABLE IF EXISTS hives");
        // litedb.execute("DROP TABLE IF EXISTS notes");

    litedb.close();

	var intro = Ti.UI.createWindow({
		 // url: "ui/common/loginView.js"
		url: "ui/common/howTo.js"
	});
	intro.open();
}
