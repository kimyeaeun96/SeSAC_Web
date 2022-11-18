package sesac.second.example.sesacsecond.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sesac.second.example.sesacsecond.domain.Board;

import java.util.Optional;

public interface SDBoardRepository extends JpaRepository<Board, Integer> {
    Optional<Board> findByName(String name);
}
