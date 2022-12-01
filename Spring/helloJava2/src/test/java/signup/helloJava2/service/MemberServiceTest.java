package signup.helloJava2.service;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import signup.helloJava2.domain.Member;
import signup.helloJava2.repository.MemoryMemberRepository;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.*;

class MemberServiceTest {

    MemberService memberService;
    MemoryMemberRepository memberRepository;

    // DI
    @BeforeEach
    public void beforeEach() {
        // memberRepository 선언하고 클래스 속성 부분의 memberRepository에 저장됨
        memberRepository = new MemoryMemberRepository();
        // MemberService는 실제 레파지토리의 MemberService로 간다.
        memberService = new MemberService(memberRepository);
    }

    @AfterEach
    public void afterEach() {
        memberRepository.clearStore();
    }

    @Test
    void 회원가입() {
        //given : 뭔가 주어지면
        Member member = new Member();
        member.setName("spring");

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

    @Test
    void findByMembers() {
    }

    @Test
    void findOne() {
    }
}