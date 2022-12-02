# FROM mysql

# ENV MYSQL_ROOT_PASSWORD=dpdms!2030

# EXPOSE 3306

# 16버전의 노드를 받겠다. 
FROM node:16 
# 작업 디렉토리는 /app 으로 하겠다 
WORKDIR /app 
# 소스코드 추가한다. -> 현재 위치 (.)에 /app 디렉토리를 추가한다.  
COPY . /app
# RUN 명령어 설정
RUN npm install 
# 포트 매핑
EXPOSE 8000
# 컨테이너가 만들어질때, 재실행 될때 실행되는 명령어 : node index.js ( 콤마는 띄어쓰기를 의미함)
CMD ["node", "index.js"]