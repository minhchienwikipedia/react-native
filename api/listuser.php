<?php
	header("Content-type: application/json");
    require 'conect.php';

	$selectSql = "select * from tbl_user";
	$resultObj = mysqli_query($conn,$selectSql);
	
	while($row = mysqli_fetch_array($resultObj, MYSQL_ASSOC))
	{
		$list[] = $row;
	}

	foreach($list as $k=>$v)
	{
		$sqlGetList = "select * from tbl_user where id = '".$v['id']."'";
		$obj = mysqli_query($conn,$sqlGetList);
		while($row = mysqli_fetch_array($obj, MYSQL_ASSOC))
		{
			$list[] = $row;
		}
		$list = '';
	}

    $dataResultApi['code']=0;
	$dataResultApi['message']="Success";
	$dataResultApi['result'] = $list;
	echo json_encode($dataResultApi);
	exit();
		
?>