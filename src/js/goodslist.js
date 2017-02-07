$(function(){
	$.ajax({
		type:"get",
		url:"data/datalist.json",
		async:true,
		success:function(res){
//			console.log(res);
			var total=res.data.length;
//			console.log(res.data[0].img);
//			console.log(total);//16
			var pageSize = res.pageSize;
//			console.log(pageSize);//8
			var lastPage=total%pageSize;
			//分页数
			var pageCount = total%pageSize == 0? Math.floor(total/pageSize):Math.ceil(total/pageSize);
//			console.log(pageCount);
			var index=0;
			var start = 0;
			
			var $html=$('.goods-ul ul');
			function updata(){ 
				$html.html("");
				start = index*pageCount;
				console.log(start);
				var html="";
				if(lastPage!=0){
					if(index < pageCount - 1){
						for(var i = start;i < start + pageSize;i++){
							html+='<li class="wrap-li"><a href="dateli.html?'+ i +'"><img src="'+ res.data[i].img+'">';
							html+='<p>'+ res.data[i].title +'</p>';
							html+='<span class="pik">￥</span><span class="pik">'+ res.data[i].price +'</span>';
							html+='<span class="dark">￥</span><span class="dark">'+ res.data[i].oldPrice +'</span></a></li>'
						}
							$html.append(html);
					}else{
						for(var i = start;i < start + lastPage;i++){
							html+='<li class="wrap-li"><a href="dateli.html?'+ i +'"><img src="'+ res.data[i].img+'">';
							html+='<p>'+ res.data[i].title +'</p>';
							html+='<span class="pik">￥</span><span class="pik">'+ res.data[i].price +'</span>';
							html+='<span class="dark">￥</span><span class="dark">'+ res.data[i].oldPrice +'</span></a></li>'
						}
						$html.append(html);
					}
					
				}else{
					for(var i = start;i < start + pageSize;i++){
						html+='<li class="wrap-li"><a href="dateli.html?'+ i +'"><img src="'+ res.data[i].img+'">';
						html+='<p>'+ res.data[i].title +'</p>';
						html+='<span class="pik">￥</span><span class="pik">'+ res.data[i].price +'</span>';
						html+='<span class="dark">￥</span><span class="dark">'+ res.data[i].oldPrice +'</span></a></li>'
					}
					$html.append(html);
				}
				
				
			}
			updata();
			
//			分页
			var btns = $(".pagination");
			function pagebtn(){
				if(btns.find('a').length == 0){
				btns.append($('<span class="upage">上一页</span>'));
				for(var i = 0; i < pageCount; i++){
						var a = $('<a></a>');
						a.html(i+1);
						btns.append(a);
						a.css({"border":"1px solid gainsboro","padding":"5px 10px","margin":"0 5px"})
						if(i == 0){
							a.css({"background":"#FF5482"});
						}
					}
					btns.append($('<span class="next-page">下一页</span>'));			
            	}
			}
			pagebtn();
			
		btns.on('click','a',function(){
			$(this).parent(".pagination").find('a').css({"background":"#fff","color":"#777"});    		
			$(this).css({"background":"#FF5482","color":"#fff"});
           	index = $(this).html() - 1;  //记录下标
			updata();   		
    	})
		
//		点击上一页
    	$('.upage').click(function(){
    		index--;
   			if(index <= -1){
   				index = 0;
   			}
			$(".pagination").find('a').css({"background":"#fff","color":"#777"});    		
   			
           	$('a',btns).eq(index).css({"background":"#FF5482","color":"#fff"});
   			updata();
    	})
    	
//  	点击下一页
    	$('.next-page').click(function(){
    		index++;
   			if(index >= pageCount-1){
   				index = pageCount-1;
   			}
			$(".pagination").find('a').css({"background":"#fff","color":"#777"});    		
   			
           	$('a',btns).eq(index).css({"background":"#FF5482","color":"#fff"});
   			updata();
    	})
			
		}
	});
	
})
