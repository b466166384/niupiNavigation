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
	document.cookie = "bgImg=" + txt;
	document.getElementById("bg_div_img").src = txt;
};


