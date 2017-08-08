<?php
	header('Content-type:text/html;charset=utf-8');
	//接受form表单传来的数据 用户名 密码
	$uname=$_GET["name"];
	$upwd=$_GET["pwd"];
	$arr={"admin":"123456"};
	var_dump($arr);
	// $uname=json_decode($uname)
	// $upwd=json_decode($upwd)
	//for($i=0;$i<$arr.length;$i++){
		if($uname=="admin"&&$upwd=="123456"){
		echo "登陆成功！";
		}else{
		echo "登录失败！";
		}
	//}
	
?>