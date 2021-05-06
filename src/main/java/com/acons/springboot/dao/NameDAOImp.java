/**
 * 
 */
package com.acons.springboot.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.acons.springboot.entities.Name;
import com.acons.springboot.entities.User;


/**
 * @author consi
 *
 */

@Repository
public class NameDAOImp implements NameDAO {
	
	@Autowired
	private EntityManager entityManager;

	@Override
	public List<Name> get() {
		Session currSession = entityManager.unwrap(Session.class);
		  Query<Name> query = currSession.createQuery("from Name", Name.class);
		  List<Name> list = query.getResultList();
		  return list;
	}

	@Override
	public Name get(int pk_name_id) {
		Session currSession = entityManager.unwrap(Session.class);
		  Name name = currSession.get(Name.class, pk_name_id);
		  return name;
	}
	



	@Override
	public void save(Name name) {
		  Session currSession = entityManager.unwrap(Session.class);
		  currSession.saveOrUpdate(name);
		
	}

	@Override
	public void delete(int pk_name_id) {
		Session currSession = entityManager.unwrap(Session.class);
		  Name name = currSession.get(Name.class, pk_name_id);
		  currSession.delete(name);
		
	}
	
	@Override
	public List<Name> getbyuserid(int fk_user_id) {
		String querystring = "from Name where fk_user_id = " + fk_user_id;
		Session currSession = entityManager.unwrap(Session.class);
		  Query<Name> query = currSession.createQuery(querystring, Name.class);
		  List<Name> list = query.getResultList();
		  return list;
	}

	@Override
	public void update(Name name) {
		  Session currSession = entityManager.unwrap(Session.class);
		  currSession.update(name);
		
	}

}
