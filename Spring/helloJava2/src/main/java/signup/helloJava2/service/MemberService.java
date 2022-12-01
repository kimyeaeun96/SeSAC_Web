package signup.helloJava2.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import signup.helloJava2.domain.Member;
import signup.helloJava2.repository.MemberRepository;
import signup.helloJava2.repository.MemoryMemberRepository;

import java.util.List;
import java.util.Optional;

public class MemberService {

    private final MemberRepository memberRepository;

    // MemberService 입장에선 직접 NEW 하는것이 아니라 외부에서 memberRepository로 받아온다.
    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }



    /**
     * 회원가입
     */
    public Long join(Member member) {
        // null 반환 가능성 있을땐 Optional로 감싸준다.
        // 반환방법 3가지: ifPresent(), get()(직접 꺼내기 권장안함), OrElseGet()
//        Optional<Member> result = memberRepository.findByName(member.getName());
//        result.ifPresent(m -> {
//            throw new IllegalStateException("이미 존재하는 회원 입니다.")
//        });

        validateDuplicateMember(member); // 중복 회원 검증 하고
        memberRepository.save(member); // 레파지토리에 저장한다
        return member.getId();
    }
    // extract method 한다.
    private void validateDuplicateMember(Member member) {
        memberRepository.findByName(member.getName()) // 이 줄 결과는 Optional이니까 ifPresent 가능
                .ifPresent(m -> {
                    throw new IllegalStateException("이미 존재하는 회원");
                });
    }

    /**
     * 전체 회원 조회
     */
    public List<Member> findByMembers(){
        return memberRepository.findAll();
    }

    public Optional<Member> findOne(Long memberId) {
        return memberRepository.findById(memberId);
    }
}
