package signup.helloJava2.service;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.transaction.annotation.Transactional;
import signup.helloJava2.domain.Member;
import signup.helloJava2.repository.MemberRepository;
import signup.helloJava2.repository.MemoryMemberRepository;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;

@WebAppConfiguration
@SpringBootTest
@Transactional
class MemberServiceIntegrationTest {
    // SpringConfig에서 구현체 받아온다.
    @Autowired MemberService memberService;
    @Autowired MemberRepository memberRepository;

    // @Commit 왜 롤백 안되냐고
    @Test
    void 회원가입() {
        //given : 뭔가 주어지면
        Member member = new Member();
        member.setName("spring2");

        //when : 이걸 할 때
        Long saveId = memberService.join(member);

        //then : 이 값이 나와야 한다
        Member findMember = memberService.findOne(saveId).get();
        assertThat(findMember.getName()).isEqualTo(findMember.getName());
    }

    @Test
    public void 중복_회원_예외() {
        //given
        Member member1 = new Member();
        member1.setName("spring");

        Member member2 = new Member();
        member2.setName("spring");

        //when
        memberService.join(member1);
        // assertThrows(a, b): b -> a
        IllegalStateException e = assertThrows(IllegalStateException.class, () -> memberService.join(member2));
        assertThat(e.getMessage()).isEqualTo("이미 존재하는 회원");

//        try {
//            memberService.join(member2); // 이 줄에서 validate 예외 뜨고 catch로 넘어감
//            fail();
//        }catch (IllegalStateException e) {
//            assertThat(e.getMessage()).isEqualTo("이미 존재하는 회원12121212");
//        }

        //then
    }
}