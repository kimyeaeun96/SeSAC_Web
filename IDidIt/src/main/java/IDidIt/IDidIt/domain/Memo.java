package IDidIt.IDidIt.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "Memo")
public class Memo {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // PK 데이터 정렬 순서
    @OneToOne(mappedBy = "memo")
    private User userID;

    @Column(name="title")
    private String title;
    @Column(name="date")
    private String date;
    @Column(name="content")
    private String content;
    @Column(name="writeDate")
    private String writeDate;
}
