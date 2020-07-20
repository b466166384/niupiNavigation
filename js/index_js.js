var y
var str;
var a1;

function btn() {
	var x = document.getElementById("input")
	y = x.value
	$('#shu').html(y)
	$('tr').hide();
	a1 = document.getElementsByTagName("img");
	var arrayObj = new Array();
	arrayObj.push(a1.length + ' \n' + '</br>');
	for (i = 0; i < a1.length; i++) {
		arrayObj.push(a1[i].attributes.file.value + ' \n' + '</br>')
	}
	//消除分割符的逗号
	str = arrayObj.toString().replace(/,/g, '');
	$("#shu").html(str);
	document.getElementById("input").value = ""
}

//nsfwPicx
function nsfwPicCom(){
	var x = document.getElementById("input")
	y = x.value
	$('#shu').html(y)
	$('tr').hide();
	a1 = document.getElementsByTagName("img");
	var arrayObj = new Array();
	arrayObj.push(a1.length + ' \n' + '</br>');
	for (i = 0; i < a1.length; i++) {
		arrayObj.push(a1[i].attributes.src.value + ' \n' + '</br>')
	}
	//消除分割符的逗号
	str = arrayObj.toString().replace(/,/g, '');
	$("#shu").html(str);
	document.getElementById("input").value = ""
}

//xsnvshen
function xsnvshen(){
	var x = document.getElementById("input")
	y = x.value
	$('#shu').html(y)
	$('tr').hide();
	a1 = document.getElementsByTagName("img");
	//console.log(a1);
		console.log(a1[0].getAttribute("data-original"));
	var arrayObj = new Array();
	arrayObj.push(a1.length + ' \n' + '</br>');
	for (i = 0; i < a1.length; i++) {
		arrayObj.push("https:"+a1[i].getAttribute("data-original") + ' \n' + '</br>')
	}
	//消除分割符的逗号
	str = arrayObj.toString().replace(/,/g, '');
	$("#shu").html(str);
	document.getElementById("input").value = ""
}
//动漫，漫画解析
function dongManbtn() {
	var x = document.getElementById("input")
	y = x.value
	$('#shu').html(y)
	$('tr').hide();
	a1 = document.getElementsByTagName("img");
	var arrayObj = new Array();
	arrayObj.push(a1.length + ' \n' + '</br>');
	for (i = 0; i < a1.length; i++) {
		arrayObj.push(a1[i].attributes.src.value + ' \n' + '</br>')
	}
	//消除分割符的逗号
	str = arrayObj.toString().replace(/,/g, '');
	$("#shu").html(str);
	document.getElementById("input").value = ""
}
//大图查看
function showBtn() {
	console.log("显示")
	$("#shu").html(y);
	// $('img').attr('style', 'width:400px');
	// $('td').attr('style', 'width:600px');
}
//隐藏图片
function hideBtn() {
	$("#shu").html(str);
}
//清空
function clearBtn() {
	$("#shu").html("");
}

//小图预览
function showSamllBtn() {
	//var r = y.replace(/</br>/g, '');
	//var r = y.replace('<br>','')
	//第一个参数是要替换掉的内容，第二个参数"g"表示替换全部（global）。
	var r = y.replace(new RegExp("<br>", "g"), ""); //第一个参数是正则表达式。
	//本例会将全部匹配项替换为第二个参数。
	console.log(r)
	$('#shu').html(r)
	$('img').attr('style', 'width:150px;height:180px');
	$('h4').hide()
}


