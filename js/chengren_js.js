var cookie_name = "bgImg";
var imgUrl = null;
document.onreadystatechange = function() {
	if (document.readyState = "complete") {
		if (imgUrl == null) {
			imgUrl = localStorage.getItem("bgImgSto");
		}
		if (imgUrl != null) {
			document.getElementById("bg_div_img").src = imgUrl;
		}
	}
};

//获取和设置背景图片
function setLogoImg() {
	var txt = document.getElementById("bg_input").value;
	var fileObj = document.getElementById('bg_file').files[0];
	if (fileObj != null) {
		var urlStr = null;
		//获取文件信息
		        if (window.FileReader)
		        {
		            var reader = new FileReader();
		            reader.readAsDataURL(fileObj);
		            //监听文件读取结束后事件    
		            reader.onloadend = function (e) {
					urlStr = e.target.result;
		              $("#bg_div_img").attr("src",e.target.result);
					  	localStorage.setItem("bgImgSto", ""+urlStr);
		            };
		        }
	} 
	
	
	
	if(txt != null && txt.trim() != "") {
		localStorage.setItem("bgImgSto", ""+txt);
		document.getElementById("bg_div_img").src = txt;
		document.getElementById("bg_input").value = "";
	}
};


function img_google(){
	var div = document.getElementById("img_google");
	  div.style.cssText='width:60px;height:60px;margin-left: 15px;';
	  var div = document.getElementById("img_baidu");
	    div.style.cssText='width:30px;height:30px; ';
		var div = document.getElementById("img_span");
		//图标反转换位置
		  div.style.cssText='display: flex;flex-direction: row-reverse;align-items: center;';
		  //搜索引擎切换
		    document.getElementById("form_baidu").style.display="none"
			document.getElementById("form_google").style.display="block"
		
};
function img_baidu(){
	var div = document.getElementById("img_baidu");
	  div.style.cssText='width:60px;height:60px;margin-left: 15px;';
	  var div = document.getElementById("img_google");
	    div.style.cssText='width:30px;height:30px;';
		var div = document.getElementById("img_span");
		//图标反转换位置
		  div.style.cssText='display: flex;flex-direction: row;align-items: center;';
		   //搜索引擎切换
		  document.getElementById("form_google").style.display="none"
		  document.getElementById("form_baidu").style.display="block"
};

