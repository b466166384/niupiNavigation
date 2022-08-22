var cookie_name = "bgImg";
var imgUrl = null;
var imgOpacity = null;
document.onreadystatechange = function() {
	on_off(false)
	if (document.readyState = "complete") {
		if (imgUrl == null) {
			imgUrl = localStorage.getItem("bgImgSto");
		}
		if (imgUrl != null) {
			document.getElementById("bg_div_img").src = imgUrl;
		}
		if (imgOpacity == null) {
			imgOpacity = localStorage.getItem("imgOpacity");
		}
		if (imgOpacity != null) {
			var img = document.getElementById("bg_div_img");
			img.style.opacity = imgOpacity;
			var x = document.getElementById("myRange");
			x.defaultValue = imgOpacity;

		}
		// on_off(false)// 关闭幻灯背景按钮
	}
};


//滑动条设置透明度
function opacityVoid() {
	var x = document.getElementById("myRange");
	var value = x.value;
	var img = document.getElementById("bg_div_img");
	img.style.opacity = value;
	localStorage.setItem("imgOpacity", "" + value);
}

var t2;
//打开幻灯背景
function playPic() {
	getPic()
	t2 = window.setInterval(function() {
		setTimeout(function() {
			getPic()
		}, 0)
	}, 7000);

}

//关闭幻灯背景
function closePlay() {
	//去掉定时器
	window.clearInterval(t2);
	if (imgUrl == null) {
		imgUrl = localStorage.getItem("bgImgSto");
	}
	if (imgUrl != null) {
		document.getElementById("bg_div_img").src = imgUrl;
	}else{
		document.getElementById("bg_div_img").src = "https://cdn.magdeleine.co/wp-content/uploads/2022/07/42105255700_112552170c_o-1400x933.jpg";
	}
	if (imgOpacity == null) {
		imgOpacity = localStorage.getItem("imgOpacity");
	}
	if (imgOpacity != null) {
		var img = document.getElementById("bg_div_img");
		img.style.opacity = imgOpacity;
		var x = document.getElementById("myRange");
		x.defaultValue = imgOpacity;
	
	}
    
}

//获取幻灯背景图片
function getPic() {
	getPromiseRequest('http://114.116.71.18:8082/niupi/random/random/img')
		.then(function(data) {
			console.log(data.data.data.img);
			isdata = false;
			var imgUrl = data.data.data.img;
			document.getElementById("bg_div_img").src = imgUrl;
		}, function(err) {
			console.log(err);
		}).then(function(data) {
			console.log(data);
		})
}

//获取接口方法
function getPromiseRequest(url) {
	var headers = {
		"Content-Type": "application/json",
	}
	return new Promise((resolve, reject) => {
		axios.create({
			headers: headers
		}).get("http://114.116.71.18:8082/niupi/random/random/img").then((res) => {
			if (res.status == 200) {
				console.log(res)
				resolve(res);
			}else{
			 resolve(res);
			}
		
		}).catch((err) => {
			reject(err);
		})
	})
}

//幻灯背景开关
function on_off(type) {
	var btn = document.getElementsByClassName("btn-on")[0];
	var circle = document.getElementsByClassName("btn-on-circle")[0];
	var text = document.getElementsByClassName("btn-on-text")[0];

	if (!type) {
		btn.style = "background-color: #ccc;"
		circle.style = "left: 40px;background-color: #888;box-shadow: 0 0 10px #888;";
		text.style = "right: 30px;color: #888;";
		text.innerText = "OFF";
		closePlay();
	} else {
		btn.style = ""
		circle.style = "";
		text.style = "";
		text.innerText = "ON";
		playPic();
	}
	btn.setAttribute("onclick", "on_off(" + !type + ")"); // 修改状态
}



//获取和设置背景图片
function setLogoImg() {
	var txt = document.getElementById("bg_input").value;
	var fileObj = document.getElementById('bg_file').files[0];
	if (fileObj != null) {
		var urlStr = null;
		//获取文件信息
		if (window.FileReader) {
			var reader = new FileReader();
			reader.readAsDataURL(fileObj);
			//监听文件读取结束后事件    
			reader.onloadend = function(e) {
				urlStr = e.target.result;
				$("#bg_div_img").attr("src", e.target.result);
				localStorage.setItem("bgImgSto", "" + urlStr);
			};
		}
	}



	if (txt != null && txt.trim() != "") {
		localStorage.setItem("bgImgSto", "" + txt);
		document.getElementById("bg_div_img").src = txt;
		document.getElementById("bg_input").value = "";
	}
};


