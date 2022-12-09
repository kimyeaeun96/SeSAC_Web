package IDidIt.IDidIt.service;

import IDidIt.IDidIt.repository.MemoRepository;
import IDidIt.IDidIt.repository.UserRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
// 스프링 빈에 직접 넣는다

@Configuration
public class SpringConfig {
    // @entity 도메인에 접근하기 위해 설정한다
//    private EntityManager em;
//
//    @Autowired
//    public SpringConfig(EntityManager em) {
//        this.em = em;
//    }

    private final MemoRepository memoRepository;
    private final UserRepository userRepository;

    public SpringConfig(MemoRepository memoRepository, UserRepository userRepository) {
        this.memoRepository = memoRepository;
        this.userRepository = userRepository;
    }

    @Bean
    public UserService userService() {
        return new UserService(userRepository);
    }

//    public UserRepository userRepository() {
//        return new JpaUserRepository(em);
//    };

    @Bean
    public MemoService memoService() {
        return new MemoService(memoRepository);
    }

//    public MemoRepository memoRepository() {
//        return new JpaMemoRepository(em);
//    }
}
