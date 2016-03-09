window.onload = function(){

	var timer = 0;
	$.click("button",function(){
		clearInterval(timer);
		var inTimeValue = $("#inTime").value;
		var regTime = /^\d{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2]\d)|(3[0-1]))$/;
		if(!(regTime.test(inTimeValue))){
			$(".warn").innerHTML = "请按照正确的格式输入";
		}else{//计算时间差毫秒数
			timer = setInterval(function(){
				var inDate = inTimeValue.replace(/-/g,"/");
				var inArr = inTimeValue.split("-");
				var furDate = new Date(inDate);
				
				var curDate = new Date();
				var gapDate = parseInt((furDate.getTime() - curDate.getTime())/1000);
				if(gapDate < 0){
					$(".warn").innerHTML = "请输入一个未来的时间";
				}else{

					var d = parseInt(gapDate/(24*60*60));
					var h = parseInt(gapDate/(60*60)%24);
					var m = parseInt(gapDate/60%60);
					var s = parseInt(gapDate%60);
					$(".result").innerHTML = "距离" + inArr[0] + "年" + inArr[1] + "月" + inArr[2] + "日还有" + d + "天" + h + "小时" + m + "分" + s + "秒";
					if(gapDate == 0){
						clearInterval(timer);
					}
				}
			},1000);	
		}
	 })
}