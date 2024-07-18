# CarrotPick Backend

## Tech Stack

<div style='flex'>
  <img src="https://img.shields.io/badge/NodeJs-5FA04E?style=flat&logo=Nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/ExpressJs-000000?style=flat&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=flat&logo=Sequelize&logoColor=white"/>
  <img src="https://img.shields.io/badge/Cloudflare-F38020?style=flat&logo=Cloudflare&logoColor=white"/>
  <img src="https://img.shields.io/badge/AmazonEC2-FF9900?style=flat&logo=Amazonec2&logoColor=white"/>
  <img src="https://img.shields.io/badge/AmazonRDS-527FFF?style=flat&logo=amazonrds&logoColor=white"/>
</div>

## 설명

<div align='center'>
  <img src="https://github.com/user-attachments/assets/d9d3d59a-3ac0-495f-b182-025018a0fad0">
  <img src="https://github.com/user-attachments/assets/468670f8-5391-487d-a649-30f143e0ea82">
</div>

#### 서버

ExpressJS를 활용해서 클라이언트의 /rank GET, POST 요청을 듣도록 구현.
서버를 라우터, 컨트롤러, 미들웨어로 분리해서 유지보수 친화적으로 구현.

#### 데이터베이스

Sequelize를 이용해서 AWS RDS에 연결해서 효율적으로 DB를 조작할 수 있도록 구현.

#### 환경변수

dotenv를 이용해서 다른 포트와 DB에서도 서버를 열 수 있도록 구현.
CORS환경변수로 클라이언트가 아닌 다른 요청은 받지 않도록 설정 가능.
