// Colors

var oriLog = console.log;
console.log = function (message) {	
	let date = new Date(Date.now());
	if(logEnable){
		setLog(myName, 'LOG', '[' + date.toTimeString().split(' ')[0] + ']' + " ==> " + message );
	}
	oriLog('\x1b[32m' , '[' , date.toTimeString().split(' ')[0] , ']' , '\x1b[36m' , " ==> " , message , '\x1b[0m');
}

var oriWarn = console.warn;
console.warn = function (message) {	
	let date = new Date(Date.now());
	if(logEnable){
		setLog(myName, 'WARN', '[' + date.toTimeString().split(' ')[0] + ']' + " ==> " + message );
	}
	oriWarn('\x1b[32m' , '[' , date.toTimeString().split(' ')[0] , ']' , '\x1b[35m' , " ==> " , message , '\x1b[0m');
}

var oriErr = console.error;
console.error = function (message) {	
	let date = new Date(Date.now());
	if(logEnable){
		setLog(myName, 'ERR', '[' + date.toTimeString().split(' ')[0] + ']' + " ==> " + message );
	}
	oriErr('\x1b[32m' , '[' , date.toTimeString().split(' ')[0] , ']' , '\x1b[31m' , " ==> " , message , '\x1b[0m');
}


function cyan(txt){
	return '\x1b[36m' + txt + '\x1b[0m';
}

function green(txt){
	return '\x1b[32m' + txt + '\x1b[0m';
}

function red(txt){
	return '\x1b[31m' + txt + '\x1b[0m';
}

function magenta(txt){
	return '\x1b[35m' + txt + '\x1b[0m';
}





// Loging
const fs = require('fs');
const path = require('path');
let myName = 'root';
let logDir = './';
let logEnable = false;


function initLoging(name, dir){
	myName = name;
	logDir = dir;
	logEnable = true;
}

function setLog(name, type, line){
	// Normal console
	if(type = 'LOG'){
		line = 'LOG ' + line;
	}else if(type = 'WARN'){
		line = 'WARN ' + line;
	}else if(type = 'ERR'){
		line = 'ERR ' + line;
	}else{
		line = '? ' + line;
	}

	// Store in files
	appendInLogFile(name, line);
}


function appendInLogFile(name, line){
	// Store in files
	if (!fs.existsSync(logDir)){
		fs.mkdirSync(logDir);
	}
	fs.appendFile(path.join(logDir, '//' + name + '.log'), line + "\n", function (err) {
        if (err){		
			//normal_error(err);
		}
    });
}


module.exports.initLoging 		= initLoging;
module.exports.setLog 			= setLog;
module.exports.appendInLogFile 	= appendInLogFile;
module.exports.cyan 			= cyan;
module.exports.green 			= green;
module.exports.red 				= red;
module.exports.magenta 			= magenta;
