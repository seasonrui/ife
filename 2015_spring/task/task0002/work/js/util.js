//判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
	return Object.prototype.toString.call(arr) === "[object Array]";
}
//判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
	return Object.prototype.toString.call(fn) == "[object Function]";
}

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
   var tarObj = src.constructor === Array ? [] : {};
   for(var i in src){
   		if(src.hasOwnProperty(i)){ //确定是非继承的属性
   			tarObj[i] = typeof(src[i]) === "object" ? cloneObject(src[i]) : src[i];
   		}
   }
   return tarObj;
}

// 测试用例：
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;	//浅度克隆
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
   var hash = {};
   var brr = [];
   for(var i = 0; i < arr.length; i++){
   		if(!hash[arr[i]]){
   			brr.push(arr[i]);
   			hash[arr[i]] = true;
   		}
   }
   return brr;
}
// 使用示例
var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray(a);
console.log(b); // [1, 3, 5, 7]

// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
    for(var i = 0; i < str.length; i++){
    	if(str.charAt(i) != " " && str.charAt(i) != "\t")
    		break;
    }
    for(var j = str.length; j >= 0; j--){
    	if(str.charAt(j) != " " && str.charAt(j) != "\t")
    		break;
    }
    return str.slice(i,j + 1);
}

// 很多同学肯定对于上面的代码看不下去，接下来，我们真正实现一个trim
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
  return str.replace(/^\s+|\s+$/g,'');
}

//使用示例：
var str = '  hi!  ';
str = simpleTrim(str);
console.log(str);

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
	for(var i in arr){
		fn(arr[i],i);
	}
}
// 其中fn函数可以接受两个参数：item和index

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item) {
    console.log(item)
}
each(arr, output);  // java, c, php, html

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
    console.log(index + ': ' + item)
}
each(arr, output);  // 0:java, 1:c, 2:php, 3:html

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
	var i = 0;
	for(var j in obj){
		i++;
	}
	return i;
}

// 使用示例
var obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    }
};
console.log(getObjectLength(obj)); // 3

// 判断是否为邮箱地址
function isEmail(emailStr) {
    var pattern = /^(\w+\.)*\w+@\w+(\.\w+)+$/;
    return pattern.test(emailStr);
}

// 判断是否为手机号
function isMobilePhone(phone) {
    var pattern = /^(\+\d{1,4})?\d{7,11}$/;
    return pattern.test(phone);
}


//判断是否有某个className
function hasClass(element,className){
	var reg = new RegExp('(\\s|^)'+className+'(\\s|$)'); 
	return element.className.match(reg); 
}

// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
	if(!hasClass(element,newClassName)){
		element.className += " " + newClassName;
	}
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
	if(hasClass(element,oldclassName)){
		var pattern = new RegExp('(\\s|^)' + oldclassName + '(\\s|$)');
		element.className = element.className.replace(reg,'');
	}
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    return element.parentNode === siblingNode.parentNode;
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    var box = element.getBoundingClientRect();
    return box;
}



// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    if(element.addEventListner) {
    	element.addEventListner(event,listener,false);
    }else if(element.attachEvent) {
    	element.attachEvent('on' + event,listener);
    }else {
    	element['on' + event] = listener;
    }
}



// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    if(element.removeEventListener) {
    	element.removeEventListener(event,listener,false);
    }else if(element.detachEvent) {
    	element.detachEvent('on' + event,listener);
    }else {
    	element['on' + event] = null;
    }
}

// 实现对click事件的绑定
function addClickEvent(element, listener) {
    addEvent(element,'click',listener);
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    addEvent(element,'keydown',function(){
    	if(event.keyCpde == 13){ //enter键的keyCode为13
    		listener();
    	}
    })
}

/*
接下来我们把上面几个函数和$做一下结合，把他们变成$对象的一些方法

addEvent(element, event, listener) -> $.on(element, event, listener);
removeEvent(element, event, listener) -> $.un(element, event, listener);
addClickEvent(element, listener) -> $.click(element, listener);
addEnterEvent(element, listener) -> $.enter(element, listener);

*/

//事件代理
// 先简单一些
function delegateEvent(element, tag, eventName, listener) {
    addEvent(element,eventName,function(e){
      var e = e || window.event;
      var target= e.srcElement || e.target;
      if(target.tagName.toLowerCase() == tag.toLowerCase()){
          listener.call(target, event);
      }

    })

}

$.delegate = delegateEvent;

// 使用示例
// 还是上面那段HTML，实现对list这个ul里面所有li的click事件进行响应
$.delegate($("#list"), "li", "click", clickHandle);

//估计有同学已经开始吐槽了，函数里面一堆$看着晕啊，那么接下来把我们的事件函数做如下封装改变：

$.on(selector, event, listener) {
    addEvent($(selector),event,listener);
}

$.click(selector, listener) {
    addClickEvent($(selector), listener);
}

$.un(selector, event, listener) {
    removeEvent($(selector), event, listener);
}

$.delegate(selector, tag, event, listener) {
    delegateEvent($(selector),tag,event,listener);
}

// 使用示例：
$.click("[data-log]", logListener);
$.delegate('#list', "li", "click", liClicker);


// 判断是否为IE浏览器，返回-1或者版本号
function isIE() {
   
}

// 设置cookie
function setCookie(cookieName, cookieValue, expiredays) {
  var expires;
  if(expiredays != null){
    expires = new Date();
    expires.setTime(expires.getTime() + expiredays * 24 * 60 * 60 * 1000);
  }
    document.cookie = cookieName + "=" + encodeURIComponent(cookieValue) + ";expires = " + expires;
}

// 获取cookie值
function getCookie(cookieName) {
    var arr = document.cookie.split("; ");
    for(var i = 0,len = arr.length;i<len;i++){
        var item = arr[i].split("=");
        if(item[0] == name){
          return item[1];
      }
    }
    return "";
}

// 
function ajax(url, options) {
  var dataResult;
  if(typeof(options.data) === 'object'){
      var str = '';
      for(var i in options.data){
          str = str + i + '=' + options.data[i] + '&';
    }
    dataResult = str.substring(0,str.length - 1);
  }
  options.type = options.type || 'GET';
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHttp');
  xhr.open(options.type,url,true);
  if(options.type == 'GET'){
      xhr.send(null);
  }else{
      xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
      xhr.send(dataResult);
  }
    xhr.onreadystatechange = function(){
        if(xhr.readyStatr === 4){
          if(xhr.status === 200){
            if(options.onsuccess){
              options.onsuccess(xhr.responseText,xhr.responseXML);
            }
          }
        else{
          if(options.onfail){
            options.onfail();
          }
        }
      }
    };
}

// 使用示例：
ajax(
    'http://localhost:8080/server/ajaxtest', 
    {
        data: {
            name: 'simon',
            password: '123456'
        },
        onsuccess: function (responseText, xhr) {
            console.log(responseText);
        }
    }
);
