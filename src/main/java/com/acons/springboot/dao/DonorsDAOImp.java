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
import com.acons.springboot.entities.Donors;

/**
 * @author consi
 *
 */
@Repository
public class DonorsDAOImp implements DonorsDAO {

	@Autowired
	private EntityManager entityManager;

	@Override
	public List<Donors> get() {
		Session currSession = entityManager.unwrap(Session.class);
		Query<Donors> query = currSession.createQuery("from Donors", Donors.class);
		List<Donors> list = query.getResultList();
		return list;
	}

	@Override
	public Donors get(int pk_donors_id) {
		Session currSession = entityManager.unwrap(Session.class);
		Donors donors = currSession.get(Donors.class, pk_donors_id);
		return donors;
	}

	@Override
	public void save(Donors donors) {
		Session currSession = entityManager.unwrap(Session.class);
		currSession.saveOrUpdate(donors);
	}

	@Override
	public void delete(int pk_donor_id) {
		Session currSession = entityManager.unwrap(Session.class);
		Donors donors = currSession.get(Donors.class, pk_donor_id);
		currSession.delete(donors);

	}

	@Override
	public List<Donors> getbyuserid(int fk_user_id) {
		String querystring = "from Donors where fk_user_id = " + fk_user_id;
		Session currSession = entityManager.unwrap(Session.class);
		Query<Donors> query = currSession.createQuery(querystring, Donors.class);
		List<Donors> list = query.getResultList();
		return list;

	}

	@Override
	public void update(Donors donors) {
		// TODO Auto-generated method stub
		Session currSession = entityManager.unwrap(Session.class);
		currSession.update(donors);

	}

}
