package signup.helloJava2.service;

import org.hibernate.cache.spi.TimestampsRegion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import signup.helloJava2.aop.TimeTraceAop;
import signup.helloJava2.repository.JpaMemberRepository;
import signup.helloJava2.repository.MemberRepository;

import java.sql.Time;

@Configuration
public class SpringConfig {

//    // DataSource를 설정하고, SpringConfig 파일과 연결한 다음
//    private DataSource dataSource;
//
//    @Autowired
//    public SpringConfig(DataSource dataSource) {
//        this.dataSource = dataSource;
//    }

//    // jpa
//    private EntityManager em;
//    @Autowired
//    public SpringConfig(EntityManager em) {
//        this.em = em;
//    }

    // 스프링 데이터 jpa
    private final MemberRepository memberRepository;

    @Autowired
    public SpringConfig(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }


    @Bean
    public MemberService memberService() {

        return new MemberService(memberRepository);
    }
    // AOP를 스프링 빈에 올리는 방법: 1. 클래스 @Component 2. 스프링컨피그 @Bean
//    @Bean
//    public TimeTraceAop timeTraceAop() {
//        return new TimeTraceAop();
//    }
/*
    // 조립코드 (어셈블리 코드)
    // 레파지토리의 구현체와 dataScource를 연결하면 디비 연결 끝
    @Bean
    public MemberRepository memberRepository() {
        // return new MemoryMemberRepository(dataSource);
        // return new JdbcMemberRepository(dataSource);
        return new JpaMemberRepository(em);
    } */
}

