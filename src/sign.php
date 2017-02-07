<?php
	include "connect.php";
	$sql = "select * from login where username='" . $_POST["username"] ." ' and password='" . $_POST["password"] ."'";
	$result = query($sql);
	if(count($result) < 1 ){
		echo "{state:false,message:'登录失败'}";
	}else{
		echo "{state:true,message:'登录成功'}";
	}
?>