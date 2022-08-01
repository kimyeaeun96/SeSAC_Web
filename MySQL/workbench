create database sesac;
use sesac;

create table prc37 (  
	ID varchar(20) not null primary key, 
    name varchar(5) not null,
    age int(2),
    gender varchar(2) not null,
    email varchar(50),
    promotion varchar(2) default 'x'
);

ALTER TABLE prc37 modify column ID varchar(10); 
ALTER TABLE prc37 drop column age;
ALTER TABLE prc37 modify column gender varchar(2) not null default '여';
ALTER TABLE prc37 add column interest varchar(100) null;


create database sesac;
use sesac;   /* 커서 두고 엔터 */

create table user (  /* 여기 안에서 엔터 하고 새로고침하면 유저 테이블 생성*/
	ID varchar(10) not null primary key, /*10글자까지 가능. 빈값 x 프라이머리키 식별자*/
    name varchar(5) not null default '', /*이름을 지정하지 않으면 디폴트로 ''값을 넣겠다.*/
    birthday date not null /*0000-00-00*/
);
INSERT INTO user (ID, name, birthday) VALUES ('id3', '홍길동2', '2022-08-01');
INSERT INTO user (ID, birthday) VALUES ('id5', '2022-08-01');
INSERT INTO user VALUES ('YEYE', '김예은', '2022-08-01');

SELECT * FROM user;
SELECT * FROM user WHERE name = '홍길동' AND id = 'id1';
SELECT * FROM user WHERE name = '홍길동' ORDER BY ID DESC; /*아이디 칼럼 기준으로 내림차순. 오름차순은 ASCE*/
SELECT * FROM user ORDER BY ID DESC LIMIT 2; /* 위에서부터 2개만 보여준다*/
SELECT * FROM user LIMIT 2;
SELECT name, birthday FROM user;

/* BETWEEN a AND b */
SELECT * FROM player WHERE height BETWEEN 160 AND 180; /*플레이어 칼럼에서 하이트 속성 중에 160 - 180*/
/* IN  ~안에 있는지 없는지 */
SELECT * FROM player WHERE position IN ('striker', 'goalkeeper'); /* 플레이어 칼럼에서 포지션 속성 중 스트라이커나 골키퍼인 것만 가져와라*/
SELECT * FROM player WHERE position = 'striker' OR position = 'goalkeeper'; /* 위와 동일하다*/
/* LIKE  _ % _는 글자수를 의미. 앞의 두글자__ %임의의 글자와 일치. 형태랑 일치하는 모든것. 이씨 성을 찾는다: 이%*/
 SELECT * FROM user WHERE name LIKE '%은';
 
UPDATE user SET name = '홍길동' WHERE ID !=''; /* 모든 사람의 이름이 홍길동으로 변한다 */
UPDATE user SET name = '홍길동2', birthday = '2022-07-31' WHERE ID !='id2'; 
SELECT * FROM user;
 
DELETE FROM user WHERE name='홍길동2';

DROP TABLE user;
create database sesac;
use sesac;   /* 커서 두고 엔터 */

create table user (  
	id varchar(10) not null primary key,
    pw varchar(20) not null, 
    name varchar(5) not null,
    gender ENUM('F', 'M', '') default '',
    birthday DATE not null,
    age int(3) not null default 0
);
DESC user;

INSERT INTO user VALUES ('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', '24');

SELECT * FROM user;
SELECT * FROM user ORDER BY birthday asc; /* 1번 */
SELECT * FROM user WHERE gender = 'M' ORDER BY gender desc; /* 2번 */
SELECT id, name FROM user WHERE birthday LIKE "1990%"; /* 3번 */
SELECT * FROM user WHERE birthday LIKE "%06%"; /* 4번 */
SELECT * FROM user WHERE gender='M' AND birthday LIKE "1970%"; /* 5번 */
SELECT * FROM user WHERE age ORDER BY age desc limit 3; /* 6번 */
SELECT * FROM user WHERE age BETWEEN 25 and 50; /* 7번 */
UPDATE user SET pw = 12345678 WHERE id = 'hong1234'; /* 8번 */
DELETE FROM user WHERE id = 'jungkrat'; /* 9번 */

