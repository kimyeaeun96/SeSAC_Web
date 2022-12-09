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
    public Memo save(Memo memo) {
        em.persist(memo);
        return memo;
    }

    @Override
    public Optional<Memo> findById(String id) {
        Memo memo = em.find(Memo.class, id);
        return Optional.ofNullable(memo);
    }

    @Override
    public Optional<Memo> findByUserID(String userID) {
        Memo memo = em.find(Memo.class, userID);
        return Optional.ofNullable(memo);
    }

    @Override
    public Optional<Memo> findByTitle(String title) {
        List<Memo> result = em.createQuery("select m from Memo m where m.title = :title", Memo.class)
                .setParameter("title", title)
                .getResultList();
        return result.stream().findAny();
    }

    @Override
    public Optional<Memo> findByDate(String date) {
    List<Memo> result = em.createQuery("select m from Memo m where m.date = :date", Memo.class)
            .setParameter("date", date)
            .getResultList();
        return result.stream().findAny();
    }

    @Override
    public Optional<Memo> findByContent(String content) {
        List<Memo> result = em.createQuery("select m from Memo m where m.content = :content", Memo.class)
                .setParameter("content", content)
                .getResultList();
        return result.stream().findAny();
    }

    @Override
    public Optional<Memo> findByWriteDate(String writeDate) {
        List<Memo> result = em.createQuery("select m from Memo m where m.writeDate = :writeDate", Memo.class)
                .setParameter("writeDate", writeDate)
                .getResultList();
        return result.stream().findAny();
    }

    @Override
    public List<Memo> findAll() {
        return em.createQuery("select m from Memo m", Memo.class)
                .getResultList();
    }
}
