package IDidIt.IDidIt.repository;

import IDidIt.IDidIt.domain.Memo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

// <T, id> T = 도메인, id = 식별자 pk의 type
public interface SpringDataJpaMemoRepository extends JpaRepository<Memo, Long>, MemoRepository {
    @Override
    Optional<Memo> findById(String id);
}
