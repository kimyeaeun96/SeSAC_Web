package signup.helloJava2.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import signup.helloJava2.repository.JdbcMemberRepository;
import signup.helloJava2.repository.MemberRepository;
import signup.helloJava2.repository.MemoryMemberRepository;

import javax.sql.DataSource;

@Configuration
public class SpringConfig {

    // DataSource를 설정하고, SpringConfig 파일과 연결한 다음
    private DataSource dataSource;

    @Autowired
    public SpringConfig(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @Bean
    public MemberService memberService() {

        return new MemberService(memberRepository());
    }

    @Bean
    public MemberRepository memberRepository() {
        // 레파지토리의 구현체와 dataScource를 연결하면 디비 연결 끝
        return new JdbcMemberRepository(dataSource);
    }

}
