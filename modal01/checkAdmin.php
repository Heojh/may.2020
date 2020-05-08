<?php

// error_reporting(E_ALL);
// ini_set('display_errors',1);

include_once('dbConnect.php');

$id = $_POST['id'];
$password = password_hash($_POST['password']);

// $sql = user 테이블의 컬럼 email 값이 지정한 값인 데이터 행의 컬럼명을 가져온다.
$sql= "SELECT * FROM users WHERE id='$id'";

// MySQL 쿼리 실행.(연결객체, 쿼리)
$result = mysqli_query($connect, $sql);

// MySQL 결과 카운트하기(결과값)
$number_match = mysqli_num_rows($result);

// $number_match 가 true 일 때, 입력한 비밀번호와 database의 비밀번호 확인.
if ($number_match) {
    // MySQL 결과 카운트하기 (결과값)
    $row = mysqli_fetch_assoc($result);

    // $db_password = 결과값의 password
    $db_password = $row['password'];

    // database 닫기
    mysqli_close($connect);

    /*
        Error : password_hash로 저장된 값과 로그인에서 입력한 password가 false
        $db_password 복호화 필요
    */
    // password_verify() 는 password_hash() 로 암호화한 비밀번호가 사용자가 입력한 값과 같은지 확인하는 함수.
    // 입력한 password와 db_password의 값이 true 일 때,
    if (password_verify($password, $db_password)) {
        session_start();
        $_SESSION["user_id"] = $row["id"];
        $_SESSION["user_name"] = $row["name"];
        echo("
                <script>
                    location.href = 'administration.html';
                </script>
            ");
        // header("location:../index.php");

        // 입력한 pw 와 db 의 pw 값이 flase 일 때,
    } else {
        echo("
                <script>
                    window.alert('비밀번호가 틀립니다.$password, $db_password')
                    history.go(-1)
                </script>
            ");
        exit;

    }

    // $number_match 가 false 일때,
} else {
    // echo ($email . $_POST["email"]);
    echo("
            <script>
            window.alert('등록되지 않은 아이디 입니다.')
            history.go(-1)
            </script>
        ");

}

?>