//文字内容显隐（师傅只显示背景图）
function contentSwitch(){
	var img = document.getElementById("contentSwitchImg").src;
		console.log(img)
	if(img.toString().indexOf("show_open")== -1){
		console.log("开")
		document.getElementById("contentSwitchImg").src = "http://114.116.71.18:8080/picture/show_open.png?v="+new Date().getTime()
		document.getElementById("body_show").style.visibility="visible"
		var img = document.getElementById("bg_div_img");
		img.style.opacity = imgOpacity;
		
	}else{
		console.log("关")
		document.getElementById("contentSwitchImg").src = "http://114.116.71.18:8080/picture/show_close.png?v="+new Date().getTime()
		document.getElementById("body_show").style.visibility="hidden"
		var img = document.getElementById("bg_div_img");
		img.style.opacity = 1;
	}
}

function img_google() {
	var div = document.getElementById("img_google");
	div.style.cssText = 'width:60px;height:60px;margin-left: 15px;';
	var div = document.getElementById("img_baidu");
	div.style.cssText = 'width:30px;height:30px; ';
	var div = document.getElementById("img_span");
	//图标反转换位置
	div.style.cssText = 'display: flex;flex-direction: row-reverse;align-items: center;';
	//搜索引擎切换
	document.getElementById("form_baidu").style.display = "none"
	document.getElementById("form_google").style.display = "block"

};

function img_baidu() {
	var div = document.getElementById("img_baidu");
	div.style.cssText = 'width:60px;height:60px;margin-left: 15px;';
	var div = document.getElementById("img_google");
	div.style.cssText = 'width:30px;height:30px;';
	var div = document.getElementById("img_span");
	//图标反转换位置
	div.style.cssText = 'display: flex;flex-direction: row;align-items: center;';
	//搜索引擎切换
	document.getElementById("form_google").style.display = "none"
	document.getElementById("form_baidu").style.display = "block"
};

function select1() {
	// document.getElementById("box").style.display = "flex";
	// document.getElementById("box2").style.display = "none";
	// document.getElementById("box3").style.display = "none";
	// document.getElementById("box4").style.display = "none";
	// document.getElementById("box5").style.display = "none";
	// document.getElementById("box6").style.display = "none";
	// document.getElementById("box7").style.display = "none";
	// document.getElementById("box8").style.display = "none";
document.getElementById("index_box").src = "work.html";
	document.getElementById("span_select1").style.color = '#FFFF00';
	document.getElementById("span_select2").style.color = '#CC0033';
	document.getElementById("span_select3").style.color = '#CC0033';
	document.getElementById("span_select4").style.color = '#CC0033';
	document.getElementById("span_select5").style.color = '#CC0033';
	document.getElementById("span_select6").style.color = '#CC0033';
	document.getElementById("span_select7").style.color = '#CC0033';
	document.getElementById("span_select8").style.color = '#CC0033';
};

function select2() {
	document.getElementById("index_box").src = "moviesComic.html";
	
	
	// document.getElementById("box").style.display = "none";
	// console.log("--------->显隐");
	// document.getElementById("box2").style.display = "flex";
	// document.getElementById("box3").style.display = "none";
	// document.getElementById("box4").style.display = "none";
	// document.getElementById("box5").style.display = "none";
	// document.getElementById("box6").style.display = "none";
	// document.getElementById("box7").style.display = "none";
	// document.getElementById("box8").style.display = "none";

	document.getElementById("span_select1").style.color = '#CC0033';
	document.getElementById("span_select2").style.color = '#FFFF00';
	document.getElementById("span_select3").style.color = '#CC0033';
	document.getElementById("span_select4").style.color = '#CC0033';
	document.getElementById("span_select5").style.color = '#CC0033';
	document.getElementById("span_select6").style.color = '#CC0033';
	document.getElementById("span_select7").style.color = '#CC0033';
	document.getElementById("span_select8").style.color = '#CC0033';
};

function select3() {
	document.getElementById("index_box").src = "entertainment.html";
	// document.getElementById("box").style.display = "none";
	// console.log("--------->显隐");
	// document.getElementById("box2").style.display = "none";
	// document.getElementById("box3").style.display = "flex";
	// document.getElementById("box4").style.display = "none";
	// document.getElementById("box5").style.display = "none";
	// document.getElementById("box6").style.display = "none";
	// document.getElementById("box7").style.display = "none";
	// document.getElementById("box8").style.display = "none";

	document.getElementById("span_select1").style.color = '#CC0033';
	document.getElementById("span_select2").style.color = '#CC0033';
	document.getElementById("span_select3").style.color = '#FFFF00';
	document.getElementById("span_select4").style.color = '#CC0033';
	document.getElementById("span_select5").style.color = '#CC0033';
	document.getElementById("span_select6").style.color = '#CC0033';
	document.getElementById("span_select7").style.color = '#CC0033';
	document.getElementById("span_select8").style.color = '#CC0033';
};

