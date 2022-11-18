package sesac.second.example.sesacsecond.repository;

import sesac.second.example.sesacsecond.domain.Board;

import java.util.*;

public class MemoryRepository implements BoardRepository {
    private static Map<Integer, Board> store = new HashMap<>();
    // { key: value, key: value }
    private static int id = 0;
    @Override
    public Board save(Board board) {
        // board = { name: d, content: d, ID: X }
        // board 값은 이름과 내용이 적혀 왔다.
        // 추가하는 코드
        board.setID(++id);
        // board = { name: d, content: d, ID: 1 }
        store.put(board.getID(), board);
        return board;
        // obj = {}
        // obj['string'] = "abc";
    }
    @Override
    public Optional<Board> findById(int id) {
        return Optional.ofNullable(store.get(id));
    }
    @Override
    public Optional<Board> findByName(String name) {
        return store.values().stream() // store 에서 board객체들(values) 하나씩 찾아볼것이다.
                .filter(board -> board.getName().equals(name)) // board의 이름이 내가 전달 받은 이름과 같은 친구
                .findAny(); // stream에서 가장 먼저 탐색되는 요소를 Optional로 김싸져서 리턴된다.
    }
    @Override
    public List<Board> findAll() {
        // 찾는 코드
        ArrayList<Board> result = new ArrayList<>(store.values());
        // Map(store) 에서 value들 ( = 값들을 ) 모두 찾고 ArrayList로 만든다.
        return result;
    }
}