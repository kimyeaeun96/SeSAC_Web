package sesac.second.example.sesacsecond.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity // 얘가 테이블이다!!!
@Table(name="board") // 테이블 이름을 board로 하겠다.
public class Board {
    @Id // PK 선언
    @GeneratedValue // = auto_increment
    private int ID;

    @Column(length=20, nullable=false)
    //@Column(name=userName)
    private String Name;
    // name varchar(20) not null
    private String content;
    // content varchar(255)
}
