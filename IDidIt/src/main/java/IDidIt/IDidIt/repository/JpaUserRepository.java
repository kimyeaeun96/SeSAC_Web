package IDidIt.IDidIt.repository;

import IDidIt.IDidIt.domain.User;
import jakarta.persistence.EntityManager;

import java.util.List;
import java.util.Optional;

public class JpaUserRepository implements UserRepository{

    private final EntityManager em;

    public JpaUserRepository(EntityManager em) {
        this.em = em;
    }

    @Override
    public User save(User user) {
        em.persist(user);
        return user;
    }

    @Override
    public Optional<User> findById(String id) {
         User user = em.find(User.class, id);
         return Optional.ofNullable(user);
    }

    @Override
    public Optional<User> findByPassword(String password) {
        List<User> result = em.createQuery("select u from User u where u.password = :password", User.class)
                .setParameter("password", password)
                .getResultList();
        return result.stream().findAny();
    }

    @Override
    public Optional<User> findByName(String name) {
        List<User> result = em.createQuery("select u from User u where u.name = :name", User.class)
                .setParameter("name", name)
                .getResultList();
        return result.stream().findAny();
    }

    @Override
    public Optional<User> findByEmail(String email) {
        List<User> result = em.createQuery("select u from User u where u.email = :email", User.class)
                .setParameter("email", email)
                .getResultList();
        return result.stream().findAny();
    }

    @Override
    public Optional<User> findByGender(String gender) {
        List<User> result = em.createQuery("select u from User u where u.gender = :gender", User.class)
                .setParameter("gender", gender)
                .getResultList();
        return result.stream().findAny();
    }

    @Override
    public Optional<User> findByNickname(String nickname) {
        List<User> result = em.createQuery("select u from User u where u.nickname = :nickname", User.class)
                .setParameter("nickname", nickname)
                .getResultList();
        return result.stream().findAny();

    }

    @Override
    public Optional<User> findByPhoneNumber(String phone_number) {
        List<User> result = em.createQuery("select u from User u where u.phone_number= :phone_number", User.class)
                .setParameter("phone_number", phone_number)
                .getResultList();
        return result.stream().findAny();
    }

    @Override
    public List<User> findAll() {
        return em.createQuery("select u from User u", User.class)
                .getResultList();
    }
}
