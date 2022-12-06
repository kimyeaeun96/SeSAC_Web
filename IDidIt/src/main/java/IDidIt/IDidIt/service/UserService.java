package IDidIt.IDidIt.service;


import IDidIt.IDidIt.repository.UserRepository;
import jakarta.transaction.Transactional;

@Transactional
public class UserService {
    // 서비스 - 레파지토리 연결한다
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // 유저 서비스와 관련된 구현로직
}
