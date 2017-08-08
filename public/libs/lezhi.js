$(function(){
	$(".btn").click(function(){
		$("#mask1").fadeOut(500)
		$("#mask").fadeOut(500)
		$("#mask2").fadeOut(500)
		$("#sjx1").css("display","none");
		$("#sjx").css("display","block");
		$("#denglu1").css("border-bottom-color","blue")
		$("#denglu2").css("border-bottom-color","white")
		$("#put5").css("display","none")
		$("#put2").css({"width":"290"})
		$("#put2").attr("placeholder","请输入密码(6-12位字符)")
		$("#span2").css("display","block")
	})
	$("#btn1").click(function(){
		$("#mask1").fadeIn(500);
		$("#mask").fadeIn(500);
	})
	$("#btn2").click(function(){
		$("#mask2").fadeIn(500);
		$("#mask").fadeIn(500);
	})
	$("#ljzc").click(function(){
		$("#mask2").fadeIn(500);
		$("#mask").fadeIn(500);
	})
	$("#denglu1").click(function(){
		$("#sjx1").css("display","none");
		$("#sjx").css("display","block");
		$("#denglu1").css("border-bottom-color","blue")
		$("#denglu2").css("border-bottom-color","white")
		$("#put5").css("display","none")
		$("#put2").css({"width":"290"})
		$("#put2").attr("placeholder","请输入密码(6-12位字符)")
		$("#span2").css("display","block")
	})
	$("#denglu2").click(function(){
		$("#sjx").css({"display":"none"});
		$("#sjx1").css({"display":"block"});
		$("#denglu2").css("border-bottom-color","blue")
		$("#denglu1").css("border-bottom-color","white")
		$("#put5").css("display","block")
		$("#put2").css({"width":"190"})
		$("#put2").attr("placeholder","请输入验证码")
		$("#span2").css("display","none")
	})
	var n=1;
	setTimeout(a,0)
	function a(){
		if(n==1){
			$("#img1").fadeIn(1000);
			$("#img3").fadeOut(1000);
			$("#z1").css("background","#0b9aff");
			$("#img2,#img3").css("display","none");
			$("#z12 span").eq(n-1).addClass('sp').siblings('span').removeClass('sp')
			n=2;
		}else if(n==2){
			$("#img2").fadeIn(1000);
			$("#img1").fadeOut(1000);
			$("#z1").css("background","#76C6FF");
			$("#img1,#img3").css("display","none");
			$("#z12 span").eq(n-1).addClass('sp').siblings('span').removeClass('sp')
			n=3;
		}else{
			$("#img3").fadeIn(1000);
			$("#img2").fadeOut(1000);
			$("#z1").css("background","#6EDAF7");
			$("#img2,#img1").css("display","none");
			$("#z12 span").eq(n-1).addClass('sp').siblings('span').removeClass('sp')
			n=1;
		}
	}
	var b=setInterval(a,2000);
	$("#z12 span").mouseover(function(){
		var index=$(this).index();
		var ys=["#0b9aff","#76C6FF","#6EDAF7"];
		console.log(ys[index])
		clearInterval(b);
		
		$("#z12 span").eq(index).addClass('sp').siblings('span').removeClass('sp');
		$("#z11 a").eq(index).fadeIn(0).siblings("a").hide(0);
		$("#z1").css("background",ys[index]);
	});
	$("#z12 span").mouseout(function(){
		b=setInterval(a,2000);
		index=$(this).index();
	});
	$("#kefu #kefu1").click(function(){
		$("#kefu").css({"right":"0","transition":"all 1s linear"});
		$("#kefu #kefu1").css("display","none");
		$("#kefu #kefu2").css("display","block");
	})
	$("#kefu #kefu2").click(function(){
		$("#kefu").css({"right":"-200px","transition":"all 1s linear"});
		$("#kefu #kefu2").css("display","none");
		$("#kefu #kefu1").css("display","block");
	})
	
	var addTransition=function(){
		document.getElementById("you").style.transition="all 1s linear"
		document.getElementById("you").style.webkitTransition="all 1s linear"//兼容写法
	}
	var setTranslateY =function(translateY){
        document.getElementById("you").style.transform="translateY("+translateY+"px)"
		document.getElementById("you").style.webkitTransform="translateY("+translateY+"px)"//兼容写法
	}
	var remTransition=function(){
        document.getElementById("you").style.transition=""
		document.getElementById("you").style.webkitTransition=""//兼容写法
	}
	var index=1;//记录滚动次数
	var m=1;
	//timer定时器
	setTranslateY(-index*405);
	function h(){
		index++;
		addTransition();
		setTranslateY(-index*405);
		if(m==0){
			$(".gd span").eq(m).css("background","white").siblings('span').css("background","#ccc");
			m=1;
		}else if(m==1){
			$(".gd span").eq(m).css("background","white").siblings('span').css("background","#ccc");
			m=2;
		}else{
			$(".gd span").eq(m).css("background","white").siblings('span').css("background","#ccc");
			m=0;
		}
	}
	var timer=setInterval(h,2000)

	$(".gd span").mouseout(function(){
		//index=1;
		timer=setInterval(h,2000);
	});

	itcast.transitionEnd(document.getElementById("you"),function(){
		if(index>=4){
			index=1;
			remTransition();
			setTranslateY(-index*405);
		}else if(index<=0){
			index=3;
			remTransition();
			setTranslateY(-index*405);
		}
	})
	$(".gd span").mouseover(function(){
		clearInterval(timer);
		var i=$(this).index();
		$(".gd span").eq(i).css("background","white").siblings('span').css("background","#ccc");
		if(i==0){
			setTranslateY(-405);
		}else if(i==1){
			setTranslateY(-2*405);
		}else{
			setTranslateY(-3*405);
		}
	});
	var j=0;
	function t(){
		if(j==0){
		p.css({"transform":"rotate(18deg)","transition":"all .1s"});
		j=1;	
		}else if(j==1){
		p.css({"transform":"rotate(-15deg)","transition":"all .1s"});
		j=2;
		}else if(j==2){
		p.css({"transform":"rotate(12deg)","transition":"all .1s"});
		j=3;
		}else if(j==3){
		p.css({"transform":"rotate(-9deg)","transition":"all .1s"});
		j=4;
		}else if(j==4){
		p.css({"transform":"rotate(6deg)","transition":"all .1s"});
		j=5;
		}else if(j==5){
		p.css({"transform":"rotate(-3deg)","transition":"all .1s"});
		j=6;
		}else{
		p.css({"transform":"rotate(0)","transition":"all .1s"});
		j=0;	
		}
	}
	$("#you img").mouseover(function(){
		clearInterval(timer);
		setTimeout(t,100);
		setTimeout(t,200);
		setTimeout(t,300);
		setTimeout(t,400);
		setTimeout(t,500);
		setTimeout(t,600);
		setTimeout(t,700);
		p=$(this);
		
	});
	$("#you img").mouseout(function(){
		timer=setInterval(h,2000);
	});
	$("#you .q div").mouseover(function(){
		p.siblings('span').css("display","block")
	})
	$("#you .q div").mouseout(function(){
		$("#you .div3").css("display","none")
	})

	var x=document.querySelector("#put1");
	var y=document.querySelector("#put2");
	var x1=document.querySelector("#dl1");
	var y1=document.querySelector("#dl2");
	
	$("#put4").click(function(){
		x=x.value;
		y=y.value;
		console.log(x);
		console.log(y);
		// x=JSON.stringify(x);
		// x=JSON.stringify(y);
		var xhr=new XMLHttpRequest();
		xhr.open("get","lezhi.php?name="+x+"&pwd="+y+"");
		xhr.send();
		xhr.onreadystatechange=function(){
    		if(xhr.readyState==4&&xhr.status==200){
					var z=xhr.responseText
					console.log(z)
    		}     
    	}
    	
	})

	$("#put7").click(function(){
		// var xhr=new XMLHttpRequest();
		// xhr.open("get","xxx.php?name=www&pwd=123456")
		// xhr.onreadystatechange=function(){
  //   		xhr.readyState     xhr.status
  //   	}
  //   	xhr.responseText
	})
	
})
