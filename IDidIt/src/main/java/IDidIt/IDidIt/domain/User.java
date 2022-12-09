package IDidIt.IDidIt.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "User")
public class User {
    @Id
    private String id; // PK 유저 아이디
    @OneToOne
    @JoinColumn(name = "User")
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
    @Column(name="phoneNumber")
    private String phoneNumber;
}
