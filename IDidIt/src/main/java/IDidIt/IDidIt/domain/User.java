package IDidIt.IDidIt.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "PARENT")
public class User {
    @Id
    @GeneratedValue
    private String id; // PK 유저 아이디
    @OneToOne
    @JoinColumn(name = "MEMO_USER_ID")
    private Memo memo;

    @Column(name="password")
    private String password;
    @Column(name="name")
    private String name; // 유저 이름
    @Column(name="email")
    private String email;
    @Column(name="gender")
    private String gender;
    @Column(name="nickname")
    private String nickname; // 유저 닉네임
    @Column(name="phone_number")
    private String phone_number;
}
