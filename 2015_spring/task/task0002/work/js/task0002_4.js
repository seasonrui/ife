window.onload = function(){
	var data = ['angelababy','abc','abandon','addEvent','addEventListner','accept','aborad','account','block','bcd','b'];
	var arr = [];
	
	liClick(); //li点击事件
//通过监听input和propertychange事件实现实时的改动监听，input是主流，propertychange是ie，你懂的；
	

	//返回匹配的数组
	function check(inValue){
		arr = [];
		for(var i = 0,len = data.length;i < len;i++){
			if(data[i].substring(0,inValue.length)==inValue){
				arr.push(data[i]);
			}
		} 
		return arr;
	}

	//输入框变化事件
	addEvent($("input"),'input',function(){
		var inValue = $("input").value;
		if(inValue == ''){
			$('ul').style.display = 'none';
		}else{
			var arrResult = check(inValue);
			var string = '';
			for(var j = 0,len = arrResult.length;j < len;j++){
				string += '<li><span>' + arrResult[j].substring(0,inValue.length) + '</span>' + arrResult[j].substring(inValue.length)+'</li>';
			}
			$('ul').innerHTML = string;
			$('ul').style.display = 'block';
		}
	});
	//键盘按上下键事件
	addEvent($("input"),'keydown',function(e){
		var current = $('.active');

		if(e.keyCode == 40){//按键是向下
			if(current){
				var next = current.nextSibling;
				if(next){
					addClass(next,"active");
					removeClass(current,"active");
				}
			}else{
				addClass($("li"),"active");
			}
		}
		if(e.keyCode == 38){//按键是向上
			var previous = current.previousSibling;
			addClass(previous,'active');
			removeClass(current,'active');
		}
		if(e.keyCode == 13){//按键是enter
			if(current){
				$("input").value = deleteSpan(current.innerHTML);
        		$('ul').style.display = 'none';
			}
		}
	})

	//li点击事件
	function liClick(){

		delegateEvent($("ul"), "li", "mouseover", function() {
        	addClass(this, "active");
    	});
    	delegateEvent($("ul"), "li", "mouseout", function() {
        	removeClass(this, "active");
    	});
    	delegateEvent($("ul"), "li", "click", function() {
        	$("input").value = deleteSpan(this.innerHTML);
        	$('ul').style.display = 'none';
    	});
	}

	//去掉span标签
	function deleteSpan(str){
		var pattern = /^<span>(\w+)<\/span>(\w+)$/;
		var strArr = str.match(pattern);
		return strArr[1] + strArr[2];
	}
	
}