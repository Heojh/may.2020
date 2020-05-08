day7
<h3>[chat01_transports]</h3>
Reference : 
http://webschool.kr/page.php?bbs=nodejs&bbs_idx=5&pg=

<br>Explain :
<br>80포트 채팅을 위한 연습.
<br>192.168.146.195/may/chat01_transports 에 접속을 하면
<br>PHP connect..! 가 출력되고, 
<br>콘솔창에는 Node.js connect..! 가 출력된다.

TODO :
<br>실제로 3000포트가 열려있는지 확인한다.
> $netstat -nap | grep 3000

실제로 클라이언트에 연결되면 클라이언트 접속 부분도 확인이 된다.

---
day7
<h3>[chat01_1]</h3>
Explain :
<br>chat01_transports 를 토대로 기본 채팅 구현.

---
day8
<h3>[modal01]</h3>
Explain :
<br>modal 연습.