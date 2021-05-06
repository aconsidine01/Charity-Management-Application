/**
 * 
 */
package com.acons.springboot.dao;

import java.util.List;

import com.acons.springboot.entities.Name;
import com.acons.springboot.entities.User;

/**
 * @author consi
 *
 */

import java.util.List;
import javax.persistence.EntityManager;
import org.hibernate.query.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDAOImp implements UserDAO {

	@Autowired
	private EntityManager entityManager;

	@Override
	public List<User> get() {
		Session currSession = entityManager.unwrap(Session.class);
		Query<User> query = currSession.createQuery("from User", User.class);
		List<User> list = query.getResultList();
		return list;
	}

	@Override
	public User get(int pk_user_id) {
		Session currSession = entityManager.unwrap(Session.class);
		User user = currSession.get(User.class, pk_user_id);
		return user;
	}



	@Override
	public void save(User user) {
		Session currSession = entityManager.unwrap(Session.class);
		currSession.saveOrUpdate(user);

	}

	@Override
	public void delete(int pk_user_id) {
		Session currSession = entityManager.unwrap(Session.class);
		User user = currSession.get(User.class, pk_user_id);
		currSession.delete(user);

	}

	@Override
	public List<User> getbyemail(String email) {
		String querystring = "from User where email = '"  + email + "'";
		System.out.println(querystring);
		Session currSession = entityManager.unwrap(Session.class);
		Query<User> query = currSession.createQuery(querystring, User.class);
		List<User> list = query.getResultList();
		return list;
	}

	@Override
	public List<User> getbyemailpassword(String email, String password) {
		String querystring = "from User where email = '"  + email + "' and password = '" + password + "'";
		System.out.println(querystring);
		Session currSession = entityManager.unwrap(Session.class);
		Query<User> query = currSession.createQuery(querystring, User.class);
		List<User> list = query.getResultList();
		return list;
	}

	@Override
	public List<User> getbyusernamepassword(String username, String password) {
		String querystring = "from User where username = '"  + username + "' and password = '" + password + "'";
		System.out.println(querystring);
		Session currSession = entityManager.unwrap(Session.class);
		Query<User> query = currSession.createQuery(querystring, User.class);
		List<User> list = query.getResultList();
		return list;
	}

	@Override
	public void update(User user) {
		// TODO Auto-generated method stub
		Session currSession = entityManager.unwrap(Session.class);
		currSession.update(user);

	}

	@Override
	public void failedlogon(User user) {
		// TODO Auto-generated method stub
		Session currSession = entityManager.unwrap(Session.class);
		currSession.update(user);
	}

}
