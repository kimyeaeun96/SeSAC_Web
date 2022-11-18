package sesac.second.example.sesacsecond.repository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import sesac.second.example.sesacsecond.domain.Board;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor // 자동으로 콘스트럭터 생성
public class JPARepository implements BoardRepository{
    private final EntityManager em;
    @Override
    public Board save(Board board) {
        return null;
    }
    @Override
    public Optional<Board> findById(int id) {

        return Optional.empty();
    }
    @Override
    public Optional<Board> findByName(String name) {
        return Optional.empty();
    }
    @Override
    public List<Board> findAll() {
        // Select * from board as b;
        List<Board> result = em.createQuery("select b from Board b", Board.class) // 보드 테아불울 찾는다.
                .getResultList();
        return result;
    }
}
