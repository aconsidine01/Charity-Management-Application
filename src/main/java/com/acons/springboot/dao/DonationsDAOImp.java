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

import com.acons.springboot.entities.Donations;

/**
 * @author consi
 *
 */

@Repository
public class DonationsDAOImp implements DonationsDAO {

	@Autowired
	private EntityManager entityManager;

	@Override
	public List<Donations> get() {
		Session currSession = entityManager.unwrap(Session.class);
		Query<Donations> query = currSession.createQuery("from Donations", Donations.class);
		List<Donations> list = query.getResultList();
		return list;
	}

	@Override
	public Donations get(int pk_donation_id) {
		Session currSession = entityManager.unwrap(Session.class);
		Donations donations = currSession.get(Donations.class, pk_donation_id);
		return donations;
	}

	@Override
	public void save(Donations donations) {
		Session currSession = entityManager.unwrap(Session.class);
		currSession.saveOrUpdate(donations);		
	}

	@Override
	public void delete(int pk_donation_id) {
		Session currSession = entityManager.unwrap(Session.class);
		Donations donations = currSession.get(Donations.class, pk_donation_id);
		currSession.delete(donations);	
	}

	@Override
	public List<Donations> getbydonorid(int fk_donor_id) {
		String querystring = "from Donations where fk_donor_id = " + fk_donor_id;
		Session currSession = entityManager.unwrap(Session.class);
		Query<Donations> query = currSession.createQuery(querystring, Donations.class);
		List<Donations> list = query.getResultList();
		return list;
	}

	@Override
	public List<Donations> getbyrecipientid(int fk_recipient_id) {
		String querystring = "from Donations where fk_recipient_id = " + fk_recipient_id;
		Session currSession = entityManager.unwrap(Session.class);
		Query<Donations> query = currSession.createQuery(querystring, Donations.class);
		List<Donations> list = query.getResultList();
		return list;
	}

	@Override
	public void update(Donations donations) {
		// TODO Auto-generated method stub
		Session currSession = entityManager.unwrap(Session.class);
		currSession.update(donations);	
	}

}
