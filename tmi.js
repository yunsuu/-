const tmi = require('tmi.js');
const Compare = require('kor-string-similarity');
const quote = require('quote')({ quotes: '' });
function replaceAll(str, searchStr, replaceStr) {

	return str.split(searchStr).join(replaceStr);
 }
 

const client = new tmi.Client({
	connection: {
		secure: true,
		reconnect: true
	},
	channels: [ 'ljsql934' ]
});


client.connect();
var N = 0 
var arrayChat = []
client.on('message', (channel, tags, message, self) => {
	N = N + 1
	const _arr = message.split(' ')
	console.log(N, _arr)
	for(var i=0; i<_arr.length; i++){
		//마침표 없에기
		_arr[i] = replaceAll(_arr[i], "'", "")
		_arr[i] = replaceAll(_arr[i], '"', "")
		arrayChat.push(_arr[i])
	}
	if (N%10 === 0){
		console.log(arrayChat)
		arrayChat = []
	}
});
	
a = '"앙"'
b = ''

