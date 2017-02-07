<?php
	include 'connect.php';
	$sql = "insert into mylogin(username,password) values('" . $_POST["username"] . "','" . $_POST["password"] . "')";
//	echo $_GET["username"];
//	$sql="insert into mylogin(username,password)values('ppd',123)";

	excute($sql);
//	$username = $_POST["username"];
//	$password = $_POST["password"];
//	
//	//获取连接
//	$url="localhost";
//	$user="root";
//	$password="root";
//	$dbname="login";
//	//连接服务器
//	$con = mysqli_connect($url,$user,$password,$dbname);
//	
//	//编写SQL 执行SQL添加数据
//	$sql = "insert into mylogin(username,password) values('$username','$password')";
//	if(!mysqli_query($con,$sql)){
//		die('Error:'.mysqli_error());
//	}
//	echo "添加一条记录";
//	//关闭连接
//	mysqli_close($con)
	
?>