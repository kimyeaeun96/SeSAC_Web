package sesac.second.example.sesacsecond.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sesac.second.example.sesacsecond.domain.Board;
import sesac.second.example.sesacsecond.repository.BoardRepository;
import sesac.second.example.sesacsecond.repository.JPARepository;
import sesac.second.example.sesacsecond.repository.MemoryRepository;
import sesac.second.example.sesacsecond.repository.SDBoardRepository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class BoardService2 {
    private final SDBoardRepository boardRepository;
    public int write(Board board) {
        // 이름 중복 검사

        boardRepository.save(board);
        return board.getID();
    }

    public  Optional<Board> findOneById(int id){
        return boardRepository.findById(id);
    }
    public  Optional<Board> findOneByName(String name) {
        return boardRepository.findByName(name);
    }
    public  List<Board> findBoards(){
        return boardRepository.findAll();
    }
}
