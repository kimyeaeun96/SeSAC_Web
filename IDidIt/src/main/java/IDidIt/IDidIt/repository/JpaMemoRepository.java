package IDidIt.IDidIt.repository;

import IDidIt.IDidIt.domain.Memo;
import jakarta.persistence.EntityManager;

import java.util.List;
import java.util.Optional;

public class JpaMemoRepository implements MemoRepository {

    private final EntityManager em;

    public JpaMemoRepository(EntityManager em) {
        this.em = em;
    }

    @Override
    public Memo memo(Memo memo) {
        return null;

    }

    @Override
    public Optional<Memo> findById(String id) {
        return Optional.empty();
    }

    @Override
    public Optional<Memo> findByUser_id(String user_id) {
        return Optional.empty();
    }

    @Override
    public Optional<Memo> findByTitle(String title) {
        return Optional.empty();
    }

    @Override
    public Optional<Memo> findByDate(String date) {
        return Optional.empty();
    }

    @Override
    public Optional<Memo> findByContent(String content) {
        return Optional.empty();
    }

    @Override
    public Optional<Memo> findByWriteDate(String writedate) {
        return Optional.empty();
    }

    @Override
    public List<Memo> findAll() {
        return null;
    }
}
