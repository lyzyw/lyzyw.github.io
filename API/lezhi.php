<?php
	header('Content-type:text/html;charset=utf-8');
	//接受form表单传来的数据 用户名 密码
	$uname=$_GET["name"];
	$upwd=$_GET["pwd"];
	$arr=file_get_contents("lezhi.json");
	// 登录
	$arr1=json_decode($arr);
	for($i=0;$i<count($arr1);$i++){
			if(($uname==$arr1[$i]->name)&&($upwd==$arr1[$i]->pwd)){
			echo "t";
			}
	}
?>