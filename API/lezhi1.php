<?php
	header('Content-type:text/html;charset=utf-8');
	//接受form表单传来的数据 用户名 密码
	$un=$_GET["uname"];
	$up=$_GET["upwd"];
	$arr=file_get_contents("lezhi.json");
	if($un&&$up){
		$arr=substr($arr,0,-1).','.'{"name":'.'"'.$un.'"'.',"pwd":'.'"'.$up.'"'.'}'.']';
		file_put_contents("lezhi.json",$arr);
		echo "t";
	}
?>