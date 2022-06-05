$(function(){
	$('.info11b1').click(function(){
		$(".info11bwz").show();
		$(".info11bwzz").hide();
	})
	$('.info11b2').click(function(){
		$(".info11bwzz").show();
		$(".info11bwz").hide();
	})
	$('.shul3').click(function(){
		var i=$(this).prev().text(); //获取标签的值
		var q=449;
		   var k = parseInt(i)+1;
		   var z = parseInt(q);
		   var z = z*k;
			$(this).prev().text(k);
			$(this).parent("div").prev().text(z);
	})
	$('.shul1').click(function(){
		var i=$(this).next().text(); //获取标签的值
		var qq= $(this).parent("div").prev().text();
		   var kk = parseInt(i)-1;
		   var zz = parseInt(qq);
		   var zs = zz-449;
		   if(kk==0){
			  
			    return;
		   }else{
			   $(this).next().text(kk);
			   $(this).parent("div").prev().text(zs);
		   }
			
	})
	$('.shul3a').click(function(){
		var i=$(this).prev().text(); //获取标签的值
		var q=180;
		   var k = parseInt(i)+1;
		   var z = parseInt(q);
		   var z = z*k;
			$(this).prev().text(k);
			$(this).parent("div").prev().text(z);
	})
	$('.shul1a').click(function(){
		var i=$(this).next().text(); //获取标签的值
		var qq= $(this).parent("div").prev().text();
		   var kk = parseInt(i)-1;
		   var zz = parseInt(qq);
		   var zs = zz-180;
		   if(kk==0){
			  
			    return;
		   }else{
			   $(this).next().text(kk);
			   $(this).parent("div").prev().text(zs);
		   }	
	})
	
	
	//20index价格计算
	$('.bshul3').click(function(){
		var i=$(this).prev().text(); //获取标签的值
		var q=449;
		   var k = parseInt(i)+1;
		   var z = parseInt(q);
		   var z = z*k;
			$(this).prev().text(k);
			$(this).parent("div").prev().text(z);
			var zh=$(this).parent().parent().parent().parent().children( "span:last-child" ).text();
			 var zh =parseInt(zh);
			 var zh = zh+449;
			$(this).parent().parent().parent().parent().children( "span:last-child" ).text(zh);
	})
	$('.bshul1').click(function(){
		var i=$(this).next().text(); //获取标签的值
		var qq= $(this).parent("div").prev().text();
		var zh=$(this).parent().parent().parent().parent().children( "span:last-child" ).text();
		var zh =parseInt(zh);
		var zh = zh-449;
		   var kk = parseInt(i)-1;
		   var zz = parseInt(qq);
		   var zs = zz-449;
		   if(kk==0){
			  
			    return;
		   }else{
			   $(this).next().text(kk);
			   $(this).parent("div").prev().text(zs);
			   $(this).parent().parent().parent().parent().children( "span:last-child" ).text(zh);
		   }
				
	})
	// 结束
	
	$('.top_left1s').click(function(){
			$('.wqle').show();
		
	})
	$('.gba').click(function(){
			$('.wqle').hide();
		
	})
	
});
