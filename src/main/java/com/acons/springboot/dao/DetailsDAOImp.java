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

import com.acons.springboot.entities.Address;
import com.acons.springboot.entities.Details;

/**
 * @author consi
 *
 */

@Repository
public class DetailsDAOImp implements DetailsDAO {

	@Autowired
	private EntityManager entityManager;

	@Override
	public List<Details> get() {
		Session currSession = entityManager.unwrap(Session.class);
		Query<Details> query = currSession.createQuery("from Details", Details.class);
		List<Details> list = query.getResultList();
		return list;
	}

	@Override
	public Details get(int pk_details_id) {
		Session currSession = entityManager.unwrap(Session.class);
		Details details = currSession.get(Details.class, pk_details_id);
		return details;
	}

	@Override
	public void save(Details details) {
		Session currSession = entityManager.unwrap(Session.class);
		currSession.saveOrUpdate(details);	
	}

	@Override
	public void delete(int pk_details_id) {
		Session currSession = entityManager.unwrap(Session.class);
		Details details = currSession.get(Details.class, pk_details_id);
		currSession.delete(details);	
	}

	@Override
	public List<Details> getbyuserid(int fk_user_id) {
		String querystring = "from Details where fk_user_id = " + fk_user_id;
		Session currSession = entityManager.unwrap(Session.class);
		Query<Details> query = currSession.createQuery(querystring, Details.class);
		List<Details> list = query.getResultList();
		return list;
	}

	@Override
	public void update(Details details) {
		// TODO Auto-generated method stub
		Session currSession = entityManager.unwrap(Session.class);
		currSession.update(details);
	}

}
