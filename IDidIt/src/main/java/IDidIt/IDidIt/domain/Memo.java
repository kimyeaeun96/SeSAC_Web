package IDidIt.IDidIt.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "CHILD")
public class Memo {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // PK 데이터 정렬 순서
    @OneToOne(mappedBy = "user_id")
    private String user_id;

    @Column(name="title")
    private String title;
    @Column(name="date")
    private String date;
    @Column(name="content")
    private String content;
    @Column(name="writedate")
    private String writedate;
}
