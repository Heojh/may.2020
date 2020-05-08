<?php

// (보안) 외부에서 접근이 불가한 폴더에 있는 db정보 가져오기
require_once('../../../database_info.php');

$connect = new mysqli($server_name, $user_name, $user_password, $database_name);

if($connect->connect_error) {
    die("Connection failed: " . $connect->connect_error);

} else {
    //echo "Connect successfully";

}

mysqli_set_charset($connect, 'utf8');

function query($sql) {
    global $connect;
    return $connect->query($sql);
}

?>
