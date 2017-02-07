<?php
	//创建初始化连接对象方法
function connect(){
	$servername="localhost";
	$username="root";
	$password="root";
	$dbname="login";
	//mysqli_connect()初始化连接，返回一个连接对象	 
	$con = mysqli_connect($servername,$username,$password,$dbname);	
	//检测链接对象的错误信息
	if(mysqli_connect_errno($con)){
		echo "连接失败：" . mysqli_connect_error();
	}
	echo "连接成功!";
//	var_dump($con);
	return 	$con;
}
//connect();
//执行查询数据的方法
function query($sql){
	$conn = connect();//初始化连接
	$result = mysqli_query($conn,$sql);//执行sql脚本，也叫数据库脚本
	//定义一个数组
	$jsonData = array();
	if($result){
		//在结果集中获取对象（逐行获取）
		while($obj = mysqli_fetch_object($result))
		{
			$jsonData[] = $obj;
		}
		echo json_encode($jsonData,JSON_UNESCAPED_UNICODE);
		//释放结果集
		mysqli_free_result($result);
	}
	mysqli_close($conn);//关闭连接
	return $jsonData;
}
//$sql = "select * from login where username=ppd";
//query($sql);
	
//插入方法(逻辑语句)
function excute($sql){
	$conn = connect();
	$result = mysqli_query($conn,$sql);  
	if($result)
	{
		echo "successful";
	}else{
		echo "fail";
	}
	mysqli_close($conn);//关闭连接
//	return $result;
}

?>