function select4() {
	// document.getElementById("box").style.display = "none";
	// console.log("--------->显隐");
	// document.getElementById("box2").style.display = "none";
	// document.getElementById("box3").style.display = "none";
	// document.getElementById("box4").style.display = "flex";
	// document.getElementById("box5").style.display = "none";
	// document.getElementById("box6").style.display = "none";
	// document.getElementById("box7").style.display = "none";
	// document.getElementById("box8").style.display = "none";
	document.getElementById("index_box").src = "picture_book.html";

	document.getElementById("span_select1").style.color = '#CC0033';
	document.getElementById("span_select2").style.color = '#CC0033';
	document.getElementById("span_select3").style.color = '#CC0033';
	document.getElementById("span_select4").style.color = '#FFFF00';
	document.getElementById("span_select5").style.color = '#CC0033';
	document.getElementById("span_select6").style.color = '#CC0033';
	document.getElementById("span_select7").style.color = '#CC0033';
	document.getElementById("span_select8").style.color = '#CC0033';
};

function select5() {
	// document.getElementById("box").style.display = "none";
	// console.log("--------->显隐");
	// document.getElementById("box2").style.display = "none";
	// document.getElementById("box3").style.display = "none";
	// document.getElementById("box4").style.display = "none";
	// document.getElementById("box5").style.display = "flex";
	// document.getElementById("box6").style.display = "none";
	// document.getElementById("box7").style.display = "none";
	// document.getElementById("box8").style.display = "none";
	document.getElementById("index_box").src = "shopping.html";

	document.getElementById("span_select1").style.color = '#CC0033';
	document.getElementById("span_select2").style.color = '#CC0033';
	document.getElementById("span_select3").style.color = '#CC0033';
	document.getElementById("span_select4").style.color = '#CC0033';
	document.getElementById("span_select5").style.color = '#FFFF00';
	document.getElementById("span_select6").style.color = '#CC0033';
	document.getElementById("span_select7").style.color = '#CC0033';
	document.getElementById("span_select8").style.color = '#CC0033';
};

function select6() {
	// document.getElementById("box").style.display = "none";
	// console.log("--------->显隐");
	// document.getElementById("box2").style.display = "none";
	// document.getElementById("box3").style.display = "none";
	// document.getElementById("box4").style.display = "none";
	// document.getElementById("box5").style.display = "none";
	// document.getElementById("box6").style.display = "flex";
	// document.getElementById("box7").style.display = "none";
	// document.getElementById("box8").style.display = "none";
	document.getElementById("index_box").src = "outerNet.html";

	document.getElementById("span_select1").style.color = '#CC0033';
	document.getElementById("span_select2").style.color = '#CC0033';
	document.getElementById("span_select3").style.color = '#CC0033';
	document.getElementById("span_select4").style.color = '#CC0033';
	document.getElementById("span_select5").style.color = '#CC0033';
	document.getElementById("span_select6").style.color = '#FFFF00';
	document.getElementById("span_select7").style.color = '#CC0033';
	document.getElementById("span_select8").style.color = '#CC0033';
};

function select7() {
	// document.getElementById("box").style.display = "none";
	// console.log("--------->显隐");
	// document.getElementById("box2").style.display = "none";
	// document.getElementById("box3").style.display = "none";
	// document.getElementById("box4").style.display = "none";
	// document.getElementById("box5").style.display = "none";
	// document.getElementById("box6").style.display = "none";
	// document.getElementById("box7").style.display = "flex";
	// document.getElementById("box8").style.display = "none";
	document.getElementById("index_box").src = "software.html";

	document.getElementById("span_select1").style.color = '#CC0033';
	document.getElementById("span_select2").style.color = '#CC0033';
	document.getElementById("span_select3").style.color = '#CC0033';
	document.getElementById("span_select4").style.color = '#CC0033';
	document.getElementById("span_select5").style.color = '#CC0033';
	document.getElementById("span_select6").style.color = '#CC0033';
	document.getElementById("span_select7").style.color = '#FFFF00';
	document.getElementById("span_select8").style.color = '#CC0033';
};

function select8() {
	// document.getElementById("box").style.display = "none";
	// console.log("--------->显隐");
	// document.getElementById("box2").style.display = "none";
	// document.getElementById("box3").style.display = "none";.
	// document.getElementById("box4").style.display = "none";
	// document.getElementById("box5").style.display = "none";
	// document.getElementById("box6").style.display = "none";
	// document.getElementById("box7").style.display = "none";
	// document.getElementById("box8").style.display = "flex";
	document.getElementById("index_box").src = "other.html";

	document.getElementById("span_select1").style.color = '#CC0033';
	document.getElementById("span_select2").style.color = '#CC0033';
	document.getElementById("span_select3").style.color = '#CC0033';
	document.getElementById("span_select4").style.color = '#CC0033';
	document.getElementById("span_select5").style.color = '#CC0033';
	document.getElementById("span_select6").style.color = '#CC0033';
	document.getElementById("span_select7").style.color = '#CC0033';
	document.getElementById("span_select8").style.color = '#FFFF00';
};
