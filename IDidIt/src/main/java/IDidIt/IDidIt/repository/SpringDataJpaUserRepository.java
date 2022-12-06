package IDidIt.IDidIt.repository;

import IDidIt.IDidIt.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SpringDataJpaUserRepository extends JpaRepository<User, String> {
    @Override
    Optional<User> findById(String id);
}
