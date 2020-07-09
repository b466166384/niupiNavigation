var cookie_name = "bgImg";
var imgUrl = null;
document.onreadystatechange = function() {
	if (document.readyState = "complete") {
		if (imgUrl == null) {
			imgUrl = $.cookie('bgImg');
		}
		if (imgUrl != null) {
			document.getElementById("bg_div_img").src = imgUrl;
		}
	}
};



//获取和设置背景图片
function setLogoImg() {
	var txt = document.getElementById("bg_input").value;
	console.log(txt);
	//document.cookie = "bgImg=" + txt;
	var Days = 30;
	var exp = new Date(); 
	exp.setTime(exp.getTime() + Days*24*60*60*1000);
	document.cookie = "bgImg" + "="+ escape (txt) + ";expires=" + exp.toGMTString();
	document.getElementById("bg_div_img").src = txt;
	
};


