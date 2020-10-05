const tmi = require('tmi.js'); 
const Compare = require('kor-string-similarity');
 

const client = new tmi.Client({
	connection: {
		secure: true,
		reconnect: true
	},
	channels: [ 'dogswellfish' ]
});

//문자 교체 함수 
function replaceAll(str, searchStr, replaceStr) {

	return str.split(searchStr).join(replaceStr);
 }

 //문자 유사도 검사 알고리즘
function simulation(_arr){
	for(var i=0; i<_arr.length; i++){
		var sum = 0
		for(var j=0; j<_arr.length; j++){
			sum += parseInt(Compare.compareTwoStrings(_arr[i][0],_arr[j][0]) * 100)
		}
		_arr[i][1] = sum
	}
	_arr.sort()
}

//유사도 분석한것 바탕으로 문자 합쳐주는 알고리즘
function wordClouding(_arr){
	const processWordArray = [_arr[0]]
	for(var i=1; i<_arr.length; i++){
		var _L = processWordArray.length-1
		//유사도가 0.7가 넘어가면
		if(Compare.compareTwoStrings(processWordArray[_L][0], _arr[i][0]) > 0.7){
			processWordArray[_L][1] = processWordArray[_L][1] + _arr[i][1]
		}else{
			processWordArray.push(_arr[i])
		}
	}
	return processWordArray.sort(function(a,b){
		return a[1]-b[1]
	})
}


//TMI 연결
client.connect();
var N = 0  //채팅개수 변수
var arrayChat = [] //채팅 공백단위로 끊은 단어 담기 [문자, 유사도]

//TMI 모듈 메세지 소켓
client.on('message', (channel, tags, message, self) => {
	N = N + 1
	const _arr = message.split(' ')
	console.log(N, message)
	for(var i=0; i<_arr.length; i++){
		//마침표 없에기
		_arr[i] = replaceAll(_arr[i], "'", "")
		_arr[i] = replaceAll(_arr[i], '"', "")
		arrayChat.push([_arr[i], 0])
	}
	//문장 30개마다 워드클라우딩 해주기
	if (N%30 === 0){
		//유사도 검사
		simulation(arrayChat)
		//유사도 검사한 배열로 워드클라우딩 하기
		var wordCloudArr = wordClouding(arrayChat)
		console.dir(wordCloudArr,{'maxArrayLength': null})
		arrayChat = []
	}
});
	

