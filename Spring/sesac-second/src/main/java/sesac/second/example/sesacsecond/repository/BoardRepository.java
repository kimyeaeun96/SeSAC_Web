package sesac.second.example.sesacsecond.repository;

import sesac.second.example.sesacsecond.domain.Board;

import javax.swing.text.html.Option;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public interface BoardRepository {
    Board save(Board board);
    // Board 유무에 상관없이 optional로 한번 감싸져서 리턴한다.
    Optional<Board> findById(int id);
    Optional<Board> findByName(String name);
    List<Board> findAll();
}
