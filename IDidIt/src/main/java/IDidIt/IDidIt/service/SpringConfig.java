package IDidIt.IDidIt.service;

import IDidIt.IDidIt.repository.JpaMemoRepository;
import IDidIt.IDidIt.repository.JpaUserRepository;
import IDidIt.IDidIt.repository.MemoRepository;
import IDidIt.IDidIt.repository.UserRepository;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;
// 스프링 빈에 직접 넣는다

@Configuration
public class SpringConfig {
    // @entity 도메인에 접근하기 위해 설정한다
    private EntityManager em;

    @Autowired
    public SpringConfig(EntityManager em) {
        this.em = em;
    }

    @Bean
    public UserService userService() {
        return new UserService(userRepository());
    }

    public UserRepository userRepository() {
        return new JpaUserRepository(em);
    };

    @Bean
    public MemoService memoService() {
        return new MemoService(memoRepository());
    }

    public MemoRepository memoRepository() {
        return new JpaMemoRepository(em);
    }
}
