루트폴더에 .env 환경변수 파일을 작성해야 서버를 구동할 수 있다.   
데이터베이스는 MySQL을 사용한다.   
작성해야할 환경변수는 다음과같다.   
* * *
PORT=실행할 포트번호   
DATABASE_HOST=데이터베이스의 엔드포인트   
DATABASE_USER=데이터베이스의 사용자 명   
DB_PASSWORD=데이터베이스 사용자의 암호   
CORS_ALLOWED_ORIGIN=프론트단에서 본서버에 접속할때 사용되는 주소   
