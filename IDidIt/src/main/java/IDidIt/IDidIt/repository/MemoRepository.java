package IDidIt.IDidIt.repository;

import IDidIt.IDidIt.domain.Memo;

import java.util.List;
import java.util.Optional;

public interface MemoRepository {
    Memo memo(Memo memo);
    Optional<Memo> findById(String id);
    Optional<Memo> findByUser_id(String user_id);
    Optional<Memo> findByTitle(String title);
    Optional<Memo> findByDate(String date);
    Optional<Memo> findByContent(String content);
    Optional<Memo> findByWriteDate(String writedate);
    List<Memo> findAll();
}
