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

import com.acons.springboot.entities.Name;
import com.acons.springboot.entities.Recipients;

/**
 * @author consi
 *
 */

@Repository
public class RecipientsDAOImp  implements RecipientsDAO {

	@Autowired
	private EntityManager entityManager;
	
	@Override
	public List<Recipients> get() {
		Session currSession = entityManager.unwrap(Session.class);
		  Query<Recipients> query = currSession.createQuery("from Recipients", Recipients.class);
		  List<Recipients> list = query.getResultList();
		  return list;
	}

	@Override
	public Recipients get(int pk_recipient_id) {
		Session currSession = entityManager.unwrap(Session.class);
		Recipients recipients = currSession.get(Recipients.class, pk_recipient_id);
		  return recipients;
	}

	@Override
	public void save(Recipients recipients) {
		  Session currSession = entityManager.unwrap(Session.class);
		  currSession.saveOrUpdate(recipients);
		
	}

	@Override
	public void delete(int pk_recipient_id) {
		Session currSession = entityManager.unwrap(Session.class);
		Recipients recipients = currSession.get(Recipients.class, pk_recipient_id);
		  currSession.delete(recipients);
		
	}

	@Override
	public List<Recipients> getbyuserid(int fk_user_id) {
		String querystring = "from Recipients where fk_user_id = " + fk_user_id;
		Session currSession = entityManager.unwrap(Session.class);
		  Query<Recipients> query = currSession.createQuery(querystring, Recipients.class);
		  List<Recipients> list = query.getResultList();
		  return list;
	}

}
