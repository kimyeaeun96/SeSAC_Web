package IDidIt.IDidIt.service;

import IDidIt.IDidIt.repository.MemoRepository;
import jakarta.transaction.Transactional;

@Transactional
public class MemoService {
    // 서비스 - 레파지토리 연결
    private final MemoRepository memoRepository;

    public MemoService(MemoRepository memoRepository) {
        this.memoRepository = memoRepository;
    }


    // 메모 서비스와 관련된 구현로직
}
