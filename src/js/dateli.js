$(function(){
	
	//加载数据
	var index = location.search.replace("?","");
	$.ajax({
		type:"get",
		url:"data/datalist.json",
		async:true,
		success:function(res){
//			console.log(res);
			$('<img src="'+ res.data[index].img1 +'">').appendTo($(".jqzoom"));
			$('<li><a href="#"><img src="'+ res.data[index].img1 +'"</a></li>').appendTo($('.inner ul'));
			$('<li><a href="#"><img src="'+ res.data[index].img2 +'"</a></li>').appendTo($('.inner ul'));
			datagrid();
			  //图片放大镜效果	
//     			$(".bigimg .jqzoom").jqueryzoom({xzoom:200,yzoom:200});
		}
	});
	

	
//	数量加减
	function datagrid(){
		var num=$("#num").val();
		$(".detial-number .down").click(function(){
			num--;
			if(num<=1){
				num=1;
			}
			$("#num").val(num);
		})
		$(".detial-number .up").click(function(){
			num++;
			$("#num").val(num);
		})
	}
	
})
