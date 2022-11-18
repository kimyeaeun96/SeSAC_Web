package sesac.second.example.sesacsecond.service;

import sesac.second.example.sesacsecond.domain.Board;
import sesac.second.example.sesacsecond.repository.BoardRepository;
import sesac.second.example.sesacsecond.repository.MemoryRepository;
import java.util.List;
import java.util.Optional;

public class BoardService {
    private final BoardRepository memoryRepository = new MemoryRepository();
    public int write(Board board) {
        // 이름 중복 검사
        memoryRepository.save(board);
        return board.getID();
    }

    public Optional<Board> findOneById(int id){
    return memoryRepository.findById(id);
    }

    public Optional<Board> findOneById(String name){
    return memoryRepository.findByName(name);
    }
    public List<Board> findBoards(){
        return memoryRepository.findAll();
    }

    public Optional<Board> findOneByName(String name) {
        return memoryRepository.findByName(name);
    }
}
