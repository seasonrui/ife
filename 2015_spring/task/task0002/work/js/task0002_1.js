window.onload = function(){
	
    var btn = $("button");
    var hobby = $("#hobby");
    $.click("button",function(){
        
        var str = hobby.value;
        var strReg = /\n|\s+|,|，|;|；|、/;
        var strArr = str.split(strReg);
        //去除数组中的空元素
        function deleteBlank(arr){
            	var brr = [],
                	len,
                	i,
                	j = 0;
            	for(i = 0;len = arr.length,i < len;i++){
                	if(arr[i] !== ''){
                    	brr[j++] = arr[i];
                	}
            	}
            	return brr;
        	}
        var strDeleteBlank  = deleteBlank(strArr);
        if(strDeleteBlank.length<10){
        	$('.warn').innerHTML = "请输入10个以上的爱好";
         }else{	
         	var strUnique = uniqArray(strDeleteBlank);//去重
        	var inhtml = "";
        	for(var i = 0;i < strUnique.length;i++){
            	inhtml += "<p><input type = checkbox><lable>" +strUnique[i] +"</label>";  
        	}
         	$(".result").innerHTML = inhtml;

    		}
    	})

        
   
}
