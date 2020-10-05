const Compare = require('kor-string-similarity');
// console.log(Compare.compareTwoStrings("잡어", "잡어~~"))
function replaceAll(str, searchStr, replaceStr) {

	return str.split(searchStr).join(replaceStr);
 }
 console.log("'내가왜'")
console.log( replaceAll("'내가왜'", "'", ""))
var chatArray =[
	'이거',
	'오랜만에',
	'듣네',
	'인도사드는',
	'원소',
	'공격하네',
	'ㅋㅋㅋㅋ',
	'청개구리야',
	'인도도',
	'참',
	'개성',
	'뚜렷해',
	'인도',
	'마법사네',
	'베리나리',
	'청개구리야',
	'테란으로만',
	'안되나',
	'ㅇ',
	'미나이..?',
	'근데',
	'이형',
	'뭐실수했는데요??',
	'놀리는생활님,',
	'3,000원',
	'후원!!',
	'쫘~쫘쫘~쫘쫘쫘!!',
	'-',
	'(YouTube',
	'영상)',
	'꽈가문의',
	'뚜룹씨',
	'소환술!!',
	'ㅋㅋㅋㅋㅋㅋ',
	'210만원',
	'카드를',
	'21에...',
	'편ㅡㅡㅡ안',
	'헤치웠나',
	'해치웠나?',
	'휴전',
	'..',
	'해치웠나?',
	'해치웠나?',
	'?',
	'210=21',
	'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
	'아앗...',
	'잡어!',
	'좋은거',
	'하나',
	'떠줘라',
	'ㄹㅇ',
	'잡어',
	'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
	'드디어',
	'하나',
	'헤치웟다',
	'혹성탈출로',
	'바뀌었어',
	'ㅋㅋㅋㅋㅋㅋㅋ',
	'잡어',
	'아이콘좀',
	'떠라',
	'좋은거',
	'하나',
	'잡어!',
	'엔딩요정이네',
	'제발',
	'ㅋㅋㅋㅋㅋㅋㅋ',
	'닫어!',
	'wakA',
	'wakA',
	'wakA',
	'wakA',
	'wakA',
	'잡어',
	'고래',
	'잡어',
	'이제',
	'혹성탈출이네',
	'아이콘',
	'하나',
	'잡어~',
	'어!',
	'코피흘리는곰돌님,',
	'1,000원',
	'후원!!',
	'쫘~쫘쫘~쫘쫘쫘!!',
	'-',
	'뭐라는',
	'거야',
	'형이',
	'두개',
	'열었잖어',
	'zz',
	'wakCu',
	'wakCu',
	'wakCu2',
	'wakCu2',
	'wakCu',
	'2020.10.5',
	'21사건',
	'ㅇㅇ님,',
	'1,000원',
	'후원!!',
	'쫘~쫘쫘~쫘쫘쫘!!',
	'-',
	'얘들아',
	'밑에',
	'노래하나',
	'빈다',
	'wakLe',
	'wakMg',
	'wakRe',
	'ㅋㅋ'
  ].map(item=> [item, 0])



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
	return processWordArray
}

simulation(chatArray)
console.dir(chatArray,{'maxArrayLength': null})

var a = wordClouding(chatArray)
console.dir(a,{'maxArrayLength': null})
// // 유사도 검사
// for(var i=0; i<chatArray.length; i++){
// 	var sum = 0
// 	for(var j=0; j<chatArray.length; j++){
// 		sum += parseInt(Compare.compareTwoStrings(chatArray[i][0],chatArray[j][0]) * 100)
// 	}
// 	chatArray[i][1] = sum
// }

// console.dir(chatArray.sort(),{'maxArrayLength': null})

// //유사도 검사한거 단어 합치기
// const processWordArray = [chatArray[0]]
// for(var i=1; i<chatArray.length; i++){
// 	var _L = processWordArray.length-1
// 	//유사도가 0.65가 넘어가면
// 	if(Compare.compareTwoStrings(processWordArray[_L][0], chatArray[i][0]) > 0.7){
// 		processWordArray[_L][1] = processWordArray[_L][1] + chatArray[i][1]
// 	}else{
// 		processWordArray.push(chatArray[i])
// 	}
// }