function select_ren1(){
	document.getElementById("box_ren").style.display="flex";
	document.getElementById("box_ren2").style.display="none";
	document.getElementById("box_ren3").style.display="none";
	// document.getElementById("box4").style.display="none";
	// document.getElementById("box5").style.display="none";
	// document.getElementById("box6").style.display="none";
	// document.getElementById("box7").style.display="none";
	// document.getElementById("box8").style.display="none";
	
	document.getElementById("span_select_ren1").style.color='#FFFFFF';
	document.getElementById("span_select_ren2").style.color='#000000';
	document.getElementById("span_select_ren3").style.color='#000000';
	// document.getElementById("span_select4").style.color='#CC0033';
	// document.getElementById("span_select5").style.color='#CC0033';
	// document.getElementById("span_select6").style.color='#CC0033';
	// document.getElementById("span_select7").style.color='#CC0033';
	// document.getElementById("span_select8").style.color='#CC0033';
};
function select_ren2(){
	document.getElementById("box_ren").style.display="none";
	console.log("--------->显隐");
	document.getElementById("box_ren2").style.display="flex";
	document.getElementById("box_ren3").style.display="none";
	// document.getElementById("box4").style.display="none";
	// document.getElementById("box5").style.display="none";
	// document.getElementById("box6").style.display="none";
	// document.getElementById("box7").style.display="none";
	// document.getElementById("box8").style.display="none";
	
	document.getElementById("span_select_ren1").style.color='#000000';
	document.getElementById("span_select_ren2").style.color='#FFFFFF';
	document.getElementById("span_select_ren3").style.color='#000000';
	// document.getElementById("span_select4").style.color='#CC0033';
	// document.getElementById("span_select5").style.color='#CC0033';
	// document.getElementById("span_select6").style.color='#CC0033';
	// document.getElementById("span_select7").style.color='#CC0033';
	// document.getElementById("span_select8").style.color='#CC0033';
};
function select_ren3(){
	document.getElementById("box_ren").style.display="none";
	console.log("--------->显隐");
	document.getElementById("box_ren2").style.display="none";
	document.getElementById("box_ren3").style.display="flex";
	// document.getElementById("box4").style.display="none";
	// document.getElementById("box5").style.display="none";
	// document.getElementById("box6").style.display="none";
	// document.getElementById("box7").style.display="none";
	// document.getElementById("box8").style.display="none";
	
	document.getElementById("span_select_ren1").style.color='#000000';
	document.getElementById("span_select_ren2").style.color='#000000';
	document.getElementById("span_select_ren3").style.color='#FFFFFF';
	// document.getElementById("span_select4").style.color='#CC0033';
	// document.getElementById("span_select5").style.color='#CC0033';
	// document.getElementById("span_select6").style.color='#CC0033';
	// document.getElementById("span_select7").style.color='#CC0033';
	// document.getElementById("span_select8").style.color='#CC0033';
};
function select4(){
	document.getElementById("box").style.display="none";
	console.log("--------->显隐");
	document.getElementById("box2").style.display="none";
	document.getElementById("box3").style.display="none";
	document.getElementById("box4").style.display="flex";
	document.getElementById("box5").style.display="none";
	document.getElementById("box6").style.display="none";
	document.getElementById("box7").style.display="none";
	document.getElementById("box8").style.display="none";
	
	document.getElementById("span_select1").style.color='#CC0033';
	document.getElementById("span_select2").style.color='#CC0033';
	document.getElementById("span_select3").style.color='#CC0033';
	document.getElementById("span_select4").style.color='#FFFF00';
	document.getElementById("span_select5").style.color='#CC0033';
	document.getElementById("span_select6").style.color='#CC0033';
	document.getElementById("span_select7").style.color='#CC0033';
	document.getElementById("span_select8").style.color='#CC0033';
};
function select5(){
	document.getElementById("box").style.display="none";
	console.log("--------->显隐");
	document.getElementById("box2").style.display="none";
	document.getElementById("box3").style.display="none";
	document.getElementById("box4").style.display="none";
	document.getElementById("box5").style.display="flex";
	document.getElementById("box6").style.display="none";
	document.getElementById("box7").style.display="none";
	document.getElementById("box8").style.display="none";
	
	document.getElementById("span_select1").style.color='#CC0033';
	document.getElementById("span_select2").style.color='#CC0033';
	document.getElementById("span_select3").style.color='#CC0033';
	document.getElementById("span_select4").style.color='#CC0033';
	document.getElementById("span_select5").style.color='#FFFF00';
	document.getElementById("span_select6").style.color='#CC0033';
	document.getElementById("span_select7").style.color='#CC0033';
	document.getElementById("span_select8").style.color='#CC0033';
};
function select6(){
	document.getElementById("box").style.display="none";
	console.log("--------->显隐");
	document.getElementById("box2").style.display="none";
	document.getElementById("box3").style.display="none";
	document.getElementById("box4").style.display="none";
	document.getElementById("box5").style.display="none";
	document.getElementById("box6").style.display="flex";
	document.getElementById("box7").style.display="none";
	document.getElementById("box8").style.display="none";
	
	document.getElementById("span_select1").style.color='#CC0033';
	document.getElementById("span_select2").style.color='#CC0033';
	document.getElementById("span_select3").style.color='#CC0033';
	document.getElementById("span_select4").style.color='#CC0033';
	document.getElementById("span_select5").style.color='#CC0033';
	document.getElementById("span_select6").style.color='#FFFF00';
	document.getElementById("span_select7").style.color='#CC0033';
	document.getElementById("span_select8").style.color='#CC0033';
};
function select7(){
	document.getElementById("box").style.display="none";
	console.log("--------->显隐");
	document.getElementById("box2").style.display="none";
	document.getElementById("box3").style.display="none";
	document.getElementById("box4").style.display="none";
	document.getElementById("box5").style.display="none";
	document.getElementById("box6").style.display="none";
	document.getElementById("box7").style.display="flex";
	document.getElementById("box8").style.display="none";
	
	document.getElementById("span_select1").style.color='#CC0033';
	document.getElementById("span_select2").style.color='#CC0033';
	document.getElementById("span_select3").style.color='#CC0033';
	document.getElementById("span_select4").style.color='#CC0033';
	document.getElementById("span_select5").style.color='#CC0033';
	document.getElementById("span_select6").style.color='#CC0033';
	document.getElementById("span_select7").style.color='#FFFF00';
	document.getElementById("span_select8").style.color='#CC0033';
};
function select8(){
	document.getElementById("box").style.display="none";
	console.log("--------->显隐");
	document.getElementById("box2").style.display="none";
	document.getElementById("box3").style.display="none";
	document.getElementById("box4").style.display="none";
	document.getElementById("box5").style.display="none";
	document.getElementById("box6").style.display="none";
	document.getElementById("box7").style.display="none";
	document.getElementById("box8").style.display="flex";
	
	document.getElementById("span_select1").style.color='#CC0033';
	document.getElementById("span_select2").style.color='#CC0033';
	document.getElementById("span_select3").style.color='#CC0033';
	document.getElementById("span_select4").style.color='#CC0033';
	document.getElementById("span_select5").style.color='#CC0033';
	document.getElementById("span_select6").style.color='#CC0033';
	document.getElementById("span_select7").style.color='#CC0033';
	document.getElementById("span_select8").style.color='#FFFF00';
};
