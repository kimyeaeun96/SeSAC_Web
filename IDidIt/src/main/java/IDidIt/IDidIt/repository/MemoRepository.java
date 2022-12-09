package IDidIt.IDidIt.repository;

import IDidIt.IDidIt.domain.Memo;

import java.util.List;
import java.util.Optional;

public interface MemoRepository {
    Memo save(Memo memo);
    Optional<Memo> findById(String id);
    Optional<Memo> findByUserID(String userID);
    Optional<Memo> findByTitle(String title);
    Optional<Memo> findByDate(String date);
    Optional<Memo> findByContent(String content);
    Optional<Memo> findByWriteDate(String writeDate);
    List<Memo> findAll();
}
