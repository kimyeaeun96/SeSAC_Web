package IDidIt.IDidIt.repository;

import IDidIt.IDidIt.domain.User;
import java.util.*;

public interface UserRepository {
    User save(User user);
    Optional<User> findById(String id);
    Optional<User> findByPassword(String password);
    Optional<User> findByName(String name);
    Optional<User> findByEmail(String email);
    Optional<User> findByGender(String gender);
    Optional<User> findByNickname(String nickname);
    Optional<User> findByPhoneNumber(String phoneNumber);
    List<User> findAll();
}
